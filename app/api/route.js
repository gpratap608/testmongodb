import connectMongoDB from "@/libs/mongodb";
import Data from "@/libs/data";
import { NextResponse } from "next/server";

export async function POST(request){
    const { name,age,email } = await request.json();
    await connectMongoDB();
    await Data.create({name,age,email})
    return NextResponse.json({message:"Data Created",},{status:201})
}