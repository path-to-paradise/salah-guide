// One-off script to rasterize public/icon-mosque.svg into the PNG sizes
// the PWA manifest and apple-touch-icon need. Run with `node scripts/generate-icons.mjs`.
import sharp from 'sharp'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dir = path.dirname(fileURLToPath(import.meta.url))
const svgPath = path.join(dir, '..', 'public', 'icon-mosque.svg')
const svg = readFileSync(svgPath)

const targets = [
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
  { file: 'icon-512-maskable.png', size: 512 },
  { file: 'apple-touch-icon.png', size: 180 },
]

for (const { file, size } of targets) {
  const out = path.join(dir, '..', 'public', file)
  await sharp(svg, { density: 384 }).resize(size, size).png().toFile(out)
  console.log('wrote', file, `${size}x${size}`)
}
