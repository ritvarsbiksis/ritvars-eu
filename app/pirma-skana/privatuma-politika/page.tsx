import {
  ATJAUNOTA_TEXT,
  PRIVATUMA_POLITIKA_CONTENT,
  PRIVATUMA_POLITIKA_PAGE_DESCRIPTION,
  PRIVATUMA_POLITIKA_PAGE_TITLE,
  PRIVATUMA_POLITIKA_TITLE,
} from './privatuma-politika.constants'

export const metadata = {
  title: PRIVATUMA_POLITIKA_PAGE_TITLE,
  description: PRIVATUMA_POLITIKA_PAGE_DESCRIPTION,
}

export default function PrivatumaPolitikaPage() {
  return (
    <main className="flex min-h-screen flex-col items-left p-16 pt-12 box-content flex-wrap">
      <div style={{ maxWidth: 1000 }} className="min-w-44">
        <h1 className="text-3xl font-medium ">{PRIVATUMA_POLITIKA_TITLE}</h1>
        <div className="mt-4">{ATJAUNOTA_TEXT}</div>
        <div className="text-xl font-light flex-col mt-10 flex gap-6">
          {PRIVATUMA_POLITIKA_CONTENT.map(({ title, paragraphs }, key) => (
            <section key={key}>
              {title && <h2 className="text-xl font-medium pt-8">{title}</h2>}
              {paragraphs.map((text, key) => (
                <p key={key}>{text}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
