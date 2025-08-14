import { fileURLToPath } from 'url';
import { dirname } from 'path';
import users from "@/app/util/users.json"
import { NextResponse } from "next/server";
import fs from "fs"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataPath = __dirname + "\\..\\..\\..\\util\\users.json"

export function GET(_, response){
    const { id } = response.params;
    const foundUser = users.filter(user => user.id == id);
    if(foundUser.length > 0){
        return NextResponse.json(foundUser[0])
    }
    return NextResponse.json({ message : 'User not found with ID : ' + id})
}

export function DELETE(_, response){
    const { id } = response.params;
    const initialLength = users.length;
    const newUsersList = users.filter(user => user.id !== id);
    if(newUsersList.length < initialLength){
        fs.writeFileSync(dataPath, JSON.stringify(newUsersList), 'utf8');
        return NextResponse.json({message: 'User deleted with ID:' + id})
    }else{
        return NextResponse.json({ message : `User not found for deletion.`})

    }
}

export function PUT(request, response){
    const { id } = response.params;
    return NextResponse.json({ result : `put method with id ${id}`})
}

export function PATCH(request, response){
    const { id } = response.params;
    return NextResponse.json({ result : `patch method id ${id}`})
}

