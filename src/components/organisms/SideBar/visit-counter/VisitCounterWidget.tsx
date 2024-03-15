"use client";

import { memo } from "react";

import { VisitCounter } from "./VisitCounter";

export const VisitCounterWidget = memo(() => {
  let isNew = true;

  if (localStorage.getItem("firstVisit")) {
    isNew = false;
  } else {
    localStorage.setItem("firstVisit", "false");
  }

  return <VisitCounter isNew={isNew ?? false} />;
});
