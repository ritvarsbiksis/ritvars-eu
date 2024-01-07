import { LejupladeAppStore } from '@/components/lejuplade-app-store/lejuplade-app-store'
import { PirmaSkanaIcon } from '@/components/pirma-skana-icon/pirma-skana-icon'
import { Fragment } from 'react'

import { BackButton } from '@/components/back-button/back-button'
import { PIRMA_SKANA_TITLE } from '@/constants'

import {
  PIRMA_SKANA_APP_STORE_LINK,
  PIRMA_SKANA_CONTENT,
  PIRMA_SKANA_DESCRIPTION,
} from './pirma-skana.constants'

export const metadata = {
  title: PIRMA_SKANA_TITLE,
  description: PIRMA_SKANA_DESCRIPTION,
}

export default function PirmaSkanaPage() {
  return (
    <main className="flex min-h-screen flex-col items-left p-16 pt-12 box-content flex-wrap">
      <BackButton />
      <div className="flex gap-12 flex-wrap ">
        <div className="min-w-fit flex flex-col gap-4">
          <PirmaSkanaIcon />
          <LejupladeAppStore width={180} href={PIRMA_SKANA_APP_STORE_LINK} />
        </div>
        <div style={{ maxWidth: 600 }} className="min-w-44">
          <h1 className="text-3xl font-medium ">{PIRMA_SKANA_TITLE}</h1>
          <div className="text-xl font-light flex-col mt-10 flex gap-6">
            {PIRMA_SKANA_CONTENT.map(({ title, paragraphs }, key) => (
              <Fragment key={key}>
                {title && <h2 className="text-xl font-medium pt-8">{title}</h2>}
                {paragraphs.map((text, key) => (
                  <p key={key}>{text}</p>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
