"use client";

import Bar from "components/atoms/Bar";
import Typography from "components/atoms/Typography";
import Link from "next/link";

interface MetadataBarProps {
  authorName: string;
  createdOn: string;
}

const MetadataBar = ({ authorName, createdOn }: MetadataBarProps) => {
  return (
    <Bar dataTestId={`metadata-bar`}>
      <Link href="#">
        <Typography variant="small">{authorName}</Typography>
      </Link>
      <Typography variant="small">- {createdOn}</Typography>
    </Bar>
  );
};

export default MetadataBar;
