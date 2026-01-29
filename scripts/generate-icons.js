const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');

(async () => {
  try {
    const srcPath = path.resolve(__dirname, '..', 'src', 'Website logo', 'Team Sanjivani logo .png');
    const outDir = path.resolve(__dirname, '..', 'public');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const image = await Jimp.read(srcPath);

    // Produce optimized main logo (256x256) and retina (512x512)
    const logo256 = image.clone().contain(256, 256, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE).background(0x00000000);
    await logo256.quality(90).writeAsync(path.join(outDir, 'logo.png'));

    const logo512 = image.clone().contain(512, 512, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE).background(0x00000000);
    await logo512.quality(90).writeAsync(path.join(outDir, 'logo@2x.png'));

    // WebP
    await logo256.clone().quality(90).writeAsync(path.join(outDir, 'logo.webp'));

    // Favicons (16x16, 32x32)
    const favicon16 = image.clone().contain(16, 16, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE).background(0x00000000);
    const favicon32 = image.clone().contain(32, 32, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE).background(0x00000000);
    await favicon16.quality(90).writeAsync(path.join(outDir, 'favicon-16x16.png'));
    await favicon32.quality(90).writeAsync(path.join(outDir, 'favicon-32x32.png'));

    // Apple touch icon (180x180)
    const apple = image.clone().contain(180, 180, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE).background(0x00000000);
    await apple.quality(90).writeAsync(path.join(outDir, 'apple-touch-icon.png'));

    // favicon.ico from 32x32 and 16x16
    const pngs = [await fs.promises.readFile(path.join(outDir, 'favicon-32x32.png')), await fs.promises.readFile(path.join(outDir, 'favicon-16x16.png'))];
    const icoBuf = await pngToIco(pngs);
    await fs.promises.writeFile(path.join(outDir, 'favicon.ico'), icoBuf);

    console.log('Icons generated in', outDir);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
