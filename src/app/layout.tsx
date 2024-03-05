import { fetchTabs } from "core/api/navigation/fetchTabs";
import { fetchAdds } from "core/api/settings/fetchAdds";
import { fetchOrganization } from "core/api/settings/fetchOrganization";
import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import ErrorBoundary from "providers/context/ErrorBoundary";
import { OrganizationContextProvider } from "providers/context/OrganizationContextProvider";

import { MainColumn } from "components/atoms/MainColumn/MainColumn";
import ScrollToTopButton from "components/molecules/ScrollToTopButton/ScrollToTopButton";
import Footer from "components/organisms/Footer";
import LandscapeAdd from "components/organisms/LandscapeAdd/LandscapeAdd";
import Menu from "components/organisms/Menu";
import Navigation from "components/organisms/Navigation";
import { SideBar } from "components/organisms/SideBar/SideBar";

import GlobalThemeWrapper from "../lib/GlobalThemeWrapper";
import StyledComponentsRegistry from "../lib/register";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ""),
  description: "Lokalny tygodnik informacyjny",
  title: {
    default: "Głos  Milicza",
    template: "%s | Głos  Milicza",
  },
  openGraph: {
    title: {
      default: "Głos  Milicza",
      template: "%s | Głos  Milicza",
    },
    description: "Lokalny tygodnik informacyjny",
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const tabs = await fetchTabs();
  const organization = await fetchOrganization();
  const adds = await fetchAdds();

  if (!tabs) {
    return null;
  }

  return (
    <html lang="pl">
      <body className={spectral.className}>
        <ErrorBoundary>
          <OrganizationContextProvider organization={organization}>
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
