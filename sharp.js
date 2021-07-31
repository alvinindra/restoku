// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/content');

if (!fs.existsSync(target)) {
  fs.mkdirSync(target);
}

fs.readdirSync(target).forEach((image) => {
  sharp(`${target}/${image}`)
    .resize(500)
    .toFile(path.resolve(__dirname, `${target}/${image.split('.')
      .slice(0, -1)
      .join('.')}-large.jpg`));

  sharp(`${target}/${image}`)
    .resize(300)
    .toFile(path.resolve(__dirname, `${target}/${image.split('.')
      .slice(0, -1)
      .join('.')}-medium.jpg`));
});
