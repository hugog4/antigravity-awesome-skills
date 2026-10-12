import {AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {c} from './theme';
export const Bg: React.FC = () => {
  const f = useCurrentFrame();
  const x = interpolate(f, [0, 210], [20, 80]);
  return (
    <AbsoluteFill style={{background: c.bg}}>
      <AbsoluteFill style={{background: `radial-gradient(60% 50% at ${x}% 30%, ${c.a}55, transparent 70%), radial-gradient(50% 50% at ${100 - x}% 80%, ${c.b}40, transparent 70%)`, filter: 'blur(40px)'}} />
      <AbsoluteFill style={{backgroundImage: 'linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)', backgroundSize: '80px 80px'}} />
    </AbsoluteFill>
  );
};
