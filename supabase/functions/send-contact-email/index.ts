import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, message }: ContactRequest = await req.json();

    console.log("Otrzymano wiadomość od:", email);

    // Walidacja danych wejściowych
    if (!email || !message) {
      throw new Error("Email i wiadomość są wymagane");
    }

    if (email.length > 255 || message.length > 1000) {
      throw new Error("Email lub wiadomość są za długie");
    }

    // Wysłanie e-maila na adres psychologa
    const emailResponse = await resend.emails.send({
      from: "Formularz kontaktowy <onboarding@resend.dev>",
      to: ["psycholog.wojnarowska@gmail.com"],
      replyTo: email,
      subject: `Nowa wiadomość od ${email}`,
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Od:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Ta wiadomość została wysłana z formularza kontaktowego na Twojej stronie.</p>
      `,
    });

    console.log("Email wysłany pomyślnie:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Wiadomość została wysłana"
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Błąd w send-contact-email:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
