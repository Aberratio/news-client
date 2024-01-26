import { Icon, IconProps } from "./Icon";

export const LoadMore: React.FC<IconProps> = ({
  color,
  direction,
  size,
  title,
}) => (
  <Icon
    size={size ?? { width: "1.5rem", height: "1.5rem" }}
    viewBox="0 0 11 20"
    x="0px"
    y="0px"
    direction={direction}
    color={color}
  >
    <title>{title}</title>
    <polygon points="6,14 6,0 5,0 5,14 0,14 5.5,20 11,14" />
  </Icon>
);

