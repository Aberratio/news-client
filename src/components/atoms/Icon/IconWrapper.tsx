import styled from "styled-components";

import { Direction, directions } from "./directions";
import { IconSize } from "./IconSize";

interface IconWrapperProps {
  $color?: string;
  $colorOnHover?: string;
  $direction?: Direction;
  $filled?: boolean;
  $fillStroke?: boolean;
  $size?: IconSize;
  $transparentPath?: boolean;
  $viewBox?: string;
}

export const IconWrapper = styled.svg<IconWrapperProps>`
  ${({ $direction }) =>
    $direction && `transform: rotate(${directions[$direction]}deg)`};

  ${({ $size }) => $size && `width: ${$size.width}; height: ${$size.height};`};

  ${({ $color, $filled, $fillStroke, $transparentPath }) =>
    $color &&
    `
            color: ${$color} !important;
            fill: ${$transparentPath ? "transparent" : $color} !important;
            > path,
            > rect {
                color: ${$color} !important;
                ${
                  $filled &&
                  `fill: ${
                    $transparentPath ? "transparent" : $color
                  } !important;`
                }
                ${$fillStroke && `stroke: ${$color} !important;`}
            }
        `}

  ${({ $colorOnHover, $filled, $fillStroke, $transparentPath }) =>
    $colorOnHover &&
    `
            &:hover {
                color: ${$colorOnHover} !important;
                fill: ${
                  $transparentPath ? "transparent" : $colorOnHover
                } !important;
                > path,
                > rect {
                    color: ${$colorOnHover} !important;
                    ${
                      $filled &&
                      `fill: ${
                        $transparentPath ? "transparent" : $colorOnHover
                      } !important;`
                    }
                    ${$fillStroke && `stroke: ${$colorOnHover} !important;`}
                }
            }
        `}
`;
