//const fs = require('fs');
//const dataPath = '@/app/util/users.json';

import users from "@/app/util/users.json"
import { NextResponse } from "next/server";

export function GET(_, response){
  try {
    console.log(users)
    return NextResponse.json({users})
  } catch (err) {
    console.error('Error reading users:', err);
    return [];
  }
  
}

export function DELETE(_, response){
    return NextResponse.json({ result : `delete method remove all}`})
}