import { PortableText } from "@portabletext/react";
import Typography from "components/atoms/Typography";
import { buildImageUrl } from "core/builders/buildImageUrl";

const SampleImageComponent = ({ value }: any) => {
  return (
    <>
      <img
        src={buildImageUrl(value.asset._ref)}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          margin: "16px auto",
        }}
      />
      {/* <Typography variant="small">{value.alt}</Typography> */}
    </>
  );
};

const components = {
  types: {
    image: SampleImageComponent,
  },
  block: {
    normal: ({ children }: any) => <Typography>{children}</Typography>,
    blockquote: ({ children }: any) => (
      <Typography isBlockquote>{children}</Typography>
    ),
  },
};

interface BodyProps {
  value: any;
}

export const Body = ({ value }: BodyProps) => {
  return <PortableText value={value} components={components} />;
};
