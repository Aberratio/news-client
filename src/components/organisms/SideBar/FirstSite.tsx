import Typography from "components/atoms/Typography";
import Widget from "components/molecules/Widget";
import Image from "next/image";

export const FirstSite = () => {
  const date = "10.01.2024";
  const number = "1412";

  return (
    <Widget dataTestId="first-site" title="Najnowszy numer">
      <Typography flexDirection="row">
        W sprzedaży od <strong>{date}</strong>
      </Typography>
      <Image
        src={`/images/first-site/${number}.jpg`}
        alt="Najnowszy numer"
        width={300}
        height={400}
      />
      {/* <Typography>Temat tygodnia</Typography>
      <Typography>25-LECIE POWIATU MILICKIEGO</Typography> */}
    </Widget>
  );
};
