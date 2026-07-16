import { NextRequest } from "next/server";
import { z } from "zod";

/* ──────────────────────────────────────────────────────────────
   Contact Form API Route
   POST /api/contact
   ────────────────────────────────────────────────────────────── */

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  projectType: z.string().min(1),
  budget: z.string().min(1),
  timeline: z.string().min(1),
  description: z.string().min(20),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // In production, you would:
    // 1. Send an email via Resend/SendGrid
    // 2. Store in a database
    // 3. Send a Slack/Discord notification
    // 4. Trigger an auto-response email to the client

    // For now, log the submission
    console.log("📩 New contact form submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      projectType: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
      description: data.description.substring(0, 100) + "...",
      timestamp: new Date().toISOString(),
    });

    return Response.json(
      {
        success: true,
        message: "Thank you for your inquiry! We'll be in touch within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
