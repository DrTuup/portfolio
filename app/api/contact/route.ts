import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get("origin");
    const allowedOrigins = process.env.ALLOWED_ORIGINS!.split(",") || [];
    if (process.env.NODE_ENV == "development") {
      allowedOrigins.push("http://localhost:3000");
    }

    if (!origin || !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { error: "Unauthorized request!" },
        { status: 403 }
      );
    }

    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }

    // Construct the message payload
    const discordPayload = {
      username: name,
      content: message,
      footer: {
        text: `You can mail back to: ${email}`,
        icon_url: "/memoji.png",
      },
    };

    // Send to Discord Webhook
    const webhookURL = process.env.DISCORD_WEBHOOK_URL!;
    const discordResponse = await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });

    if (!discordResponse.ok) {
      throw new Error("Failed to send message to Discord.");
    }

    return NextResponse.json({
      success: true,
      message: "Message sent to Discord!",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
