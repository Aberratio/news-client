import GlobalThemeWrapper from "../lib/GlobalThemeWrapper";
import StyledComponentsRegistry from "../lib/register";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Footer from "components/organisms/Footer";
import { MenuDesktop } from "components/organisms/Menu/desktop/MenuDesktop";
import { NavigationDesktop } from "components/organisms/Navigation/NavigationDesktop";
import { OrganizationContextProvider } from "providers/context/OrganizationContextProvider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Głos  Milicza",
  description: "Lokalny tygodnik informacyjny",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <OrganizationContextProvider>
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
