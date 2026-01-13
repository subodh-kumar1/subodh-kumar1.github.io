# my-cv

Development notes

- To generate optimized assets (WebP, mobile-sized JPG, and a small noise PNG tile) run:

  1. Install sharp: `npm install sharp`
  2. Run the helper: `node tools/generate-images.js`

- The script will look for `assets/background3.jpeg` (or `.jpg`) and create:
  - `assets/background3.webp`
  - `assets/background3-small.jpg`
  - `assets/noise.png`

- The site will automatically use `background3.webp` (if present) and fallback to JPG. If `noise.png` exists, the site will use it as a subtle background texture to give the velvet theme more depth.

- If you prefer not to install sharp, you can generate similar assets with ImageMagick or an online converter and place them in the `assets/` folder with the names above.
