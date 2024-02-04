import Typography from "components/atoms/Typography";
import { CommentForm } from "./CommentForm";

export const CommentSection = () => {
  return (
    <div>
      <hr />
      <Typography variant="h2" marginBottom={40}>
        Komentarze
      </Typography>
      <CommentForm />
      <div>
        <Typography>Brak komentarzy</Typography>
      </div>
    </div>
  );
};
