import {
  ActionIcon,
  Badge,
  Card,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import classes from "./ArticleCardFooter.module.css";

interface ArticleCardFooterProps {
  dataTestId: string;
  item: ArticleSummaryItem;
}

export const ArticleCardFooter = ({
  dataTestId,
  item,
}: ArticleCardFooterProps) => {
  const theme = useMantineTheme();

  const router = useRouter();

  const handleClick = () => {
    router.push(item.path);
  };

  const handleShare = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("share");
    //share on facebook

    const linkToShare = `https://www.facebook.com/sharer/sharer.php?u=https://glosmilicza.pl/article/${item.id}`;

    console.log(item.id);
    console.log({ linkToShare });
    window.open(linkToShare, "_blank");
  };

  return (
    <Card
      withBorder
      padding="lg"
      radius="md"
      className={classes.card}
      data-testid={dataTestId}
      onClick={handleClick}
    >
      <Card.Section mb="sm">
        <Image src={item.photo.path} alt={item.photo.alt} height={180} />
      </Card.Section>

      <Badge w="fit-content" variant="light">
        {item.category.name}
      </Badge>

      <Text fw={700} className={classes.title} mt="xs">
        {item.title}
      </Text>

      <Group mt="lg">
        {/* <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
          radius="sm"
        /> */}
        <div>
          <Text fw={500}>{item.author.name}</Text>
          <Text fz="xs" c="dimmed">
            {item.createdOn}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group justify="space-between">
          <Text fz="xs" c="dimmed">
            {item.views} wyświetleń
          </Text>
          <Group gap={0}>
            {/* <ActionIcon variant="subtle" color="gray">
              <IconHeart size={20} color={theme.colors.red[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <IconBookmark
                size={20}
                color={theme.colors.yellow[6]}
                stroke={1.5}
              />
            </ActionIcon> */}
            <ActionIcon variant="subtle" color="gray" onClick={handleShare}>
              <IconShare size={20} color={theme.colors.blue[6]} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};
