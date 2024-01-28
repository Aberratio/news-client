import { WidgetSchema } from "./WidgetSchema";
import Image from "next/image";

export const FirstSite = () => {
  const gmNumber = 1412;
  const date = "10.01.2024";

  return (
    <WidgetSchema dataTestId="first-site" title={`W sprzedaży od ${date}`}>
      <Image
        src={`/images/first-site/${gmNumber}.jpg`}
        alt="first site"
        width={320}
        height={436}
      />
    </WidgetSchema>
  );
};
