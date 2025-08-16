"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  input1: z.email(),
  input2: z.string().min(8),
});

type FormValues = z.infer<typeof formSchema>;

const TesteForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input1: "",
      input2: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("FORMULARIO VALIDO E ENVIADO");
    console.log(values);
  }

  return (
    <>
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="input1"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="input2"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="" type="senha" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">OK</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
};

export default TesteForm;
