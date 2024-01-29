import GlobalThemeWrapper from "../lib/GlobalThemeWrapper";
import StyledComponentsRegistry from "../lib/register";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Footer from "components/organisms/Footer";
import { MenuDesktop } from "components/organisms/Menu/desktop/MenuDesktop";
import { NavigationDesktop } from "components/organisms/Navigation/NavigationDesktop";
import { OrganizationContextProvider } from "providers/context/OrganizationContextProvider";
import { TabItem } from "types/TabItem";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
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
      <body className={roboto.className}>
        <OrganizationContextProvider tabs={tabs}>
          <StyledComponentsRegistry>
            <GlobalThemeWrapper>
              <MenuDesktop />
              <NavigationDesktop />
              {children}
              <Footer />
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
  const response = await fetch("http://localhost:3007/v1/categories/tabs", {
    cache: "force-cache",
  });

  const tabs = await response.json();

  return tabs;
};
