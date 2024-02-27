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
import { SanityCommentItem } from "./api/comments/route";

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
  const comments = await fetchLastComments();

  if (!tabs) {
    return null;
  }

  return (
    <html lang="en">
      <body className={spectral.className}>
        <ErrorBoundary>
          <OrganizationContextProvider tabs={tabs}>
            <StyledComponentsRegistry>
              <GlobalThemeWrapper>
                <Menu />
                <Navigation />
                <MainColumn>
                  {children}
                  <SideBar comments={comments} />
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

const fetchLastComments = async () => {
  const comments: SanityCommentItem[] = await sanityClient.fetch(
    '*[_type == "comment"]{author, _createdAt, likes, _id, text, post->} | order(_createdAt desc) [0..5]'
  );

  return mapData(comments);
};

const cutComment = (comment: string) => {
  return comment?.length > 100 ? comment?.substring(0, 100) + "..." : comment;
};

const mapData = (data: SanityCommentItem[]): CommentSummarizationItem[] => {
  return data.map((item: SanityCommentItem) => {
    return {
      articleSlug: item.post.slug.current,
      articleTitle: item.post.title,
      author: item.author,
      date: new Date(item._createdAt).toLocaleString(),
      dislikes: item.likes,
      id: item._id,
      likes: item.likes,
      text: cutComment(item.text),
    } as CommentSummarizationItem;
  });
};
