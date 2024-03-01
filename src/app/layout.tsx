import GlobalThemeWrapper from "../lib/GlobalThemeWrapper";
import StyledComponentsRegistry from "../lib/register";

import type { Metadata } from "next";
import { Spectral } from "next/font/google";

import Footer from "components/organisms/Footer";
import { OrganizationContextProvider } from "providers/context/OrganizationContextProvider";
import Menu from "components/organisms/Menu";
import Navigation from "components/organisms/Navigation";
import ScrollToTopButton from "components/molecules/ScrollToTopButton/ScrollToTopButton";
import { SideBar } from "components/organisms/SideBar/SideBar";
import { MainColumn } from "components/atoms/MainColumn/MainColumn";
import { fetchTabs } from "core/api/navigation/fetchTabs";
import ErrorBoundary from "providers/context/ErrorBoundary";
import { sanityClient } from "core/api/sanityClient";
import { CommentSummarizationItem } from "types/CommentSummarizationItem";
import { SanityCommentItem } from "core/api/articles/fetchArticleComments";
import { fetchFirstSite } from "core/api/settings/fetchFirstSite";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Głos  Milicza",
  description: "Lokalny tygodnik informacyjny",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const tabs = await fetchTabs();
  const firstSite = await fetchFirstSite();

  if (!tabs) {
    return null;
  }

  return (
    <html lang="en">
      <body className={spectral.className}>
        <ErrorBoundary>
          <OrganizationContextProvider tabs={tabs} firstSite={firstSite}>
            <StyledComponentsRegistry>
              <GlobalThemeWrapper>
                <Menu />
                <Navigation />
                <MainColumn>
                  {children}
                  <SideBar />
                </MainColumn>
                <Footer />
                <ScrollToTopButton />
              </GlobalThemeWrapper>
            </StyledComponentsRegistry>
          </OrganizationContextProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
};

export default RootLayout;
