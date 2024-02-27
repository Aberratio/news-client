"use server";

import { VisitCounter } from "./VisitCounter";

interface VisitCounterWidgetProps {
  visits: number;
}

export const VisitCounterWidget = ({ visits }: VisitCounterWidgetProps) => {
  return <VisitCounter visits={visits} />;
};
