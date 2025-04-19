"use server";
import { ContactSchema } from "@/validations/contact";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

type ActionState = {
  success: boolean;
  errors: {
    name?: string[];
    email?: string[];
  };
  serverError?: string;
};

export async function SubmitContactForm(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  //バリデーション
  const validationResult = ContactSchema.safeParse({ name, email });
  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    console.log("サーバー側でエラー" + errors);
    return {
      success: false,
      errors: {
        name: errors.name || [],
        email: errors.email || [],
      },
    };
  }

  //DB登録
  //メールアドレスが存在しているかどうか
  const existingRecord = await prisma.contact.findUnique({
    where: { email: email },
  });
  if (existingRecord) {
    return {
      success: false,
      errors: {
        name: [],
        email: ["このメールアドレスはすでに登録されています"],
      },
    };
  }
  await prisma.contact.create({
    data: { name, email },
  });

  console.log("送信されたデータ", { name, email });
  redirect("/contacts/complete");
}
