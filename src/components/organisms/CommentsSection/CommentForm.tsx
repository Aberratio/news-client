"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

import Typography from "components/atoms/Typography";
import { Send } from "components/molecules/Icons/Send";

export interface FormFields {
  name: string;
  comment: string;
}

interface CommentFormProps {
  _id: string;
  sendComment: (payload: {
    _id: string;
    author: string;
    date: Date;
    text: string;
  }) => Promise<void>;
}

type SubmitStatus = "idle" | "success" | "error";

export const CommentForm = ({ _id, sendComment }: CommentFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ mode: "onBlur" });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const router = useRouter();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setSubmitStatus("idle");

    try {
      await sendComment({
        _id,
        author: data.name.trim(),
        date: new Date(),
        text: data.comment.trim(),
      });
      reset();
      setSubmitStatus("success");
      router.refresh();
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} aria-busy={isSubmitting}>
      <FormHeader>
        <Typography variant="h2">Skomentuj</Typography>
      </FormHeader>

      <FormElement>
        <label htmlFor="name">
          <Typography variant="small">Pseudonim</Typography>
        </label>
        <Input
          {...register("name", {
            required: {
              value: true,
              message: "Pseudonim jest wymagany",
            },
            validate: (value) =>
              value.trim().length >= 2 ||
              "Pseudonim musi mieć co najmniej 2 znaki",
          })}
          aria-invalid={!!errors.name}
          autoComplete="nickname"
          id="name"
          type="text"
          placeholder="Wpisz swój pseudonim..."
        />
        {errors.name && (
          <FieldMessage role="alert">{errors.name.message}</FieldMessage>
        )}
      </FormElement>

      <FormElement>
        <label htmlFor="comment">
          <Typography variant="small">Komentarz</Typography>
        </label>
        <Textarea
          {...register("comment", {
            required: {
              value: true,
              message: "Komentarz jest wymagany",
            },
            validate: (value) =>
              value.trim().length >= 2 ||
              "Komentarz musi mieć co najmniej 2 znaki",
          })}
          aria-invalid={!!errors.comment}
          id="comment"
          placeholder="Wpisz swój komentarz..."
        />
        {errors.comment && (
          <FieldMessage role="alert">{errors.comment.message}</FieldMessage>
        )}
      </FormElement>

      <SubmitRow>
        <Button
          disabled={isSubmitting}
          type="submit"
          color="#2e6896"
          leftSection={<Send size={{ width: "1rem", height: "1rem" }} />}
        >
          {isSubmitting ? "Wysyłanie..." : "Skomentuj"}
        </Button>
        <StatusMessage aria-live="polite">
          {submitStatus === "success" &&
            "Komentarz został wysłany i pojawi się po odświeżeniu listy."}
          {submitStatus === "error" &&
            "Nie udało się wysłać komentarza. Spróbuj ponownie."}
        </StatusMessage>
      </SubmitRow>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  min-width: 0;
  padding: 18px;
  margin: 0 0 28px;
  box-sizing: border-box;
  border: 1px solid #e6e8eb;
  border-radius: 8px;
  background: #fafafa;

  @media screen and (max-width: 767px) {
    padding: 14px;
    gap: 14px;
  }
`;

const FormHeader = styled.div`
  display: flex;
  min-width: 0;
`;

const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  min-width: 0;
  height: 56px;
  padding: 0 16px;
  border: 1px solid #d7dce0;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  font-family: "Cabin", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  outline: none;

  &:focus {
    border-color: #2e6896;
    box-shadow: 0 0 0 3px rgba(46, 104, 150, 0.16);
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  height: 140px;
  padding: 16px;
  border: 1px solid #d7dce0;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  font-family: "Cabin", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #2e6896;
    box-shadow: 0 0 0 3px rgba(46, 104, 150, 0.16);
  }

  @media screen and (min-width: 768px) {
    min-width: 300px;
  }
`;

const FieldMessage = styled.div`
  margin: 0;
  color: #b80000;
  font-family: ${({ theme }) => theme.customFonts.smallM.fontFamily};
  font-size: ${({ theme }) => theme.customFonts.smallM.fontSize};
  font-weight: ${({ theme }) => theme.customFonts.smallM.fontWeight};
  line-height: ${({ theme }) => theme.customFonts.smallM.lineHeight};
`;

const SubmitRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;

  @media screen and (max-width: 567px) {
    align-items: stretch;
    flex-direction: column;

    button {
      width: 100%;
      min-height: 44px;
    }
  }
`;

const StatusMessage = styled.div`
  min-height: 20px;
  color: #425466;
  font-family: "Cabin", sans-serif;
  font-size: 14px;
  line-height: 20px;
  overflow-wrap: anywhere;
`;
