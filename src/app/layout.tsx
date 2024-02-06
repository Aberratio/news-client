import GlobalThemeWrapper from "../lib/GlobalThemeWrapper";
import StyledComponentsRegistry from "../lib/register";

import type { Metadata } from "next";
import { Spectral } from "next/font/google";

import Footer from "components/organisms/Footer";
import { OrganizationContextProvider } from "providers/context/OrganizationContextProvider";
import { TabItem } from "types/TabItem";
import Menu from "components/organisms/Menu";
import Navigation from "components/organisms/Navigation";
import ScrollToTopButton from "components/molecules/ScrollToTopButton/ScrollToTopButton";
import { SideBar } from "components/organisms/SideBar/SideBar";
import { MainColumn } from "components/atoms/MainColumn/MainColumn";

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

  return (
    <html lang="en">
      <body className={spectral.className}>
        <OrganizationContextProvider tabs={tabs}>
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
      </body>
    </html>
  );
};

export default RootLayout;

const fetchTabs = async (): Promise<TabItem[]> => {
  ("use server");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/categories/tabs`,
    {
      cache: "force-cache",
    }
  );

  const tabs = await response.json();

  return tabs;
};
