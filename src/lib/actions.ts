"use server"

export type FormState = {
  success: boolean
  message: string
}

export async function submitContact(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || name.trim().length < 2) {
    return { success: false, message: "Please enter your name." }
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." }
  }
  if (!message || message.trim().length < 10) {
    return {
      success: false,
      message: "Please write a message (at least 10 characters).",
    }
  }

  // TODO: Integrate email sending service (Resend / SendGrid / Nodemailer)
  // For now, we log the submission and return success
  console.log("[Contact]", { name, email, message: message.slice(0, 100) })

  return { success: true, message: "Thanks! We will get back to you soon." }
}

export async function submitProduct(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const productName = formData.get("productName") as string
  const link = formData.get("link") as string
  const whyCool = formData.get("whyCool") as string

  if (!productName || productName.trim().length < 2) {
    return { success: false, message: "Please enter the product name." }
  }
  if (!link || !/^https?:\/\/.+/.test(link)) {
    return {
      success: false,
      message: "Please enter a valid product link (starting with https://).",
    }
  }
  if (!whyCool || whyCool.trim().length < 20) {
    return {
      success: false,
      message:
        "Please tell us why it's cool (at least 20 characters).",
    }
  }

  // TODO: Integrate email sending service
  console.log("[Submit]", {
    productName,
    link,
    whyCool: whyCool.slice(0, 100),
  })

  return {
    success: true,
    message: "Thanks for your submission! We'll check it out.",
  }
}
