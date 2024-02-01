import { Icon, IconCustomizationProps } from "../../atoms/Icon/Icon";

export const LoadMore = ({
  color,
  direction,
  size,
}: IconCustomizationProps) => (
  <Icon
    size={size ?? { width: "1.5rem", height: "1.5rem" }}
    viewBox="0 0 11 20"
    direction={direction}
    color={color}
    title="load more"
  >
    <polygon points="6,14 6,0 5,0 5,14 0,14 5.5,20 11,14" />
  </Icon>
);
