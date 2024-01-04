import { Icon, IconProps } from "./Icon";

export const Hamburger: React.FC<IconProps> = ({ color }) => (
  <Icon
    color={color}
    size={{ width: "1.25rem", height: "1.25rem" }}
    viewBox="0 0 30 31"
  >
    <title>menu</title>
    <path d="M0 0.5H30V2.5H0V0.5Z" />
    <path d="M0 14.5H30V16.5H0V14.5Z" />
    <path d="M0 28.5H30V30.5H0V28.5Z" />
  </Icon>
);
