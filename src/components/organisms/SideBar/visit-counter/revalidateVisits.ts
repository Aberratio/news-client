"use server";

import { revalidateTag } from "next/cache";

//eslint-disable-next-line @typescript-eslint/require-await
export const revalidateVisitsTag = async () => {
  revalidateTag("visits");
};
