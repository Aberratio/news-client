import { Icon, IconProps } from "./Icon";

export const Arrow: React.FC<IconProps> = ({ color, direction, size }) => (
  <Icon
    size={size || { width: "1rem", height: "1rem" }}
    viewBox="0 0 20 20"
    x="0px"
    y="0px"
    direction={direction}
    color={color}
  >
    <title>arrow</title>

    <g transform="rotate(90, 7, 10)">
      <path d="M14 4.875L7 11.875L-7.64949e-08 4.875L1.75 3.125L7 8.375L12.25 3.125L14 4.875Z" />
    </g>
  </Icon>
);
