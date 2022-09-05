const { promisify } = require('util');
const fs = require('fs');
const convert = require('heic-convert');

(async () => {
  const inputBuffer = await promisify(fs.readFile)('flower.heic');

  console.log({inputBuffer})
  const outputBuffer = await convert({
    buffer: inputBuffer, // the HEIC file buffer
    format: 'JPEG',      // output format
    quality: 1           // the jpeg compression quality, between 0 and 1
  }).catch(err => console.log(err));

  await promisify(fs.writeFile)('./result.jpg', outputBuffer);
})();