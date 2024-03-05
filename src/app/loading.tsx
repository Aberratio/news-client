import Spinner from "components/atoms/Spinner";

export default function Loading() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "400px",
      }}
    >
      <Spinner />
    </div>
  );
}
