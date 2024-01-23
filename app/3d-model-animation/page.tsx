import {
  THREE_D_MODEL_PAGE_DESCRIPTION,
  THREE_D_MODEL_PAGE_TITLE,
} from './3d-model-animation.constants'
import { LoremIpsum } from './_components/lorem-ipsum/lorem-ipsum'
import { TextContainer } from './_components/text-container/text-container'

export const metadata = {
  title: THREE_D_MODEL_PAGE_TITLE,
  description: THREE_D_MODEL_PAGE_DESCRIPTION,
}

export default function Home() {
  return (
    <main className="bg-gray-900 flex flex-row min-h-screen relative items-start justify-between gap-x-6 ">
      <TextContainer>
        <LoremIpsum />
      </TextContainer>
    </main>
  )
}
