const requestHeaders: HeadersInit = new Headers()
requestHeaders.set('Content-Type', 'application/json')
requestHeaders.set('X-Api-Key', process.env.API_NINJAS_KEY)

const PARAGRAPHS_COUNT = 6

const getData = async () => {
  const res = await fetch(
    `https://api.api-ninjas.com/v1/loremipsum?paragraphs=${PARAGRAPHS_COUNT}`,
    {
      method: 'GET',
      headers: requestHeaders,
    },
  )

  if (!res.ok) throw new Error('Failed to fetch data')

  return res.json()
}

export const LoremIpsum = async () => {
  const data = await getData()
  return <div>{data.text}</div>
}
