import Image from "next/image";

import { IconCustomizationProps } from "../../atoms/Icon/Icon";

export const Logo = ({ size }: IconCustomizationProps) => (
  <Image
    src="/icons/logo.png"
    width={Number(size?.width) ?? "80px"}
    height={Number(size?.height) ?? "80px"}
    alt="logo"
    fill
  />
);
