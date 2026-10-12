# Remotion test

Three compositions built following the `remotion-best-practices`, `frontend-design`
and `theme-factory` skills: `BrandIntro` (16:9), `StatsChart` (16:9), `StoryCard` (9:16).

```bash
npm install
npx remotion studio src/index.ts
npx remotion render src/index.ts BrandIntro out/BrandIntro.mp4
```

Fonts (Inter, Instrument Serif) are bundled in `public/fonts`. The rendered MP4s in
`videos/` are not committed (see `.gitignore`).
