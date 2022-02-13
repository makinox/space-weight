import { css } from '@stitches/core';

export const PlanetBlur = css({
  position: 'absolute',
  zIndex: '-1',
  top: '0%',
  width: '100%',
  height: '100%',
  backdropFilter: 'blur(3px)',
  backgroundColor: 'rgba(0,0,0,0.01)',
});

export const PlanetStars = css({ position: 'absolute', zIndex: '-3', top: '0%', height: '100%', width: '100%' });

export const PlanetCanvas = css({ height: '100% !important', position: 'absolute !important', top: '0%', zIndex: '-2' });
