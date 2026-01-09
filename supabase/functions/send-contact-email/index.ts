import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log(`Received contact form submission from ${name} (${email})`);

    // Send notification email to admin
    const adminEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Orachi Tech <onboarding@resend.dev>",
        to: ["fareed@orachitech.com"],
        subject: subject || `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #14b8a6;">New Contact Form Submission</h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #666; font-size: 12px;">This message was sent from the Orachi Tech website contact form.</p>
          </div>
        `,
      }),
    });

    let adminData;
    if (!adminEmailRes.ok) {
      const error = await adminEmailRes.text();
      console.error("Failed to send admin email:", error);
      return new Response(
        JSON.stringify({ error: `Failed to send admin email: ${error}` }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    } else {
      adminData = await adminEmailRes.json();
      console.log("Admin notification email sent successfully", adminData);
    }

    // Send confirmation email to user
    const userEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Orachi Tech <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting Orachi Tech!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0;">Orachi Tech</h1>
            </div>
            <div style="padding: 30px; background-color: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
              <h2 style="color: #1f2937;">Thank you for reaching out, ${name}!</h2>
              <p style="color: #4b5563; line-height: 1.6;">
                We have received your message and our team will review it shortly. 
                We typically respond within 24-48 business hours.
              </p>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #6b7280; font-size: 14px;"><strong>Your message:</strong></p>
                <p style="color: #374151; white-space: pre-wrap; margin-top: 10px;">${message}</p>
              </div>
              <p style="color: #4b5563; line-height: 1.6;">
                In the meantime, feel free to explore our services or reach out via WhatsApp for immediate assistance.
              </p>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px; margin: 0;">Best regards,</p>
                <p style="color: #1f2937; font-weight: 600; margin: 5px 0;">The Orachi Tech Team</p>
                <p style="color: #6b7280; font-size: 14px; margin: 0;">📞 +92 323 359 3780</p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    if (!userEmailRes.ok) {
      const error = await userEmailRes.text();
      console.error("Failed to send user email:", error);
    } else {
      console.log("User confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully",
        data: adminData
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
