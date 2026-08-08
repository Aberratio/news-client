"use client";

import { useOrganizationInfo } from "providers/context/useOrganizationInfo";

import FooterColumns from "./columns/FooterColumns";
import { WebcoBar } from "./columns/WebcoBar";

const Footer = () => {
  const { publicationSettings } = useOrganizationInfo();

  return (
    <footer>
      <FooterColumns columns={publicationSettings?.footerColumns ?? []} />
      <WebcoBar />
    </footer>
  );
};

export default Footer;
