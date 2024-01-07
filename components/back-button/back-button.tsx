import Link from 'next/link'

import { ArrowBack } from '../icons/arrow-back/arrow-back'
import { BACK_BUTTON_LABEL, BACK_BUTTON_LINK } from './back-button.constants'

export const BackButton = () => (
  <Link className="mb-12 select-none" href={BACK_BUTTON_LINK}>
    <div className="flex font-medium ">
      <ArrowBack className="mr-2" />
      {BACK_BUTTON_LABEL}
    </div>
  </Link>
)
