import Typography from "components/atoms/Typography";
import { WidgetSchema } from "./WidgetSchema";

export const FirstSite = () => {
  const date = "10.01.2024";

  return (
    <WidgetSchema dataTestId="first-site" title="Najnowszy numer">
      <Typography>{`W sprzedaży od ${date}`}</Typography>
      <Typography>Temat tygodnia</Typography>
      <Typography>25-LECIE POWIATU MILICKIEGO</Typography>
    </WidgetSchema>
  );
};
