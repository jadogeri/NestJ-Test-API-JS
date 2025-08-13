import { NextResponse } from "next/server";

export function GET(_, response){
    const { id } = response.params;
    return NextResponse.json({ result : `get method with id ${id}`})
}

export function DELETE(_, response){
    const { id } = response.params;
    return NextResponse.json({ result : `delete method id ${id}`})
}

export function PUT(request, response){
    const { id } = response.params;
    return NextResponse.json({ result : `put method with id ${id}`})
}

export function PATCH(request, response){
    const { id } = response.params;
    return NextResponse.json({ result : `patch method id ${id}`})
}

