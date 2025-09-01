import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { password } = await request.json()
  
  // 環境変数からパスワードを取得（.env.localに設定）
  const correctPassword = process.env.SECRET_DOC_PASSWORD || 'default-password'
  
  if (password === correctPassword) {
    return NextResponse.json({ authenticated: true })
  }
  
  return NextResponse.json({ authenticated: false }, { status: 401 })
}