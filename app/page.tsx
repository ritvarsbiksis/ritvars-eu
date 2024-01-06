import { PirmaSkanaApp } from './_components/pirma-skana-app/pirma-skana-app'

export const metadata = {
  title: `Ritvars Bikšis`,
  description: 'Front-end developer',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24 box-border">
      <div className="flex items-left font-light select-none">
        <PirmaSkanaApp />
      </div>
    </main>
  )
}
