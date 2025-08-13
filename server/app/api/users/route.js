import { fileURLToPath } from 'url';
import { dirname } from 'path';
import users from "@/app/util/users.json"
import { NextResponse } from "next/server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

i

export function GET(_, response){
  try {
    console.log("datapath == ", dataPath)
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
    console.log("dirname = ", __dirname)
    //fs.writeFileSync(dataPath, JSON.stringify(noUsers), 'utf8');
    return NextResponse.json({noUsers, status : 200})
  } catch (err) {
    console.error('Error reading users:', err);
    return [];
  }
}