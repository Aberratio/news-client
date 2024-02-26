"use server";

import { fetchVisits } from "core/api/stats/fetchVisits";
import { VisitCounter } from "./VisitCounter";

export const VisitCounterWidget = async () => {
  const visits: number = await fetchVisits();

  return <VisitCounter visits={visits} />;
};
