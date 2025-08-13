import { NextResponse } from "next/server";

export function GET(_, response){
    return NextResponse.json({ result : `get method fetch all`})
}

export function DELETE(_, response){
    return NextResponse.json({ result : `delete method remove all}`})
}