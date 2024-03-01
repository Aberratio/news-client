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
        <Typography variant="small">
          <strong>{authorName}</strong>
        </Typography>
      </Link>
      <Typography variant="small" color="#6b6b6b">
        {createdOn}
      </Typography>
    </Bar>
  );
};

export default MetadataBar;
