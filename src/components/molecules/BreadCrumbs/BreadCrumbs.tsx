"use client";

import { BreadCrumbsContent } from "./BreadCrumbsContent";
import {
  BreadCrumbsInfo,
  useGenerateBreadcrumbs,
} from "./useGenerateBreadcrumbs";

interface BreadCrumbsProps {
  breadCrubmsInfo: BreadCrumbsInfo;
}

const BreadCrumbs = ({ breadCrubmsInfo }: BreadCrumbsProps) => {
  const { generateBreadCrumbs } = useGenerateBreadcrumbs();

  return (
    <BreadCrumbsContent breadcrumbs={generateBreadCrumbs(breadCrubmsInfo)} />
  );
};

export default BreadCrumbs;
