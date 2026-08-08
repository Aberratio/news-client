"use client";

import { Button, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import { publicationSettingsFallback } from "core/api/settings/publicationSettingsFallback";
import Image from "next/image";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import { styled } from "styled-components";

import Typography from "components/atoms/Typography";
import Widget from "components/molecules/Widget";

import { SideBarSmallImageContainer } from "../image-containers/SideBarSmallImageContainer";

export const FirstSite = () => {
  const { firstSite, publicationSettings } = useOrganizationInfo();
  const [opened, { open, close }] = useDisclosure(false);
  const latestIssue =
    publicationSettings?.latestIssue ?? publicationSettingsFallback.latestIssue;

  const downloadImage = () => {
    if (firstSite) {
      const link = document.createElement("a");
      link.href = firstSite.image.path;
      link.download = firstSite.image.alt;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!firstSite) {
    return null;
  }

  return (
    <Widget dataTestId="first-site" title={latestIssue?.title}>
      <Typography flexbox={{ flexDirection: "row" }}>
        {latestIssue?.releaseDatePrefix} <Date>{firstSite.releaseDate}</Date>
      </Typography>
      <SideBarSmallImageContainer onClick={open}>
        <Image
          src={firstSite.image.path}
          alt={latestIssue?.imageAlt ?? ""}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </SideBarSmallImageContainer>
      <Modal
        opened={opened}
        onClose={close}
        title={latestIssue?.title}
        transitionProps={{ transition: "fade", duration: 200 }}
        centered
      >
        <Text my={8}>{latestIssue?.modalDescription}</Text>
        <Button
          rightSection={<IconDownload size={14} />}
          onClick={downloadImage}
          color="var(--publication-primary)"
          my="md"
        >
          {latestIssue?.downloadButtonLabel}
        </Button>
      </Modal>
    </Widget>
  );
};

const Date = styled.strong`
  margin-left: 4px;
`;
