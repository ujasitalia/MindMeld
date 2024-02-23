import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("resolution is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    if (!freeTrial) {
      return new NextResponse("Free trial has expired", { status: 403 });
    }

    const image = await openai.images.generate({
      model: "dall-e-2",
      prompt,
      size: resolution,
      n: parseInt(amount, 10),
    });

    await increaseApiLimit();

    return NextResponse.json(image.data);
  } catch (error) {
    console.log("[Image_Error]", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
