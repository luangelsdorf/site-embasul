import { keyframes } from "@emotion/react";

export function animateBanner(e) {
  e.target.animate({
    opacity: [0, 1],
    transform: ['scale(1.5)', 'scale(1)'],
  }, {
    duration: 1200,
    easing: 'cubic-bezier(0, 0.75, 0, 1)',
    fill: 'both',
  })
}

export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 10%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const slideRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-5%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const slideLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(5%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -10%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const scaleUp = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.92, 0.92, 0);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

export const scaleDown = keyframes`
  from {
    opacity: 0;
    transform: scale3d(1.08, 1.08, 0);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;