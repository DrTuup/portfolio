"use client";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { GradientTitle, SubTitle } from "@/components/title";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Spacer } from "@/components/spacer";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Header } from "@/components/header";
import { toast } from "sonner";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Your name is required to send a message.",
    })
    .min(2, "Should be at least 2 characters long")
    .max(50),
  email: z
    .string({
      required_error: "Your email is required to send a message.",
    })
    .email(),
  message: z
    .string({
      required_error: "Please enter a message.",
    })
    .min(2, "Should be at least 2 characters long")
    .max(280),
});

export default function Contact() {
  const [messageChars, setMessageChars] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSending(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      toast("❌ Something went wrong when sending the message!");
      setIsSending(false);
      return;
    }
    toast("✅ Message sent!");
    setIsSending(false);
  }

  return (
    <>
      <Header>
        <GradientTitle text="Contact" />
        <Separator />
        <SubTitle text="Let's connect!" />
        <Separator />
      </Header>
      <div className="flex flex-col w-full md:w-8/12 gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Appleseed" {...field} />
                  </FormControl>
                  <FormDescription>Your name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johnappleseed@example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    The email address you want to be contacted on.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Hello there!"
                      minLength={2}
                      maxLength={280}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setMessageChars(e.target.value.length);
                      }}
                    />
                  </FormControl>
                  <FormDescription className="w-full flex justify-between">
                    Type your message here <span>{messageChars}/280</span>
                  </FormDescription>
                  <FormDescription className="justify-self-end"></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span className="flex flex-row items-center justify-between basis-full">
              <Button type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send"}
              </Button>
              <Button
                onClick={() => open("https://linkedin.com/in/ruben-claessens")}
                type="button"
              >
                <Image
                  src="/linkedin.png"
                  alt="linkedin logo"
                  loading="eager"
                  width={30}
                  height={30}
                />
                Connect on LinkedIn
              </Button>
            </span>
          </form>
        </Form>
      </div>
      <Spacer />
    </>
  );
}
