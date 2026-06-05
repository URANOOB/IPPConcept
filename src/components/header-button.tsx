"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

type HeaderButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  size?: "default" | "large";
  active?: boolean;
};

export function HeaderButton({ children, size = "default", active = false, ...props }: HeaderButtonProps) {
  return (
    <StyledWrapper>
      <a
        className={`button ${size === "large" ? "button-large" : ""} ${active ? "button-active" : ""}`}
        aria-current={active ? "page" : undefined}
        {...props}
      >
        <svg
          className="button-cosm"
          viewBox="0 0 220 70"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M9 42 C20 17 51 18 49 39 C47 60 9 57 13 40 C16 26 40 31 55 45 C73 61 112 58 164 58 C195 58 210 48 204 24" />
        </svg>
        <svg className="highlight" viewBox="0 0 144.76 77.18" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <g transform="translate(-171.53,-126.12)">
            <g fill="none" strokeWidth={17} strokeLinecap="round" strokeMiterlimit={10}>
              <path d="M180.03,169.45c0,0 12.65,-25.55 24.24,-25.67c6.39,-0.06 -5.89,46.13 4.91,50.64c10.22,4.27 24.14,-52.38 37.86,-59.8c3.32,-1.79 -5.35,45.89 -0.79,58.35c5.19,14.18 33.37,-58.38 36.43,-56.92c4.67,2.24 -0.06,44.43 5.23,47.54c6.04,3.55 19.87,-20.77 19.87,-20.77" />
            </g>
          </g>
        </svg>
        {children}
      </a>
    </StyledWrapper>
  );
}

export function HeaderButtonFilters() {
  return (
    <svg height={0} width={0} aria-hidden="true" focusable="false">
      <filter id="handDrawnNoise">
        <feTurbulence result="noise" numOctaves={8} baseFrequency="0.1" type="fractalNoise" />
        <feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale={3} in2="noise" in="SourceGraphic" />
      </filter>
      <filter id="handDrawnNoise2">
        <feTurbulence result="noise" numOctaves={8} baseFrequency="0.1" seed={1010} type="fractalNoise" />
        <feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale={3} in2="noise" in="SourceGraphic" />
      </filter>
      <filter id="handDrawnNoiset">
        <feTurbulence result="noise" numOctaves={8} baseFrequency="0.1" type="fractalNoise" />
        <feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale={6} in2="noise" in="SourceGraphic" />
      </filter>
      <filter id="handDrawnNoiset2">
        <feTurbulence result="noise" numOctaves={8} baseFrequency="0.1" seed={1010} type="fractalNoise" />
        <feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale={6} in2="noise" in="SourceGraphic" />
      </filter>
    </svg>
  );
}

const StyledWrapper = styled.div`
  display: inline-flex;

  .button {
    position: relative;
    overflow: visible;
    text-align: center;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    background-color: transparent;
    filter: url(#handDrawnNoise);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-family: var(--font-brush);
    font-size: 0.78rem;
    font-weight: bold;
    letter-spacing: 0.14em;
    line-height: 1;
    text-transform: uppercase;
    color: var(--ipp-plum);
    text-decoration: none;
    text-shadow: 0 1px 0 rgb(255 255 255 / 55%);
    min-height: 2.75rem;
    padding: 0.68em 1.18em 1.34em;
    border-width: 0px;
    border-radius: 2rem;
    box-shadow: #33333366 4px 4px 0 1px;
    animation: idle 1s infinite ease-in-out;
  }

  .button-large {
    min-height: 3.35rem;
    padding: 0.82em 1.55em 1.45em;
    font-family: var(--font-brush);
    font-size: 0.95rem;
    letter-spacing: 0.13em;
  }

  .button-large .button-cosm {
    width: calc(100% + 3rem);
    height: 3.3rem;
    left: -2.1rem;
    bottom: -0.58rem;
  }

  .button-active {
    color: var(--ipp-black);
  }

  .button-active .highlight {
    stroke-dashoffset: 0;
  }

  .button-active .button-cosm {
    stroke: rgb(96 48 72 / 72%);
  }

  .highlight {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: rgba(255, 225, 0, 0.5);
    stroke: rgba(255, 225, 0, 0.5);
    stroke-width: 10;
    stroke-linecap: round;
    pointer-events: none;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    transition: stroke-dashoffset 0.5s ease-in-out;
  }

  @keyframes idle {
    0% {
      filter: url(#handDrawnNoise);
    }
    50% {
      rotate: 2.5deg;
      filter: url(#handDrawnNoise2);
    }
    100% {
      filter: url(#handDrawnNoise);
    }
  }

  .button-cosm {
    fill: none;
    stroke: #33333366;
    stroke-width: 8;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: 0.3s ease-out;
    position: absolute;
    z-index: -1;
    width: calc(100% + 2.45rem);
    height: 2.85rem;
    left: -1.8rem;
    bottom: -0.5rem;
    transform: none;
    transform-origin: right center;
  }

  .button:hover {
    font-weight: bold;
    border-width: 0px;
    border-radius: 2rem;
    rotate: -2.5deg;
    animation: hover 2.5s infinite ease-in-out;
  }

  .button:hover .highlight {
    stroke-dashoffset: 0;
  }

  .button:active .highlight {
    stroke-dashoffset: 1000;
    animation:
      highlight 5s infinite,
      col 0.5s forwards;
    stroke: #bc4e2666;
  }

  @keyframes col {
    0% {
      stroke: rgba(255, 225, 0, 0.5);
    }
    100% {
      stroke: #1c98eb66;
    }
  }

  @keyframes highlight {
    0% {
      stroke-dashoffset: 0;
    }
    25% {
      stroke-dashoffset: 1000;
    }
    50% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes hover {
    0% {
      rotate: 0deg;
      filter: url(#handDrawnNoise);
      translate: 0 0px;
    }
    25% {
      rotate: -1deg;
      filter: url(#handDrawnNoise2);
      translate: 0 -2px;
    }
    50% {
      rotate: 0deg;
      filter: url(#handDrawnNoise);
      translate: 0 2px;
    }
    75% {
      rotate: -1deg;
      filter: url(#handDrawnNoise2);
      translate: 0 -2px;
    }
    100% {
      rotate: 0deg;
      filter: url(#handDrawnNoise);
      translate: 0 0px;
    }
  }

  .button:hover .button-cosm {
    transform: translateY(0.08rem) rotate(-3deg);
  }

  .button:active .button-cosm {
    stroke: #333333f1;
    transform: translateY(0.04rem) rotate(-8deg);
    animation: none;
  }

  .button:active {
    font-weight: bold;
    border-width: 0px;
    border-radius: 2rem;
    box-shadow: inset #333333f1 4px 4px 0 1px;
    rotate: -2.5deg;
    animation: active 1s infinite ease-in-out;
  }

  @keyframes active {
    0% {
      filter: url(#handDrawnNoiset);
      translate: 0 -1px;
    }
    25% {
      rotate: -3deg;
    }
    50% {
      filter: url(#handDrawnNoiset2);
      translate: 0 1px;
    }
    66% {
      rotate: 1.5deg;
    }
    100% {
      filter: url(#handDrawnNoiset);
      translate: 0 -1px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .button,
    .button:hover,
    .button:active {
      animation: none;
    }
  }
`;
