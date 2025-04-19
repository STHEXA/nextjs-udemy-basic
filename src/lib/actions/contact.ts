"use server";
import { ContactSchema } from "@/validations/contact";
import { redirect } from "next/navigation";

export async function SubmitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  //バリデーション
  const validationResult = ContactSchema.safeParse({ name, email });
  if (!validationResult.success) {
    const errors = validationResult.error.flatten();
    console.log("サーバー側でエラー" + errors);
    return {};
  }
  console.log("送信されたデータ", { name, email });
  redirect("/contacts/complete");
}
