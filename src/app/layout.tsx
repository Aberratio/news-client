import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { Hotjar } from "core/analytics/Hotjar";
import { sanityClient } from "core/api/sanityClient";
import { fetchAdds } from "core/api/settings/fetchAdds";
import { fetchOrganization } from "core/api/settings/fetchOrganization";
import { buildImageUrl } from "core/builders/buildImageUrl";
import type { Metadata } from "next";
import ErrorBoundary from "providers/context/ErrorBoundary";
import { OrganizationContextProvider } from "providers/context/OrganizationContextProvider";
import { ModalProvider } from "providers/modal-provider/ModalProvider";
import type { AddsItem } from "types/AddsItem";
import type { OrganizationItem } from "types/OrganizationItem";

import { MainColumn } from "components/atoms/MainColumn/MainColumn";
import { MobileNavbar } from "components/molecules/MobileNavbar/MobileNavbar";
import { ScrollToTopButton } from "components/molecules/ScrollToTopButton/ScrollToTopButton";
import Footer from "components/organisms/Footer";
import LandscapeAdd from "components/organisms/LandscapeAdd/LandscapeAdd";
import { SideBar } from "components/organisms/SideBar/SideBar";

import GlobalThemeWrapper from "../lib/GlobalThemeWrapper";
import StyledComponentsRegistry from "../lib/register";

import "@mantine/core/styles.css";

export const revalidate = 60;
export const fetchCache = "force-no-store";

const fontClassName = "font-spectral";
const defaultSiteName = "Głos Milicza";
const defaultDescription = "Głos Milicza";

interface GeneralSeoData {
  description?: string;
  image?: {
    asset?: {
      _ref?: string;
    };
  };
  name?: string;
}

const getMetadataBase = (): URL | undefined => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    return undefined;
  }

  try {
    return new URL(baseUrl);
  } catch {
    return undefined;
  }
};

const fetchGeneralSeo = async (): Promise<GeneralSeoData | null> => {
  try {
    return await sanityClient.fetch<GeneralSeoData | null>(
      `*[_type == "generalSeo" && !(_id in path("drafts.**"))][0]`,
    );
  } catch {
    return null;
  }
};

const fetchLayoutData = async (): Promise<{
  adds: AddsItem | null;
  organization: OrganizationItem | null;
}> => {
  const [organizationResult, addsResult] = await Promise.allSettled([
    fetchOrganization(),
    fetchAdds(),
  ]);

  return {
    organization:
      organizationResult.status === "fulfilled"
        ? organizationResult.value
        : null,
    adds: addsResult.status === "fulfilled" ? addsResult.value : null,
  };
};

export const generateMetadata = async (): Promise<Metadata> => {
  const generalSeo = await fetchGeneralSeo();

  const siteName = generalSeo?.name ?? defaultSiteName;
  const description = generalSeo?.description ?? defaultDescription;
  const imageRef = generalSeo?.image?.asset?._ref;
  const imagePath = imageRef ? buildImageUrl(imageRef) : undefined;

  return {
    metadataBase: getMetadataBase(),
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description,
    openGraph: {
      title: {
        default: siteName,
        template: `%s | ${siteName}`,
      },
      url: `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}`,
      locale: "pl_PL",
      type: "website",
      description,
      images: imagePath ? [imagePath] : undefined,
    },
  };
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { organization, adds } = await fetchLayoutData();

  if (!organization?.tabs?.length) {
    return (
      <html lang="pl" {...mantineHtmlProps}>
        <head>
          <ColorSchemeScript />
        </head>
        <body className={fontClassName}>
          <ErrorBoundary>
            <MantineProvider forceColorScheme="light">
              <StyledComponentsRegistry>
                <GlobalThemeWrapper>{children}</GlobalThemeWrapper>
              </StyledComponentsRegistry>
            </MantineProvider>
            <Hotjar />
          </ErrorBoundary>
        </body>
      </html>
    );
  }

  return (
    <html lang="pl" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={fontClassName}>
        <ErrorBoundary>
          <OrganizationContextProvider organization={organization}>
            <MantineProvider forceColorScheme="light">
              <StyledComponentsRegistry>
                <GlobalThemeWrapper>
                  <ModalProvider>
                    <MobileNavbar>
                      {adds?.mainAdd && (
                        <LandscapeAdd mainAdd={adds?.mainAdd} />
                      )}
                      <MainColumn>
                        {children}
                        <SideBar boxAdds={adds?.boxAdds} />
                      </MainColumn>
                      <Footer />
                      <ScrollToTopButton />
                    </MobileNavbar>
                  </ModalProvider>
                </GlobalThemeWrapper>
              </StyledComponentsRegistry>
            </MantineProvider>
          </OrganizationContextProvider>
          <Hotjar />
        </ErrorBoundary>
      </body>
    </html>
  );
};

export default RootLayout;
