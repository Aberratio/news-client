import { Icon, IconCustomizationProps } from "../../atoms/Icon/Icon";

export const Eye = ({ color, direction, size }: IconCustomizationProps) => (
  <Icon
    size={size ?? { width: "1rem", height: "1rem" }}
    viewBox="0 0 511.999 511.999"
    direction={direction}
    color={color}
    title="eye"
  >
    <g>
      <g>
        <path
          d="M509.361,249.401c-0.771-1.927-19.335-47.719-59.326-93.862C396.198,93.42,329.101,60.585,255.999,60.585
			S115.802,93.42,61.964,155.54c-39.99,46.143-58.555,91.935-59.326,93.862L0,255.999l2.639,6.598
			c0.771,1.927,19.335,47.719,59.326,93.862c53.837,62.119,120.933,94.955,194.035,94.955s140.198-32.836,194.035-94.955
			c39.99-46.143,58.555-91.935,59.326-93.862l2.639-6.598L509.361,249.401z M255.999,380.354
			c-68.569,0-124.355-55.786-124.355-124.355s55.786-124.355,124.355-124.355s124.355,55.786,124.355,124.355
			S324.569,380.354,255.999,380.354z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          fill="#2e6896"
          d="M255.999,167.174c-48.978,0-88.825,39.847-88.825,88.825c0,48.978,39.847,88.825,88.825,88.825
			c48.978,0,88.825-39.847,88.825-88.825S304.977,167.174,255.999,167.174z M255.999,238.234c-9.796,0-17.765,7.969-17.765,17.765
			h-35.53c0-29.387,23.908-53.295,53.295-53.295V238.234z"
        />
      </g>
    </g>
  </Icon>
);
