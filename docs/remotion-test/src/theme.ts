import {continueRender, delayRender, staticFile} from 'remotion';

const files: [string, string, string, string][] = [
  ['Inter', 'Inter-400-normal.woff2', '400', 'normal'],
  ['Inter', 'Inter-600-normal.woff2', '600', 'normal'],
  ['Inter', 'Inter-800-normal.woff2', '800', 'normal'],
  ['Instrument Serif', 'InstrumentSerif-400-italic.woff2', '400', 'italic'],
];
const h = delayRender('fonts');
Promise.all(
  files.map(async ([fam, file, weight, style]) => {
    const ff = new FontFace(fam, `url(${staticFile('fonts/' + file)})`, {weight, style});
    await ff.load();
    document.fonts.add(ff);
  }),
).then(() => continueRender(h));

export const sans = 'Inter, sans-serif';
export const serif = "'Instrument Serif', serif";
export const c = {bg: '#07070c', ink: '#f4f1ea', mute: '#8a8794', a: '#7c5cff', b: '#ff6a3d', c: '#2de2b0'};
