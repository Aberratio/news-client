import { mapToPhotoItem } from "core/api/sanity-types/SanityPhotoItem";
import Link from "next/link";
import { styled } from "styled-components";

import Box from "components/atoms/Box";
import Typography from "components/atoms/Typography";
import { ArticleImage } from "components/molecules/ArticleImage/ArticleImage";

const SampleImageComponent = ({ value }: any) => {
  const image = mapToPhotoItem(value);

  return (
    <Box margin="24px 0">
      <ArticleImage image={image} />
    </Box>
  );
};

export const portableTextComponents = {
  article: {
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
      seoImage: SampleImageComponent,
    },
  },
  "info-white": {
    block: {
      normal: ({ children }: any) => (
        <Typography color="white" isInline space={{ marginY: "4px" }}>
          {children}
        </Typography>
      ),
      blockquote: ({ children }: any) => (
        <Typography color="white" isBlockquote>
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
          <Typography color="white" isInline>
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
      seoImage: SampleImageComponent,
    },
  },
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
