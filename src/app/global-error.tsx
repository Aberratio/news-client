"use client";

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
        <h2>Błąd strony!</h2>
        <button onClick={() => reset()}>Spróbuj ponownie</button>
      </body>
    </html>
  );
}
