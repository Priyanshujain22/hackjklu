import React, { useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import themes from "../data/themes.json";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  designation?: string;
  organization?: string;
  theme?: string;
  problem?: string;
  description?: string;
}

const sanitizeInput = (input: string) => input.trim();

export default function SignupFormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    organization: "",
    theme: "",
    problem: "",
    description: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name || formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone || formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10 digits)";
    }

    if (!formData.designation) {
      newErrors.designation = "Designation is required";
    }

    if (!formData.organization || formData.organization.trim() === "") {
      newErrors.organization = "Organization is required";
    }

    if (!formData.theme) {
      newErrors.theme = "Please select a theme";
    }

    if (!formData.problem || formData.problem.trim() === "") {
      newErrors.problem = "Problem description is required";
    }

    if (!formData.description || formData.description.trim() === "") {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormStatus("Please fill in all required fields correctly");
      return;
    }

    setFormStatus("Submitting...");

    const sanitizedFormData = {
      ...formData,
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      designation: sanitizeInput(formData.designation),
      organization: sanitizeInput(formData.organization),
      theme: sanitizeInput(formData.theme),
      problem: sanitizeInput(formData.problem),
      description: sanitizeInput(formData.description),
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedFormData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus("Form submitted successfully!");
      } else {
        setFormStatus(data.message || "Error submitting the form");
      }
    } catch {
      setFormStatus("Network error. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-gray-900 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <Image src="/hackjklu-logo.png" alt="Hack JKLU v4" width={200} height={200} className="mb-4" />
        <h2 className="font-bold text-xl text-neutral-900 mb-4 text-center">Welcome to Hack JKLU v4</h2>
        <p className="text-neutral-800 text-sm max-w-md mx-auto text-center">
          Provide your problem statements and solutions to be part of the Hackathon. Let&apos;s innovate and collaborate together!
        </p>
      </div>

      <div className="md:w-1/2 text-primary">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Input
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              type="text"
              required
            />
            {errors.name && <span className="text-red-600 text-xs">{errors.name}</span>}
          </LabelInputContainer>

          <LabelInputContainer>
            <select
              id="designation"
              value={formData.designation}
              onChange={handleChange}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm"
              required
            >
              <option value="" disabled>
                Select Designation
              </option>
              <option value="student">Student</option>
              <option value="software-engineer">Software Engineer</option>
              <option value="other">Other</option>
            </select>
            {errors.designation && <span className="text-red-600 text-xs">{errors.designation}</span>}
          </LabelInputContainer>

          <LabelInputContainer>
            <Input
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@mail.com"
              type="email"
              required
            />
            {errors.email && <span className="text-red-600 text-xs">{errors.email}</span>}
          </LabelInputContainer>

          <LabelInputContainer>
            <Input
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Number"
              type="tel"
              required
            />
            {errors.phone && <span className="text-red-600 text-xs">{errors.phone}</span>}
          </LabelInputContainer>

          <LabelInputContainer>
            <Input
              id="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Your Organization"
              type="text"
              required
            />
            {errors.organization && <span className="text-red-600 text-xs">{errors.organization}</span>}
          </LabelInputContainer>

          <LabelInputContainer>
            <select
              id="theme"
              value={formData.theme}
              onChange={handleChange}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm"
              required
            >
              <option value="" disabled>
                Select Theme
              </option>
              {themes.map((theme, index) => (
                <option key={index} value={theme.title.toLowerCase()}>
                  {theme.title}
                </option>
              ))}
            </select>
            {errors.theme && <span className="text-red-600 text-xs">{errors.theme}</span>}
          </LabelInputContainer>

          <LabelInputContainer className="md:col-span-2">
            <Input
              id="problem"
              value={formData.problem}
              onChange={handleChange}
              placeholder="Describe Your Problem"
              type="text"
              required
            />
            {errors.problem && <span className="text-red-600 text-xs">{errors.problem}</span>}
          </LabelInputContainer>

          <LabelInputContainer className="md:col-span-2">
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide a detailed description here"
              className="flex h-28 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
              required
            />
            {errors.description && <span className="text-red-600 text-xs">{errors.description}</span>}
          </LabelInputContainer>

          <div className="md:col-span-2 mt-4">
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium"
              type="submit"
            >
              Submit
            </button>
            {formStatus && <p>{formStatus}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2", className)}>{children}</div>
);
