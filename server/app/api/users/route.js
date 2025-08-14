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
    return NextResponse.json(users, {status : 200})
  } catch (err) {
    console.error('Error reading users:', err);
    return [];
  }
  
}

export function DELETE(_, response){
  try {
    console.log(users)
    const noUsers = [];
    fs.writeFileSync(dataPath, JSON.stringify(noUsers), 'utf8');
    return NextResponse.json(noUsers)
  } catch (err) {
    console.error('Error reading users:', err);
    return [];
  }
}

export async function POST(request, _){
  try {
    const {username, age, email, isActive } = await request.json();
    console.log(username, age, isActive, email)
    if(!username){
      return NextResponse.json({message: "username field is required"},{status: 400})
    }
    if(!age){
      return NextResponse.json({message: "age field is required"},{status: 400})
    }
    if(!email){
      return NextResponse.json({message: "email field is required"},{status: 400})
    }
    const activeState = isActive == undefined? true : !isActive? false : true;
    console.log("actvie state : ", activeState)
    if(users.length == 0){
      const newUser = {username, email, age, isActive: activeState,id : 1}
      users.push(newUser)
      fs.writeFileSync(dataPath, JSON.stringify(users, null, 2), 'utf8');
      return NextResponse.json({...newUser})
    }else{
      let foundUsers =
       users.filter((user)=>{ 
        return user.username.toUpperCase().trim() == username.toUpperCase().trim() ||
                             user.email.toUpperCase().trim() == email.toUpperCase().trim() });
      if(foundUsers.length > 0){
        return NextResponse.json({message: "username or email is already registered"},{status: 400})
      }
      const objectWithLargestId = users.reduce((prev, current) => {
        return (prev.id > current.id) ? prev : current;
      })
      let maxID = objectWithLargestId.id + 1;
      console.log("largest object with id : ",objectWithLargestId)
      const newUser = {username, email, age, isActive: activeState,id : maxID}
      users.push(newUser)
      fs.writeFileSync(dataPath, JSON.stringify(users, null, 2), 'utf8');  
          return NextResponse.json({...newUser},{status: 201})  
    }
  } catch (err) {
    console.error('Error reading users:', err);
    return NextResponse.json({message:"something went wrong with request"},{status: 500})  
  }
}

