import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";
// import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("prompt are required", { status: 400 });
    }

    // const freeTrial = await checkApiLimit();
    // if (!freeTrial) {
    //   return new NextResponse("Free trial has expired", { status: 403 });
    // }

    const output = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          fps: 10,
          model: "xl",
          width: 576,
          height: 576,
          prompt,
          batch_size: 1,
          num_frames: 20,
          init_weight: 0.4,
          guidance_scale: 17.5,
          num_inference_steps: 50,
        },
      }
    );
    // await increaseApiLimit();

    return NextResponse.json(output);
  } catch (error) {
    console.log("[Video_Error]", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
