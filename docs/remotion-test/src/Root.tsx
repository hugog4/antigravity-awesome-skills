import {Composition} from 'remotion';
import {BrandIntro} from './BrandIntro';
import {StatsChart} from './StatsChart';
import {StoryCard} from './StoryCard';

export const Root: React.FC = () => (
  <>
    <Composition id="BrandIntro" component={BrandIntro} durationInFrames={150} fps={30} width={1920} height={1080} />
    <Composition id="StatsChart" component={StatsChart} durationInFrames={150} fps={30} width={1920} height={1080} />
    <Composition id="StoryCard" component={StoryCard} durationInFrames={210} fps={30} width={1080} height={1920} />
  </>
);
