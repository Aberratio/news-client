import { IconCustomizationProps } from "../../atoms/Icon/Icon";

export const Logo = ({ size }: IconCustomizationProps) => (
  <img
    src="/icons/logo.png"
    width={size?.width ?? "80px"}
    height={size?.height ?? "80px"}
    alt="logo"
  />
);
