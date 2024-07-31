import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("ShoeSafari"); // Replace with your database name

    const data = await db
      .collection("products") // Replace with your collection name
      .find({})
      .toArray();

    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Unable to fetch data" },
      { status: 500 }
    );
  }
}
