"use client";

import Button from "components/atoms/Button";
import Typography from "components/atoms/Typography";
import { SubmitHandler, useForm } from "react-hook-form";
import { styled } from "styled-components";

interface FormFields {
  name: string;
  comment: string;
}

export const CommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3">Skomentuj</Typography>
      <FormElement>
        <label htmlFor="name">
          <Typography variant="small">Nazwa</Typography>
        </label>
        <Input {...register("name")} type="text" placeholder="Nazwa" />
      </FormElement>

      <FormElement>
        <label htmlFor="comment">
          <Typography variant="small">Komentarz</Typography>
        </label>
        <Textarea {...register("comment")} placeholder="Komentarz" />
      </FormElement>
      <Button
        variant="secondary"
        size="large"
        disabled={isSubmitting}
        type="submit"
      >
        <Typography>{isSubmitting ? "Wysyłanie..." : "Skomentuj"}</Typography>
      </Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 2px;
`;

const Input = styled.input`
  width: 300px;
  height: 56px;
  padding: 0px 16px;
  border: none;
  font-family: "Cabin", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: black;
  outline: none;

  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

const Textarea = styled.textarea`
  width: calc(100% - 32px);
  max-width: calc(100% - 32px);
  min-width: 300px;
  height: 140px;
  padding: 16px;
  border: none;
  font-family: "Cabin", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: black;
  outline: none;

  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;
