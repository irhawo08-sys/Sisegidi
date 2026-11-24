"use server";

import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContactMessage(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in every field.",
    };
  }

  if (!isSupabaseConfigured()) {
    return {
      status: "error",
      message: "The contact service is temporarily unavailable. Please try again later.",
    };
  }

  const supabase = createClient();

  const { error } = await supabase
    .from("contact_messages")
    .insert({ name, email, message });

  if (error) {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }

  return {
    status: "success",
    message: "Message sent. Thank you for contacting us!",
  };
}
