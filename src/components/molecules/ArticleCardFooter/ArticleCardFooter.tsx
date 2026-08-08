import type { CSSProperties, KeyboardEvent, MouseEvent } from "react";
import {
  ActionIcon,
  Card,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import StatisticBar from "../StatisticBar/StatisticBar";

import classes from "./ArticleCardFooter.module.css";

export type ArticleCardVariant =
  | "compact"
  | "featured"
  | "horizontal"
  | "standard";

interface ArticleCardFooterProps {
  dataTestId: string;
  item: ArticleSummaryItem;
  showEngagement?: boolean;
  showLead?: boolean;
  showShare?: boolean;
  variant?: ArticleCardVariant;
}

export const ArticleCardFooter = ({
  dataTestId,
  item,
  showEngagement = true,
  showLead,
  showShare = true,
  variant = "standard",
}: ArticleCardFooterProps) => {
  const router = useRouter();
  const { publicationSettings } = useOrganizationInfo();
  const shouldShowLead =
    showLead ?? (variant === "standard" || variant === "featured");
  const sponsoredLabel =
    publicationSettings?.advertisingLabels.sponsoredContent ??
    "Materiał sponsorowany";
  const cardStyle = {
    "--article-card-category-color": item.category.color,
  } as CSSProperties;

  const handleClick = () => {
    router.push(item.path);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  const handleShare = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const url = new URL(item.path, window.location.origin).toString();
    const linkToShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;

    window.open(linkToShare, "_blank");
  };

  return (
    <Card
      withBorder
      radius="md"
      className={`${classes.card} ${classes[variant]}`}
      style={cardStyle}
      data-testid={dataTestId}
      data-variant={variant}
      role="link"
      tabIndex={0}
      aria-label={item.title}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className={classes.media}>
        <Image
          src={item.photo.path}
          alt={item.photo.alt}
          className={classes.image}
        />
        <div className={classes.badges}>
          <Text component="span" className={classes.category}>
            {item.category.name}
          </Text>
          {item.isSponsored && (
            <Text component="span" className={classes.sponsored}>
              {sponsoredLabel}
            </Text>
          )}
        </div>
      </div>

      <div className={classes.content}>
        <Text className={classes.title} component="h3">
          {item.title}
        </Text>
        {shouldShowLead && item.lead && (
          <Text className={classes.lead}>{item.lead}</Text>
        )}
        <Group className={classes.meta} gap="xs">
          <Text component="span" className={classes.author}>
            {item.author.name}
          </Text>
          <Text component="span" className={classes.date}>
            {item.createdOn}
          </Text>
        </Group>
      </div>

      <Card.Section className={classes.footer}>
        {showEngagement && (
          <div className={classes.engagement}>
            <StatisticBar
              comments={item.comments}
              commentsDisabled={item.commentsDisabled}
              likes={item.likes}
              dislikes={item.dislikes}
              reactionsDisabled={item.reactionsDisabled}
              views={item.views}
            />
          </div>
        )}
        {showShare && (
          <ActionIcon
            aria-label={`Udostępnij: ${item.title}`}
            className={classes.share}
            variant="subtle"
            color="gray"
            onClick={handleShare}
          >
            <IconShare size={20} color="var(--publication-primary)" stroke={1.5} />
          </ActionIcon>
        )}
      </Card.Section>
    </Card>
  );
};
