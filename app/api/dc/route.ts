import { NextRequest, NextResponse } from 'next/server'

interface ReqData {
  event: 'decoder_output'
  data: Record<string, string | object>
}

export async function POST(request: NextRequest) {
  const data = (await request.json()) as ReqData

  // TODO: remove logs
  console.log('data :: ', data)
  console.log('data.data.result :: ', data.data.result)

  const msg = 'Data receive!'
  const json = {
    msg,
  }

  return NextResponse.json(json)
}
