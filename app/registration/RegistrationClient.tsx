"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type QuestionType = "text" | "number" | "select" | "checkbox";

interface Question {
  question_id: string;
  question_text: string;
  question_type: QuestionType;
  question_description?: string;
  options?: readonly [string, ...string[]];
}

const createQuestionSchema = (question: Question) => {
  switch (question.question_type) {
    case "text":
      return z.string().min(1, `${question.question_text} is required`);
    case "number":
      return z.coerce
        .number()
        .min(0, `${question.question_text} must be a positive number`);
    case "select":
      if (!question.options || question.options.length < 2) {
        throw new Error(
          `Options are required for select question type: ${question.question_text}`
        );
      }
      return z.enum(question.options);
    case "checkbox":
      if (!question.options) {
        throw new Error(
          `Options are required for checkbox question type: ${question.question_text}`
        );
      }
      return z
        .array(z.enum(question.options))
        .nonempty(`${question.question_text} is required`);
    default:
      throw new Error(`Unknown question type: ${question.question_type}`);
  }
};

const createFormSchema = (questions: Question[]) => {
  const schemaShape: { [key: string]: z.ZodTypeAny } = {};
  questions.forEach((question) => {
    schemaShape[question.question_id.toString()] =
      createQuestionSchema(question);
  });

  return z.object(schemaShape);
};

export default function RegistrationClient({
  questions,
  existingResponses,
  submitResults,
}: {
  questions: any[];
  existingResponses: any;
  submitResults: (data: any) => void;
}) {
  const FormSchema = createFormSchema(questions);

  const responseLookup = existingResponses.reduce(
    (acc: { [x: string]: any }, { question_id, response }: any) => {
      acc[question_id.toString()] = response;
      return acc;
    },
    {} as Record<string, string>
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: questions.reduce((acc, question) => {
      console.log(existingResponses[(question.question_id - 1).toString()]);
      acc[question.question_id.toString()] =
        responseLookup[question.question_id.toString()] || "";
      return acc;
    }, {} as Record<string, string>),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    submitResults(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {questions.map((question) => {
          switch (question.question_type) {
            case "text":
              return (
                <TextQuestion
                  key={question.question_id}
                  question={question}
                  form={form}
                />
              );
            case "number":
              return (
                <NumberQuestion
                  key={question.question_id}
                  question={question}
                  form={form}
                />
              );
            case "select":
              return (
                <SelectQuestion
                  key={question.question_id}
                  question={question}
                  form={form}
                />
              );
          }
        })}
        <Button onClick={() => console.log(form.formState)}>test</Button>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

function TextQuestion({ question, form }: { question: any; form: any }) {
  return (
    <FormField
      key={question.question_id}
      control={form.control}
      name={question.question_id.toString()}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{question.question_text}</FormLabel>
          <FormControl>
            <Input placeholder={question.question_text} {...field} />
          </FormControl>
          <FormDescription>
            {question.question_description ?? ""}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function NumberQuestion({ question, form }: { question: any; form: any }) {
  return (
    <FormField
      key={question.question_id}
      control={form.control}
      name={question.question_id.toString()}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{question.question_text}</FormLabel>
          <FormControl>
            <Input
              type="number"
              placeholder={question.question_text}
              {...field}
            />
          </FormControl>
          <FormDescription>
            {question.question_description ?? ""}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function SelectQuestion({ question, form }: { question: any; form: any }) {
  return (
    <FormField
      key={question.question_id}
      control={form.control}
      name={question.question_id.toString()}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{question.question_text}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder={question.question_text} />
              </SelectTrigger>
              <SelectContent>
                {question.options.map((option: string) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription>
            {question.question_description ?? ""}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
