import {
  Card,
  Center,
  Group,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconEye, IconMessageCircle } from "@tabler/icons-react";
import Link from "next/link";

import classes from "./ImageCard.module.css";

interface ImageCardProps {
  link: string;
  title: string;
  photo: {
    path: string;
    alt: string;
  };
  author: {
    name: string;
  };
  views: number;
  comments: number;
}

export const ImageCard = ({
  link,
  title,
  photo,
  author,
  views,
  comments,
}: ImageCardProps) => {
  const theme = useMantineTheme();

  return (
    <Link href={link}>
      <Card p="lg" shadow="lg" className={classes.card} radius="md">
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${photo.path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className={classes.overlay} />

        <div className={classes.content}>
          <div>
            <Title order={2} className={classes.title} fw={500} size={32}>
              {title}
            </Title>

            <Group justify="space-between" gap="xs">
              <Text size="sm" className={classes.author}>
                {author.name}
              </Text>

              <Group gap="lg">
                <Center>
                  <IconEye
                    size={16}
                    stroke={1.5}
                    color={theme.colors.dark[1]}
                  />
                  <Text size="sm" className={classes.bodyText}>
                    {views}
                  </Text>
                </Center>
                <Center>
                  <IconMessageCircle
                    size={16}
                    stroke={1.5}
                    color={theme.colors.dark[1]}
                  />
                  <Text size="sm" className={classes.bodyText}>
                    {comments}
                  </Text>
                </Center>
              </Group>
            </Group>
          </div>
        </div>
      </Card>
    </Link>
  );
};
