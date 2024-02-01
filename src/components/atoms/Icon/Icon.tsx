import { Direction } from "./directions";
import { IconSize } from "./IconSize";
import { IconWrapper } from "./IconWrapper";

export interface IconCustomizationProps {
  color?: string;
  colorOnHover?: string;
  direction?: Direction;
  filled?: boolean;
  fillStroke?: boolean;
  size?: IconSize;
  transparentPath?: boolean;
  viewBox?: string;
}

interface IconProps extends IconCustomizationProps {
  dataTestId?: string;
  title: string;
  children?: React.ReactNode;
}

export const Icon = ({
  color,
  colorOnHover,
  dataTestId,
  direction,
  filled,
  fillStroke,
  size,
  transparentPath,
  viewBox,
  title,
  children,
}: IconProps) => {
  return (
    <IconWrapper
      $color={color}
      $colorOnHover={colorOnHover}
      data-testid={dataTestId ?? title}
      $direction={direction}
      $filled={filled}
      $fillStroke={fillStroke}
      $size={size}
      $transparentPath={transparentPath}
      viewBox={viewBox}
    >
      <title>{title}</title>
      {children}
    </IconWrapper>
  );
};
