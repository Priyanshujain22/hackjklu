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
    validateField(id, value);
  };

  const validateField = (field: string, value: string) => {
    const fieldErrors: FormErrors = { ...errors };

    switch (field) {
      case "name":
        fieldErrors.name = value.trim() ? "" : "Name is required";
        break;
      case "email":
        fieldErrors.email = value.trim()
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? ""
            : "Please enter a valid email"
          : "Email is required";
        break;
      case "phone":
        fieldErrors.phone = value.trim()
          ? /^[0-9]{10}$/.test(value)
            ? ""
            : "Please enter a valid phone number (10 digits)"
          : "Phone number is required";
        break;
      case "designation":
        fieldErrors.designation = value ? "" : "Designation is required";
        break;
      case "organization":
        fieldErrors.organization = value.trim() ? "" : "Organization is required";
        break;
      case "theme":
        fieldErrors.theme = value ? "" : "Please select a theme";
        break;
      case "problem":
        fieldErrors.problem = value.trim() ? "" : "Problem description is required";
        break;
      case "description":
        fieldErrors.description = value.trim() ? "" : "Description is required";
        break;
      default:
        break;
    }

    setErrors(fieldErrors);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    Object.keys(formData).forEach((key) => {
      validateField(key, (formData as any)[key]);
    });

    const firstErrorMessage = Object.values(errors).find((error) => error);
    
    if (firstErrorMessage) {
      setFormStatus(firstErrorMessage);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
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
        setFormStatus("Form submitted!");
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
          {[
            { id: "name", type: "text", placeholder: "Your Name" },
            { id: "email", type: "email", placeholder: "your@mail.com" },
            { id: "phone", type: "tel", placeholder: "Your Number" },
            { id: "organization", type: "text", placeholder: "Your Organization" },
            { id: "problem", type: "text", placeholder: "Describe Your Problem", isFullRow: true },
          ].map(({ id, type, placeholder, isFullRow }) => (
            <LabelInputContainer className={isFullRow ? "md:col-span-2" : ""} key={id}>
              <Input
                id={id}
                value={(formData as any)[id]}
                onChange={handleChange}
                placeholder={placeholder}
                type={type}
                required
              />
            </LabelInputContainer>
          ))}

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
          </LabelInputContainer>

          <LabelInputContainer className="md:col-span-2">
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide a detailed description here"
              className="flex h-28 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring"
              required
            />
          </LabelInputContainer>

          <div className="md:col-span-2 mt-4">
            <button
              className={`block w-full text-white rounded-md h-10 font-medium ${
                formStatus === "Submitting..."
                  ? "bg-gray-500"
                  : "bg-gradient-to-br from-black to-neutral-600"
              }`}
              type="submit"
              disabled={formStatus === "Submitting..."}
            >
              {formStatus || "Submit"}
            </button>
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
}) => <div className={cn("flex flex-col space-y-2", className)}>{children}</div>;
