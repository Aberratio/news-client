"use client";

import { useEffect } from "react";
import { Button } from "@mantine/core";
import Link from "next/link";

import Box from "components/atoms/Box";
import Typography from "components/atoms/Typography";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box margin="120px auto" marginM="40px auto">
      <Typography variant="h2">Nie znaleziono</Typography>
      <Typography space={{ marginBottom: "30px" }}>
        Szukany zasób nie został znaleziony
      </Typography>
      <Link href="/">
        <Button variant="secondary">Powrót do Strony Głównej</Button>
      </Link>
    </Box>
  );
}
