import { fetchTabs } from "core/api/navigation/fetchTabs";
import { sanityClient } from "core/api/sanityClient";
import { fetchAdds } from "core/api/settings/fetchAdds";
import { fetchOrganization } from "core/api/settings/fetchOrganization";
import { buildImageUrl } from "core/builders/buildImageUrl";
import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import Script from "next/script";
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

export async function generateMetadata(): Promise<Metadata> {
  const generalSeo = await sanityClient.fetch(
    `*[_type == "generalSeo" && !(_id in path("drafts.**"))][0]`
  );

  const imagePath = buildImageUrl(generalSeo?.image?.asset?._ref || "");

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ""),
    title: {
      default: generalSeo.name,
      template: `%s | ${generalSeo.name}`,
    },
    description: generalSeo.description,
    openGraph: {
      title: {
        default: generalSeo.name,
        template: `%s | ${generalSeo.name}`,
      },
      url: `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}`,
      locale: "pl_PL",
      type: "website",
      description: generalSeo.description,
      images: [imagePath],
    },
  };
}

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
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                <!-- Hotjar Tracking Code -->
                  <script>
                    (function(h,o,t,j,a,r){
                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                        h._hjSettings={hjid:${Number(
                          process.env.NEXT_PUBLIC_HOTJAR_ID
                        )},hjsv:6};
                        a=o.getElementsByTagName('head')[0];
                        r=o.createElement('script');r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                  </script>
                `,
            }}
          />
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
