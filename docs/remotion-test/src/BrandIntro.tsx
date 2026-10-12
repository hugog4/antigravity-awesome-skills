import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {Bg} from './Bg';
import {c, sans, serif} from './theme';

const Word: React.FC<{t: string; delay: number; italic?: boolean}> = ({t, delay, italic}) => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({frame: f - delay, fps, config: {damping: 200}});
  return (
    <span style={{display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingRight: 24}}>
      <span style={{display: 'inline-block', transform: `translateY(${(1 - s) * 110}%)`, opacity: s, fontFamily: italic ? serif : sans, fontStyle: italic ? 'italic' : 'normal', fontWeight: italic ? 400 : 800, color: italic ? c.b : c.ink}}>{t}</span>
    </span>
  );
};

export const BrandIntro: React.FC = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const line = spring({frame: f - 40, fps, config: {damping: 200}, durationInFrames: 30});
  const sub = interpolate(f, [60, 85], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const out = interpolate(f, [130, 150], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{opacity: out}}>
      <Bg />
      <AbsoluteFill style={{justifyContent: 'center', padding: '0 160px'}}>
        <div style={{fontSize: 190, lineHeight: 1.05, letterSpacing: -6}}>
          <Word t="Design" delay={6} /><Word t="that" delay={12} /><br />
          <Word t="moves" delay={20} italic /><Word t="people." delay={28} />
        </div>
        <div style={{height: 4, width: 640 * line, background: `linear-gradient(90deg, ${c.a}, ${c.b})`, marginTop: 48, borderRadius: 2}} />
        <div style={{fontFamily: sans, fontSize: 44, color: c.mute, marginTop: 36, opacity: sub, transform: `translateY(${(1 - sub) * 20}px)`}}>Remotion · Tailwind · motion systems</div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
