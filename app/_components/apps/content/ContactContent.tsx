"use client";

import { useContactForm } from "../contact/useContactForm";

const SOCIALS = [
  { label: "GitHub", icon: "🐙", url: "https://github.com" },
  { label: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
  { label: "Twitter", icon: "🐦", url: "https://twitter.com" },
];

export default function ContactContent() {
  const { fields, formState, errors, setField, handleSubmit, reset } =
    useContactForm();

  const inputClass = (field: keyof typeof fields) =>
    `w-full bg-white/5 border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:bg-white/[0.08] ${errors[field] ? "border-red-500/60 focus:border-red-400" : "border-white/10 focus:border-[#0078d4]"}`;

  if (formState === "success") {
    return (
      <div className="h-full flex flex-col items-center justify-center gap-4 text-white/80 p-8">
        <span className="text-5xl">✅</span>
        <h2 className="text-xl font-semibold text-white">Message sent!</h2>
        <p className="text-sm text-white/55 text-center max-w-xs">
          Thanks for reaching out — Bryan will get back to you soon.
        </p>
        <button
          onClick={reset}
          className="mt-2 text-sm text-[#60cdff] hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 font-sans">
      <div className="max-w-3xl flex flex-col gap-6">
        <div>
          <h1 className="text-xl font-semibold text-white">Get in Touch</h1>
          <p className="text-sm text-white/45 mt-1">
            I&apos;d love to hear from you. Send me a message.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          {SOCIALS.map(({ label, icon, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              <span>{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>

        <div className="h-px bg-white/10" />

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="contact-name"
              className="text-xs font-medium text-white/50"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              value={fields.name}
              onChange={setField("name")}
              className={inputClass("name")}
            />
            {errors.name && (
              <p className="text-xs text-red-400">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="contact-email"
              className="text-xs font-medium text-white/50"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
              value={fields.email}
              onChange={setField("email")}
              className={inputClass("email")}
            />
            {errors.email && (
              <p className="text-xs text-red-400">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="contact-message"
              className="text-xs font-medium text-white/50"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="What's on your mind?"
              value={fields.message}
              onChange={setField("message")}
              className={`${inputClass("message")} resize-none`}
            />
            {errors.message && (
              <p className="text-xs text-red-400">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={formState === "submitting"}
            className="mt-1 h-10 rounded-lg bg-[#0078d4] hover:bg-[#1084d8] active:bg-[#006cbf] disabled:opacity-60 disabled:cursor-not-allowed text-sm font-semibold text-white transition-colors flex items-center justify-center gap-2"
          >
            {formState === "submitting" ? (
              <>
                <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="white"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Sending…
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
