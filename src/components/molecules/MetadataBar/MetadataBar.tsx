"use client";

import Link from "next/link";

import Bar from "components/atoms/Bar";
import Typography from "components/atoms/Typography";

interface MetadataBarProps {
  name: string;
  date: string;
}

const MetadataBar = ({ name, date }: MetadataBarProps) => {
  return (
    <Bar dataTestId={`metadata-bar`}>
      <Link href="#">
        <Typography color="black" variant="small" dataTestId="metadata-name">
          <strong>{name}</strong>
        </Typography>
      </Link>
      <Typography variant="small" color="#6b6b6b" dataTestId="metadata-date">
        {date}
      </Typography>
    </Bar>
  );
};

export default MetadataBar;
