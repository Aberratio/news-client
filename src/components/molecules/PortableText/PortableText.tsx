import { PortableText as PortableTextReact } from "@portabletext/react";

import { portableTextComponents } from "./portableTextComponents";

interface BodyProps {
  value: any;
  variant: "article" | "info-white";
}

export const PortableText = ({ value, variant }: BodyProps) => {
  return (
    <PortableTextReact
      value={value}
      components={portableTextComponents[variant]}
      onMissingComponent={false}
    />
  );
};
