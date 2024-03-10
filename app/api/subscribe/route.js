import { NextResponse } from "next/server";

export function GET(req, res) {
  const data = {id: 23432, name: "antor"}
  return NextResponse.json(data)
}

export async function POST(req, res){
  const data = await req.json()

  console.log(data)

  return NextResponse.json("getting data")

}
