"use server";
import { redirect } from "next/navigation";

export async function SubmitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  console.log("送信されたデータ", { name, email });
  redirect("/contacts/complete");
}
