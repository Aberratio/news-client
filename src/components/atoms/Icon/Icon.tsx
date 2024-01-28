import styled from "styled-components";

const drectionList = ["left", "up", "right", "down"] as const;
const rotationList = ["0", "90", "180", "270"] as const;

type Direction = (typeof drectionList)[number];
type Rotation = (typeof rotationList)[number];

const directions: Record<Direction, Rotation> = {
  left: "0",
  up: "90",
  right: "180",
  down: "270",
};

export interface IconSize {
  width: string;
  height: string;
}

export interface IconProps {
  color?: string;
  colorOnHover?: string;
  direction?: Direction;
  filled?: boolean;
  fillStroke?: boolean;
  size?: IconSize;
  transparentPath?: boolean;
  viewBox?: string;
  title?: string;
}

export const Icon = styled.svg<IconProps>`
  ${({ direction }) =>
    direction && `transform: rotate(${directions[direction]}deg)`};

  ${({ size }) => size && `width: ${size.width}; height: ${size.height};`};

  ${({ color, filled, fillStroke, transparentPath }) =>
    color &&
    `
            color: ${color} !important;
            fill: ${transparentPath ? "transparent" : color} !important;
            > path,
            > rect {
                color: ${color} !important;
                ${
                  filled &&
                  `fill: ${transparentPath ? "transparent" : color} !important;`
                }
                ${fillStroke && `stroke: ${color} !important;`}
            }
        `}

  ${({ colorOnHover, filled, fillStroke, transparentPath }) =>
    colorOnHover &&
    `
            &:hover {
                color: ${colorOnHover} !important;
                fill: ${
                  transparentPath ? "transparent" : colorOnHover
                } !important;
                > path,
                > rect {
                    color: ${colorOnHover} !important;
                    ${
                      filled &&
                      `fill: ${
                        transparentPath ? "transparent" : colorOnHover
                      } !important;`
                    }
                    ${fillStroke && `stroke: ${colorOnHover} !important;`}
                }
            }
        `}
`;
