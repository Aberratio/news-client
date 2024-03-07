export const dynamic = "force-dynamic";

import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Nie znalezionow</h2>
      <p>Szukany zasób nie został znaleziony</p>
      <Link href="/">Powrót do strony głównej</Link>
    </div>
  );
}
