import {
  ActionIcon,
  Card,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import StatisticBar from "../StatisticBar/StatisticBar";

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

    const linkToShare = `https://www.facebook.com/sharer/sharer.php?u=https://www.kokot.it/article/${item.id}`;

    window.open(linkToShare, "_blank");
  };

  return (
    <Card
      withBorder
      radius="md"
      className={classes.card}
      data-testid={dataTestId}
      onClick={handleClick}
    >
      <Card.Section>
        <Image src={item.photo.path} alt={item.photo.alt} height={180} />
        <Text className={classes.title} m="sm">
          {item.title}
        </Text>
      </Card.Section>

      <Card.Section className={classes.footer}>
        <Group mb="xs">
          <Text className={classes.text} fz="sm" fw={700}>
            <strong>{item.author.name}</strong>
          </Text>
          <Text className={classes.text} fz="sm" c="dimmed">
            {item.createdOn}
          </Text>
        </Group>
        <Group justify="space-between" gap={0}>
          <StatisticBar
            comments={item.comments}
            likes={item.likes}
            dislikes={item.dislikes}
            views={item.views}
          />
          <Group gap={0}>
            <ActionIcon variant="subtle" color="gray" onClick={handleShare}>
              <IconShare size={20} color={theme.colors.blue[6]} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};
