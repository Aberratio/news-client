import { Icon, IconCustomizationProps } from "../../atoms/Icon/Icon";

export const Comments = ({
  color,
  direction,
  size,
}: IconCustomizationProps) => (
  <Icon
    size={size ?? { width: "1.25rem", height: "1.25rem" }}
    viewBox="0 0 58 58"
    direction={direction}
    color={color}
    title="comments"
  >
    <g>
      <path
        style={{ fill: "black" }}
        d="M44,18.394v21.141c0,2.722-2.207,4.929-4.929,4.929L22,44.535l-10,11v-11H4.929
		C2.207,44.535,0,42.328,0,39.606l0-21.141c0-2.722,2.207-4.929,4.929-4.929l34.141-0.071C41.793,13.465,44,15.672,44,18.394z"
      />
      <path
        style={{ fill: "white" }}
        d="M22,24.465H9c-0.553,0-1-0.448-1-1s0.447-1,1-1h13c0.553,0,1,0.448,1,1S22.553,24.465,22,24.465z"
      />
      <path
        style={{ fill: "white" }}
        d="M35,30.465H9c-0.553,0-1-0.448-1-1s0.447-1,1-1h26c0.553,0,1,0.448,1,1S35.553,30.465,35,30.465z"
      />
      <path
        style={{ fill: "white" }}
        d="M35,36.465H9c-0.553,0-1-0.448-1-1s0.447-1,1-1h26c0.553,0,1,0.448,1,1S35.553,36.465,35,36.465z"
      />
      <path
        style={{ fill: "black" }}
        d="M53.071,2.535l-34.141-0.07C16.207,2.465,14,4.672,14,7.394v6.122l25.071-0.052
		c2.722,0,4.929,2.207,4.929,4.93v18.441l7,7.7v-11h2.071c2.722,0,4.929-2.207,4.929-4.929V7.465
		C58,4.742,55.793,2.535,53.071,2.535z"
      />
    </g>
  </Icon>
);
