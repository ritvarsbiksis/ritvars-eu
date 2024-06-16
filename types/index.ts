import { MongoClient } from 'mongodb'

export type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>

export interface PageContent {
  title?: string
  paragraphs: string[]
}

declare global {
  const _mongoClientPromise: Promise<MongoClient>
}
