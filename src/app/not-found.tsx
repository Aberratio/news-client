"use client";
export const dynamic = "force-dynamic";

import Link from "next/link";

import Box from "components/atoms/Box";
import Button from "components/atoms/Button";
import Typography from "components/atoms/Typography";

export default function NotFound() {
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
