"use client";

import { useState } from "react";
import AppBar from "@/components/AppBar";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("Sending...");

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, subject, body }),
      });

      if (response.ok) {
        setSubmitStatus("Message sent successfully!");
        // Clear the form
        setFrom("");
        setSubject("");
        setBody("");
      } else {
        const errorData = await response.json();
        setSubmitStatus(
          `Failed to send message. ${errorData.error?.message || "Please try again."}`,
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      // Make the status message disappear after a few seconds
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-clip">
      <AppBar name="Contact" />
      <div className="flex flex-col h-screen w-screen items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-start p-4 w-[90%] h-[90%]"
        >
          {/* To Field and Social Links */}
          <div className="flex items-center mb-2 w-full">
            <label htmlFor="to-field" className="w-16 text-gray-500">
              To:
            </label>
            <input
              type="text"
              id="to-field"
              value="Harshit Sandilya"
              readOnly
              className="flex-1 p-2 bg-gray-100 rounded-md outline-none cursor-default"
            />
            <div className="flex items-center ml-2">
              <Link href={"mailto:harshitsandilya@gmail.com"} passHref>
                <div className="h-8 w-8 ml-2 cursor-pointer">
                  <Image
                    src={"/images/gmail.png"}
                    alt="Gmail"
                    height={512}
                    width={512}
                  />
                </div>
              </Link>
              <Link href={"https://github.com/harshit-sandilya"} passHref>
                <div className="h-8 w-8 ml-2 cursor-pointer">
                  <Image
                    src={"/images/github.png"}
                    alt="GitHub"
                    height={512}
                    width={512}
                  />
                </div>
              </Link>
              <Link
                href={"http://www.linkedin.com/in/harshit-sandilya"}
                passHref
              >
                <div className="h-8 w-8 ml-2 cursor-pointer">
                  <Image
                    src={"/images/linkedin.png"}
                    alt="LinkedIn"
                    height={512}
                    width={512}
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* From Field */}
          <div className="flex items-center mb-2 w-full">
            <label htmlFor="from-field" className="w-16 text-gray-500">
              From:
            </label>
            <input
              type="email"
              id="from-field"
              name="from"
              placeholder="your.email@example.com"
              required
              className="flex-1 p-2 bg-transparent rounded-md border border-gray-300 outline-none"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>

          {/* Subject Field */}
          <div className="flex items-center w-full mb-2">
            <label htmlFor="re-field" className="w-16 text-gray-500">
              Re:
            </label>
            <input
              type="text"
              id="re-field"
              name="subject"
              placeholder="Subject of your message"
              className="flex-1 p-2 bg-transparent rounded-md border border-gray-300 outline-none"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* Body Textarea */}
          <div className="flex-1 pt-4 w-full">
            <textarea
              name="body"
              placeholder="Your message here..."
              required
              className="w-full h-full p-2 resize-none rounded-md border outline-none text-base border-gray-300"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          {/* Send Button and Status Message */}
          <div className="pt-4 flex items-center justify-start gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-1 bg-gray-200 font-medium rounded-sm cursor-pointer shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Send
            </button>
            {submitStatus && (
              <p className="text-sm text-gray-600">{submitStatus}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
