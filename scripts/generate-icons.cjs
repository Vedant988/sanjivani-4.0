const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
let pngToIco = require('png-to-ico');
pngToIco = pngToIco.default ?? pngToIco;

(async () => {
  try {
    const CONFIG = {
      LOGO_SIZE: 256,
      LOGO_RETINA: 512,
      OG: { width: 1200, height: 630 },
      FAV_SIZES: [16, 32],
      APPLE_SIZE: 180,
      QUALITY: 90,
      BACKGROUND: { r: 255, g: 255, b: 255, alpha: 1 }
    };

    const srcPath = path.resolve(__dirname, '..', 'src', 'Website logo', 'Team Sanjivani logo .png');
    const outDir = path.resolve(__dirname, '..', 'public');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    // 256x256 (logo), 512x512 (retina), WebP 256
    await sharp(srcPath)
      .resize({ width: CONFIG.LOGO_SIZE, height: CONFIG.LOGO_SIZE, fit: 'contain', background: CONFIG.BACKGROUND })
      .png({ quality: CONFIG.QUALITY })
      .toFile(path.join(outDir, 'logo.png'));

    await sharp(srcPath)
      .resize({ width: CONFIG.LOGO_RETINA, height: CONFIG.LOGO_RETINA, fit: 'contain', background: CONFIG.BACKGROUND })
      .png({ quality: CONFIG.QUALITY })
      .toFile(path.join(outDir, 'logo@2x.png'));

    await sharp(srcPath)
      .resize({ width: CONFIG.LOGO_SIZE, height: CONFIG.LOGO_SIZE, fit: 'contain', background: CONFIG.BACKGROUND })
      .webp({ quality: CONFIG.QUALITY })
      .toFile(path.join(outDir, 'logo.webp'));

    // OG image (1200x630) for social shares
    await sharp(srcPath)
      .resize({ width: CONFIG.OG.width, height: CONFIG.OG.height, fit: 'contain', background: CONFIG.BACKGROUND })
      .png({ quality: CONFIG.QUALITY })
      .toFile(path.join(outDir, 'og-image.png'));

    // Favicons
    await sharp(srcPath).resize(16, 16, { fit: 'contain', background: { r:0,g:0,b:0,alpha:0 } }).png().toFile(path.join(outDir, 'favicon-16x16.png'));
    await sharp(srcPath).resize(32, 32, { fit: 'contain', background: { r:0,g:0,b:0,alpha:0 } }).png().toFile(path.join(outDir, 'favicon-32x32.png'));

    // Apple touch icon
    await sharp(srcPath).resize(180, 180, { fit: 'contain', background: { r:0,g:0,b:0,alpha:0 } }).png().toFile(path.join(outDir, 'apple-touch-icon.png'));

    // favicon.ico from 32x32 & 16x16
    const pngs = [await fs.promises.readFile(path.join(outDir, 'favicon-32x32.png')), await fs.promises.readFile(path.join(outDir, 'favicon-16x16.png'))];
    const icoBuf = await pngToIco(pngs);
    await fs.promises.writeFile(path.join(outDir, 'favicon.ico'), icoBuf);

    console.log('Icons generated in', outDir);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
