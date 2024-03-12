"use client";

import Box from "components/atoms/Box";
import Button from "components/atoms/Button";
import Typography from "components/atoms/Typography";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);
  return (
    <html>
      <body>
        <Box margin="120px auto" marginM="40px auto">
          <Typography variant="h2" space={{ marginBottom: "30px" }}>
            Błąd strony!
          </Typography>
          <Button onClick={() => reset()} variant="secondary">
            Spróbuj ponownie
          </Button>
        </Box>
      </body>
    </html>
  );
}
