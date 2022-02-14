import { css } from '@stitches/core';

export const HeaderSection = css({
  backgroundBlendMode: 'overlay',
  backdropFilter: 'blur(33px)',
  backgroundColor: 'transparent !important',
  color: 'rgb(var(--dark-onBackground)) !important',
});

export const NavbarSection = css({
  boxShadow: 'rgb(0 0 0 / 3%) 3px 3px 10px 3px',
  padding: '10px 0',

  '& > div:first-of-type a': {
    textDecoration: 'none',
    color: 'rgb(var(--dark-onBackground))',
  },

  '& div:last-of-type svg': {
    verticalAlign: 'middle',
    height: '20px',
    width: '20px',
    margin: '0 2px',
  },
});
