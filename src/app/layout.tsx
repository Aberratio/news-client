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
import { fetchFirstSite } from "core/api/settings/fetchFirstSite";
import LandscapeAdd from "components/organisms/LandscapeAdd/LandscapeAdd";
import { fetchAdds } from "core/api/settings/fetchAdds";

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
  const firstSite = await fetchFirstSite(); //marketingContent
  const adds = await fetchAdds();

  if (!tabs) {
    return null;
  }

  return (
    <html lang="pl">
      <body className={spectral.className}>
        <ErrorBoundary>
          <OrganizationContextProvider tabs={tabs} firstSite={firstSite}>
            <StyledComponentsRegistry>
              <GlobalThemeWrapper>
                <Menu />
                <Navigation />
                {adds?.mainAdd && <LandscapeAdd mainAdd={adds?.mainAdd} />}
                <MainColumn>
                  {children}
                  <SideBar boxAdds={adds?.boxAdds} />
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
