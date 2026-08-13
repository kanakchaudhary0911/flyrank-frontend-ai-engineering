import { NextResponse } from "next/server";
export async function GET(){return NextResponse.json({status:"healthy",service:"Kanak Developer Portfolio",timestamp:new Date().toISOString()});}
