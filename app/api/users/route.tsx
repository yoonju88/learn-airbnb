import {fetchUsers, saveUser} from '@/utils/actions'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req : NextRequest) => {

   console.log(req.url)
   console.log(req.nextUrl.searchParams.get('id'))
    
    const users = await fetchUsers()
    return Response.json({users})
    //return NextResponse.redirect(new URL ('/', req.url))
    //new URL('/', req.url)은 현재 요청 URL을 기준으로 새로운 URL을 생성합니다. 
    //이 코드에서 '/'는 루트 경로를 나타냅니다. 따라서 클라이언트는 요청을 / 경로로 리디렉션됩니다.
}

// NextRequest: 클라이언트에서 서버로 들어오는 요청을 표현하는 객체입니다. 이 객체는 요청의 URL, 헤더, 본문 등을 포함하고 있습니다.
// NextResponse: 서버가 클라이언트에 응답할 때 사용하는 객체입니다. 다양한 방식으로 응답을 반환할 수 있습니다 (예: JSON, HTML, 또는 리디렉션).

export const POST = async (req:Request) => {
    const user = await req.json()
    const newUser = {...user, id:Date.now().toString()}
    await saveUser(newUser)
    return Response.json({msg:'user created'})
}
// Next.js에서 POST 요청을 처리하는 서버 측 API Route로, 클라이언트로부터 사용자의 데이터를 받아 새로운 사용자로 저장하는 기능을 수행

// 클라이언트로부터 사용자 데이터를 수신하여,
// 	•	고유한 ID를 가진 새로운 사용자 객체를 생성하고,
// 	•	이를 서버에 저장한 후,
// 	•	사용자 생성이 성공적으로 이루어졌음을 클라이언트에 알리는 것입니다.

// 즉, 회원가입이나 데이터베이스에 사용자 정보 추가와 같은 기능을 구현하기 위한 서버 측 로직입니다.