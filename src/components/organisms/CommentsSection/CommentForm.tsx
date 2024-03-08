"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { fetchNewComment } from "core/api/comments/fetchNewComment";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

import Button from "components/atoms/Button";
import Typography from "components/atoms/Typography";

export interface FormFields {
  name: string;
  comment: string;
}

interface CommentFormProps {
  _id: string;
  sendComment: any;
}

export const CommentForm = ({ _id }: CommentFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    fetchNewComment({
      _id,
      author: data.name,
      date: new Date(),
      text: data.comment,
    });
    setTimeout(() => {
      reset();
      router.refresh();
    }, 1000);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3">Skomentuj</Typography>
      <FormElement>
        <label htmlFor="name">
          <Typography variant="small">Pseudonim</Typography>
        </label>
        <Input
          {...register("name", {
            minLength: {
              value: 2,
              message: "Pseudonim musi mieć co najmniej 2 znaki",
            },
            required: {
              value: true,
              message: "Pseudonim jest wymagany",
            },
          })}
          type="text"
          placeholder="Wpisz swój pseudonim..."
        />
        {errors.name && (
          <Typography variant="small" color="red">
            {errors.name.message}
          </Typography>
        )}
      </FormElement>

      <FormElement>
        <label htmlFor="comment">
          <Typography variant="small">Komentarz</Typography>
        </label>
        <Textarea
          {...register("comment", {
            minLength: {
              value: 2,
              message: "Komentarz musi mieć co najmniej 2 znaki",
            },
            required: {
              value: true,
              message: "Komentarz jest wymagany",
            },
          })}
          placeholder="Wpisz swój komenatrz..."
        />
        {errors.comment && (
          <Typography variant="small" color="red">
            {errors.comment.message}
          </Typography>
        )}
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
  width: calc(100% - 32px);
  max-width: 300px;
  min-width: 200px;

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

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

const Textarea = styled.textarea`
  width: calc(100% - 32px);
  max-width: calc(100% - 32px);
  min-width: 200px;
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

  @media screen and (min-width: 768px) {
    min-width: 300px;
  }
`;
