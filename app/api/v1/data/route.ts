import { NextResponse } from "next/server";



export async function GET() {
    // Ideally you should check the authorization here 
    // get necessary datas from body / params
    console.log("Hi from Backend ");

    return NextResponse.json({
        data : 1
    })
}


function generateDatas () {

}