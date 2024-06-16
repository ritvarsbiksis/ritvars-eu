import clientPromise from '@/lib/mongodb'
import { Device, ReceivedData } from '@/models/device'
import { ObjectId, Timestamp } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

interface DatacackeData {
  device: string
  device_name: string
  device_serial: string
  device_location: string
  device_tags: string[]
  product_id: string
  product_slug: string
  log: null | string
  execution_time: number
  result: {
    field: string
    value: string | number
  }[]
}

interface ReqData {
  event: 'decoder_output'
  data: DatacackeData
}

const { DB_NAME, DEVICES_COLLECTION_NAME, RECEIVED_DATA_COLLECTION_NAME } = process.env

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as ReqData
    const client = await clientPromise
    const db = client.db(DB_NAME)

    let deviceId: ObjectId = null

    const savedDevice = await db
      .collection<Device>(DEVICES_COLLECTION_NAME)
      .findOne({ device: data.data.device })

    const {
      device,
      device_location,
      device_name,
      device_serial,
      device_tags,
      product_id,
      product_slug,
    } = data.data

    if (savedDevice) deviceId = savedDevice._id
    else
      await db
        .collection<Device>(DEVICES_COLLECTION_NAME)
        .insertOne({
          device,
          device_location,
          device_name,
          device_serial,
          device_tags,
          product_id,
          product_slug,
        })
        .then(({ insertedId }) => (deviceId = insertedId))

    const receivedData: ReceivedData = {
      deviceId,
      timestamp: new Timestamp(null),
    }

    data.data.result.map(({ field, value }) => {
      Object.assign(receivedData, { [field]: value })
    })

    const storedData = await db
      .collection<ReceivedData>(RECEIVED_DATA_COLLECTION_NAME)
      .insertOne(receivedData)

    console.log(`The ReceivedData saved with ID :: ${storedData.insertedId}`)

    return new Response(null, { status: 204 })
  } catch (e) {
    console.error(e)
    return NextResponse.error()
  }
}
