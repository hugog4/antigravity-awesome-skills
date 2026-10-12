import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {Bg} from './Bg';
import {c, sans, serif} from './theme';

const data = [
  {l: 'Jul', v: 38, k: c.a}, {l: 'Ago', v: 52, k: c.a}, {l: 'Sep', v: 47, k: c.a},
  {l: 'Oct', v: 71, k: c.b}, {l: 'Nov', v: 88, k: c.b}, {l: 'Dic', v: 104, k: c.c},
];

export const StatsChart: React.FC = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const head = spring({frame: f, fps, config: {damping: 200}});
  const total = Math.round(interpolate(f, [20, 110], [0, 400], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
  return (
    <AbsoluteFill>
      <Bg />
      <AbsoluteFill style={{padding: '110px 140px', fontFamily: sans, color: c.ink}}>
        <div style={{opacity: head, transform: `translateY(${(1 - head) * 30}px)`}}>
          <div style={{fontSize: 34, color: c.mute, letterSpacing: 6, textTransform: 'uppercase'}}>Crecimiento semestral</div>
          <div style={{display: 'flex', alignItems: 'baseline', gap: 28}}>
            <span style={{fontSize: 170, fontWeight: 800, letterSpacing: -5}}>+{total}%</span>
            <span style={{fontFamily: serif, fontStyle: 'italic', fontSize: 70, color: c.b}}>en seis meses</span>
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'flex-end', gap: 40, flex: 1, marginTop: 30}}>
          {data.map((d, i) => {
            const s = spring({frame: f - 25 - i * 6, fps, config: {damping: 18, stiffness: 120}});
            return (
              <div key={d.l} style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end'}}>
                <div style={{fontSize: 40, fontWeight: 600, marginBottom: 14, opacity: s}}>{Math.round(d.v * s)}</div>
                <div style={{width: '100%', height: `${(d.v / 104) * 75 * s}%`, borderRadius: 22, background: `linear-gradient(180deg, ${d.k}, ${d.k}33)`, boxShadow: `0 0 60px ${d.k}55`, border: '1px solid #ffffff22'}} />
                <div style={{fontSize: 34, color: c.mute, marginTop: 18}}>{d.l}</div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
