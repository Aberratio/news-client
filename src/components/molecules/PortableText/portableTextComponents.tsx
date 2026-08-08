import { Title } from "@mantine/core";
import { mapToPhotoItem } from "core/api/sanity-types/SanityPhotoItem";
import Link from "next/link";
import { styled } from "styled-components";

import Box from "components/atoms/Box";
import { CodeBlock } from "components/atoms/CodeBlock/CodeBlock";
import Typography from "components/atoms/Typography";
import { ArticleImage } from "components/molecules/ArticleImage/ArticleImage";

import classes from "./portableTextComponents.module.css";

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
        <ArticleParagraph>
          <Typography variant="article" space={{ marginY: "0" }}>
            {children}
          </Typography>
        </ArticleParagraph>
      ),
      blockquote: ({ children }: any) => (
        <ArticleQuote>
          <Typography variant="article" isBlockquote>
            {children}
          </Typography>
        </ArticleQuote>
      ),
      h3: ({ children }: any) => (
        <Title className={classes.title} order={3} mb={0} mt={28}>
          {children}
        </Title>
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
      code: ({ value }: any) => {
        return <CodeBlock value={value} />;
      },
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

const ArticleParagraph = styled.div`
  max-width: 100%;
  margin: 0 0 18px;

  p {
    color: #202020;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ArticleQuote = styled.div`
  margin: 28px 0;
  padding: 4px 0 4px 18px;
  background: linear-gradient(
    90deg,
    color-mix(in srgb, var(--publication-primary) 8%, transparent),
    transparent 72%
  );

  p {
    color: #303030;
  }
`;

const UList = styled.ul`
  margin: 18px 0 24px 28px;
  list-style-type: outside;
  overflow: unset;
  list-style: disc;
`;

const OList = styled.ol`
  margin: 18px 0 24px 28px;
  list-style-type: outside;
  overflow: unset;
`;

const ListItem = styled.li`
  margin: 10px 0;
  overflow: unset;

  &:marker {
    color: var(--publication-primary);
  }
`;
