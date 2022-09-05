
```
$ file flower.heic 

flower.heic: JPEG image data, JFIF standard 1.01, aspect ratio, density 1x1, segment length 16, Exif Standard: [TIFF image data, big-endian, direntries=10, manufacturer=Apple, model=iPhone SE (2nd generation), orientation=upper-right, xresolution=167, yresolution=175, resolutionunit=2, software=15.1, datetime=2022:01:13 13:23:04, hostcomputer=iPhone SE (2nd generation)TIFF image data, big-endian, direntries=10, manufacturer=Apple, model=iPhone SE (2nd generation), orientation=upper-right, xresolution=167, yresolution=175, resolutionunit=2, software=15.1, datetime=2022:01:13 13:23:04, hostcomputer=iPhone SE (2nd generation)], baseline, precision 8, 4032x3024, components 3
```

```
{
  inputBuffer: <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 00 ff e1 17 0a 45 78 69 66 00 00 4d 4d 00 2a 00 00 00 08 00 0a 01 0f 00 02 00 00 00 06 00 00 ... 2150157 more bytes>
}
```

```
TypeError: input buffer is not a HEIC image
    at decodeBuffer (/Users/z/Desktop/heic-convert-test/node_modules/heic-decode/index.js:48:11)
    at module.exports (/Users/z/Desktop/heic-convert-test/node_modules/heic-decode/index.js:69:46)
    at convert (/Users/z/Desktop/heic-convert-test/node_modules/heic-convert/index.js:39:25)
    at module.exports (/Users/z/Desktop/heic-convert-test/node_modules/heic-convert/index.js:56:70)
    at /Users/z/Desktop/heic-convert-test/index.js:9:30
```