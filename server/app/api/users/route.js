import { fileURLToPath } from 'url';
import { dirname } from 'path';
import users from "@/app/util/users.json"
import { NextResponse } from "next/server";
import fs from "fs"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataPath = __dirname + "\\..\\..\\util\\users.json"


export function GET(_, response){
  try {
    return NextResponse.json({users})
  } catch (err) {
    console.error('Error reading users:', err);
    return [];
  }
  
}

export function DELETE(_, response){
  try {
    console.log(users)
    const noUsers = [];
    console.log("datapath = ", dataPath)

    fs.writeFileSync(dataPath, JSON.stringify(noUsers), 'utf8');
    return NextResponse.json(noUsers)
  } catch (err) {
    console.error('Error reading users:', err);
    return [];
  }
}