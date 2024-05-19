import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = (await request.json()) as { result: Record<string, string> }

  // TODO: remove logs
  console.log('data :: ', data)
  console.log('data.result :: ', data.result)

  const msg = 'Data receive!'
  const json = {
    msg,
  }

  return NextResponse.json(json)
}
