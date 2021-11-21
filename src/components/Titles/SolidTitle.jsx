import gsap from 'gsap';
import { useRef, useCallback } from 'react';
import styled from 'styled-components';
const color1 = `#12bcb0`;
const color2 = `#b4ff06b7`;
const Title = styled.h2`
  display: inline-block;
  font-size: calc(100vw / 50 * 3);
  text-transform: uppercase;
  padding: 0.3em 0.6em;
  filter: url(#distortionFilter);
  color: bla;
  font-variation-settings: 'wght' 700;
  background: linear-gradient(135deg, ${color1} 20%, ${color2} 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ::selection {
    background: black;
    color: white;
  }
`;
const Svg = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
  left: -9px;
  pointer-events: none;
`;

export default function SolidTitle({ text }) {
  const title = useRef();
  const handleMouseEnter = useCallback(() => {
    gsap.to('feDisplacementMap', 1, {
      attr: {
        scale: 100,
      },
      ease: 'circ.out',
    });
    gsap.to(
      'feTurbulence',
      1,
      {
        attr: {
          baseFrequency: '2.08 .08',
        },
        ease: 'circ.out',
      },
      1,
    );
    gsap.to(title.current, 1, {
      fontVariationSettings: "'wght' 650",
      ease: 'back.out',
    });
  }, []);
  const handleMouseLeave = useCallback(() => {
    gsap.to(
      'feDisplacementMap',
      1,
      {
        attr: {
          scale: 0,
        },
        ease: 'circ.out',
      },
      1,
    );
    gsap.to(
      'feTurbulence',
      1,
      {
        attr: {
          baseFrequency: '2.01 .01',
        },
        ease: 'circ.out',
      },
      1,
    );
    gsap.to(
      title.current,
      1,
      {
        fontVariationSettings: "'wght' 700",
        ease: 'back.out',
      },
      1,
    );
  }, []);
  return (
    <>
      <Title
        ref={title}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </Title>
      <Svg>
        <filter id="distortionFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2.01 .01"
            numOctaves="5"
            seed="2"
            stitchTiles="noStitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="noise"
          ></feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            filterUnits="userSpaceOnUse"
          ></feDisplacementMap>
        </filter>
      </Svg>
    </>
  );
}
