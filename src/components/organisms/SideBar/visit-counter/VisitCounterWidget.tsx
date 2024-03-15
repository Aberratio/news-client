"use client";

import { VisitCounter } from "./VisitCounter";

export const VisitCounterWidget = () => {
  let isNewVisit = true;

  if (localStorage.getItem("isNewVisit")) {
    isNewVisit = false;
  } else {
    localStorage.setItem("isNewVisit", "false");
  }

  return <VisitCounter isNewVisit={isNewVisit} />;
};
