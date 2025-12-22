"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { socialLinks, fadeUp, personalInfo } from "@/constants/constants";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <Mail className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-400">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as
                  possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="bg-neutral-900 border-neutral-700 focus:border-purple-500"
                            />
                          </FormControl>
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
                            <Input
                              placeholder="your.email@example.com"
                              type="email"
                              {...field}
                              className="bg-neutral-900 border-neutral-700 focus:border-purple-500"
                            />
                          </FormControl>
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
                              placeholder="Tell me about your project..."
                              {...field}
                              rows={5}
                              className="bg-neutral-900 border-neutral-700 focus:border-purple-500 resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-green-500 bg-green-500/10 p-3 rounded-lg border border-green-500/20"
                      >
                        <CheckCircle2 className="h-5 w-5" />
                        <span>
                          Message sent successfully! I'll get back to you soon.
                        </span>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20"
                      >
                        <AlertCircle className="h-5 w-5" />
                        <span>
                          Failed to send message. Please try again or use email
                          directly.
                        </span>
                      </motion.div>
                    )}
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Info Card */}
            <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Prefer to reach out directly? Here's how you can find me
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-neutral-300">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Social Links Card */}
            <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>
                  Let's connect on social media and professional networks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = iconMap[social.icon] || Mail;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-4 rounded-lg border border-neutral-800 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 group"
                      >
                        <Icon className="h-5 w-5 text-neutral-400 group-hover:text-purple-400 transition-colors" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-neutral-300 group-hover:text-purple-400 transition-colors">
                            {social.name}
                          </div>
                          {social.handle && (
                            <div className="text-xs text-neutral-500 truncate">
                              {social.handle}
                            </div>
                          )}
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
