import { prisma } from "@/app/scripts";
import {  NextRequest, NextResponse } from "next/server";

export async function POST(req : Request){
    const data = await req.json()
    if(data.name){
        await prisma.contact.create({
            data:{
                name:data.name,
                email:data.email,
                message:data.message
            }
        }).then(()=>{
            return NextResponse.json({data:"success"},{status:200});
        }).catch((err)=>{
            console.log(err);
            return NextResponse.json({data:"Error"},{status:500})
        })
    }else{
        return NextResponse.json({data:"No data provided"},{status:400})
    }
}