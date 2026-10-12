import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {fade} from '@remotion/transitions/fade';
import {Bg} from './Bg';
import {c, sans, serif} from './theme';

const Scene: React.FC<{n: string; title: string; em: string; body: string; k: string}> = ({n, title, em, body, k}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({frame: f, fps, config: {damping: 200}});
  const card = spring({frame: f - 12, fps, config: {damping: 20, stiffness: 140}});
  return (
    <AbsoluteFill>
      <Bg />
      <AbsoluteFill style={{padding: 90, justifyContent: 'center', fontFamily: sans, color: c.ink}}>
        <div style={{fontSize: 40, color: k, letterSpacing: 8, fontWeight: 600, opacity: s}}>{n}</div>
        <div style={{fontSize: 150, fontWeight: 800, letterSpacing: -5, lineHeight: 1, marginTop: 24, opacity: s, transform: `translateY(${(1 - s) * 60}px)`}}>
          {title} <span style={{fontFamily: serif, fontStyle: 'italic', fontWeight: 400, color: k}}>{em}</span>
        </div>
        <div style={{marginTop: 70, padding: 56, borderRadius: 40, background: '#ffffff0d', border: '1px solid #ffffff26', backdropFilter: 'blur(20px)', fontSize: 46, lineHeight: 1.4, color: '#d8d4dc', transform: `scale(${0.9 + 0.1 * card})`, opacity: card}}>{body}</div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const StoryCard: React.FC = () => (
  <TransitionSeries>
    <TransitionSeries.Sequence durationInFrames={80}><Scene n="01" title="Diseña" em="con intención" body="Paletas, tipografía y ritmo definidos antes de animar." k={c.a} /></TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={slide({direction: 'from-bottom'})} timing={linearTiming({durationInFrames: 20})} />
    <TransitionSeries.Sequence durationInFrames={80}><Scene n="02" title="Anima" em="con física" body="Springs naturales: cada elemento entra con peso y propósito." k={c.b} /></TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 20})} />
    <TransitionSeries.Sequence durationInFrames={90}><Scene n="03" title="Publica" em="en cualquier formato" body="Una sola composición React: 16:9, 9:16 y GIF." k={c.c} /></TransitionSeries.Sequence>
  </TransitionSeries>
);
