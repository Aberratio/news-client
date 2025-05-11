"use client";

import { Button, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import { styled } from "styled-components";

import Typography from "components/atoms/Typography";
import Widget from "components/molecules/Widget";

import { SideBarSmallImageContainer } from "../image-containers/SideBarSmallImageContainer";

export const FirstSite = () => {
  const { firstSite } = useOrganizationInfo();
  const [opened, { open, close }] = useDisclosure(false);

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
    <Widget dataTestId="first-site" title="Najnowszy numer">
      <Typography flexbox={{ flexDirection: "row" }}>
        W sprzedaży od <Date>{firstSite.releaseDate}</Date>
      </Typography>
      <SideBarSmallImageContainer onClick={open}>
        <Image
          src={firstSite.image.path}
          alt="Najnowszy numer"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </SideBarSmallImageContainer>
      <Modal
        opened={opened}
        onClose={close}
        title="Najnowszy numer"
        transitionProps={{ transition: "fade", duration: 200 }}
        centered
      >
        <Text my={8}>
          Najonowszy numer Głosu Milicza możesz kupić w kioskach i punktach
          sprzedaży na terenie gminy Milicz, Cieszków i Krośnice.
        </Text>
        <Button
          rightSection={<IconDownload size={14} />}
          onClick={downloadImage}
          color="#2e6896"
          my="md"
        >
          Pobierz pierwszą stronę
        </Button>
      </Modal>
    </Widget>
  );
};

const Date = styled.strong`
  margin-left: 4px;
`;
