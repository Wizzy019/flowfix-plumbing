import { useState } from "react";
import FadeUp from "../animations/FadeUp";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <FadeUp>
      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-border bg-surface p-5 text-startd"
      >
        <h3 className="mb-6 text-xl font-bold text-text">Send Us a Message</h3>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-text">
              Full Name <span className="text-primary">*</span>
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="h-11 rounded-md border border-border bg-transparent px-3 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-text">
              Phone Number <span className="text-primary">*</span>
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="h-11 rounded-md border border-border bg-transparent px-3 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="email" className="text-sm font-medium text-text">
              Email Address <span className="text-primary">*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="h-11 rounded-md border border-border bg-transparent px-3 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
            />
          </div>

          {/* Service */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="service" className="text-sm font-medium text-text">
              Service Needed <span className="text-primary">*</span>
            </label>

            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="h-11 rounded-md border border-border bg-surface-2 px-3 text-sm text-text outline-none focus:border-primary"
            >
              <option value="" disabled>
                Select a service
              </option>

              <option value="general-plumbing">General Plumbing</option>

              <option value="drain-cleaning">Drain Cleaning</option>

              <option value="water-heater">Water Heater Services</option>

              <option value="toilet-repair">
                Toilet Repair & Installation
              </option>

              <option value="leak-detection">Leak Detection</option>
              <option value="sump-pump">Sump Pump Services</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="message" className="text-sm font-medium text-text">
              Message <span className="text-primary">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your plumbing issue or request..."
              rows={5}
              required
              className="resize-none rounded-md border border-border bg-transparent p-3 text-sm text-text outline-none placeholder:text-muted focus:border-primary"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 h-11 w-full rounded-md bg-primary px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Send Request
        </button>

        <p className="mt-3 text-center text-xs text-muted">
          Your information is safe and secure. We respect your privacy.
        </p>
      </form>
    </FadeUp>
  );
}
