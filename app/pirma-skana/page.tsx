import Link from 'next/link'

import { ArrowBack } from '@/components/icons/arrow-back/arrow-back'
import { PirmaSkanaIcon } from '@/components/pirma-skana-icon/pirma-skana-icon'
import { LejupladeAppStore } from '@/components/lejuplade-app-store/lejuplade-app-store'

export const metadata = {
  title: `Pirmā skaņa`,
  description: 'Informācija par aplikāciju "Pirmā skaņa"',
}

export default function PirmaSkanaPage() {
  return (
    <main className="flex min-h-screen flex-col items-left p-16 pt-12 box-content flex-wrap">
      <Link className="mb-12 select-none" href={'/'}>
        <div className="flex font-medium ">
          <ArrowBack className="mr-2" />
          {`Atpakaļ `}
        </div>
      </Link>
      <div className="flex gap-12 flex-wrap ">
        <div className="min-w-fit flex flex-col gap-4">
          <PirmaSkanaIcon />
          <LejupladeAppStore
            width={180}
            href="https://apps.apple.com/us/app/pirm%C4%81-ska%C5%86a/id6475353129"
          />
        </div>
        <div style={{ maxWidth: 600 }} className="min-w-44">
          <h1 className="text-3xl font-medium ">Pirmā skaņa</h1>
          <div className="text-xl font-light flex-col mt-10 flex gap-6">
            <p>
              “Pirmās skaņas” mehānika ir balstīta uz klasisko vienādo attēlu savienošanas spēli,
              bet attēlu vietā ir jāmeklē vienādās skaņas (pirmos burtus) ar kādām objekts tiek
              izteikts. Šādā veidā bērnam tiek trenēta atmiņa, priekšstats par saikni starp dažādām
              lietām, lasīšana. Aplikācija ir veidota izmantojot gan objektus, kurus bērni spēj
              atpazīt, gan svešākus, ar ko bērni var sastapties, tādējādi motivējot iemācīties
              jaunas lietas un mudinot sadarbību ar vecākiem vai brāļiem un māsām.
            </p>
            <p>
              Aplikācijas mērķis ir piedāvāt drošu, iedvesmojošu un pilnveidojošu digitālo vidi, kur
              bērns var attīstīt dažādu objektu atpazīšanu, izrunu un iztēli. Mēs ticam, ka katrā
              bērnā ir pētnieka gars, un mūsu aplikācija ir veidota tā, lai palīdzētu šo potenciālu
              attīstīt.
            </p>

            <h2 className="text-xl font-medium pt-8">Kontakti</h2>
            <p>pirmaskana@gmail.com</p>
          </div>
        </div>
      </div>
    </main>
  )
}
