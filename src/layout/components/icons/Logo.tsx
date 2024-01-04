import { IconProps } from "./Icon";

export const Logo: React.FC<IconProps> = ({ size }) => (
  <img
    src="/icons/logo.png"
    width={size?.width ?? "80px"}
    height={size?.height ?? "80px"}
    alt="logo"
  />
);
