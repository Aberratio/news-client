"use server";

import { revalidateTag } from "next/cache";

export default function revalidateCommentsTag() {
  revalidateTag("comments");
}
