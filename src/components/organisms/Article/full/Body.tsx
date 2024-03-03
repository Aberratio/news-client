import { PortableText } from "@portabletext/react";
import { buildImageUrl } from "core/builders/buildImageUrl";
import Link from "next/link";
import { styled } from "styled-components";

import Typography from "components/atoms/Typography";

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
  block: {
    normal: ({ children }: any) => (
      <Typography variant="article" isInline space={{ marginY: "4px" }}>
        {children}
      </Typography>
    ),
    blockquote: ({ children }: any) => (
      <Typography variant="article" isBlockquote>
        {children}
      </Typography>
    ),
  },
  list: {
    bullet: ({ children }: any) => <UList>{children}</UList>,
    number: ({ children }: any) => <OList>{children}</OList>,
  },
  listItem: {
    bullet: ({ children }: any) => (
      <ListItem>
        <Typography variant="article" isInline>
          {children}
        </Typography>
      </ListItem>
    ),
  },
  marks: {
    em: ({ children }: any) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <StyledLink id="link" href={value.href} rel={rel} target="_blank">
          {children}
        </StyledLink>
      );
    },
  },
  types: {
    image: SampleImageComponent,
  },
};

interface BodyProps {
  value: any;
}

export const Body = ({ value }: BodyProps) => {
  console.log(value, "value");
  return (
    <PortableText
      value={value}
      components={components}
      onMissingComponent={false}
    />
  );
};

const StyledLink = styled(Link)`
  display: inline-flex;
`;

const UList = styled.ul`
  margin: 16px 0 16px 48px;
  list-style-type: outside;
  overflow: unset;
  list-style: disc;
`;

const OList = styled.ol`
  margin: 16px 0 16px 48px;
  list-style-type: outside;
  overflow: unset;
`;

const ListItem = styled.li`
  margin: 8px 0;
  overflow: unset;

  &:marker {
    color: orange;
    content: "▪";
    margin: -24px;
  }
`;
