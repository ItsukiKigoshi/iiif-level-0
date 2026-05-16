# iiif-level-0
Static (Level 0; pre-tiled) implementation of IIIF Image Server

## IIIF Level 0
- [API Docs](https://iiif.io/api/image/3.0/compliance/#5-level-0-compliance)
- [IIIF Online Workshop](https://training.iiif.io/dhsi/day-one/level-0-static.html)

## Tech Spec
- [vips](https://www.libvips.org/): 画像をLevel 0に対応する用に切り刻む ([Docs](https://www.libvips.org/API/current/making-image-pyramids.html))
  - [custom regions](https://iiif.io/api/cookbook/recipe/0299-region/)には対応していないらしい

## vipでpre-tiled
```sh
cd public/iiif
vips dzsave squirrel.tif squirrel --layout iiif3
# vips dzsave <original file> <output directory> --layout iiif3
```
- デフォルトで倍率は4通りになっているが，自分で指定できる？

## Examples of Level 0 IIIF
- https://collections.csntm.org/search
- https://d-flood.github.io/iiif-test-manifests/ ([GitHub](https://github.com/d-flood/iiif-test-manifests))
- https://hmmlvoobus.org/alqosh/alq_112_page_28/alq_112_page_28_001/ : Netlify + R2?

A tool like this could help, or at least show you other options. At HMML we use it for 1-off, quick manifests or URLs for an image with deep zoom on Netlify. All using level 0 without having to pre-tile your images. https://github.com/hmmlsystems/11ty-IIIF-Manifest-Generator

## Development
```sh
pnpm dev
```