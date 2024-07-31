import { NextResponse } from "next/server";
import clientPromise from "../../../lib/Connectodb";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("ShoeSafari");
    const body = await req.json();

    // Validate the request body
    if (!Array.isArray(body) || body.length === 0) {
      return NextResponse.json(
        { error: "Invalid data format" },
        { status: 400 }
      );
    }

    const result = await db.collection("products").insertMany();
    return NextResponse.json(result);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Unable to add data" }, { status: 500 });
  }
}
