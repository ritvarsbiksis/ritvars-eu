import Image from 'next/image'
import Link from 'next/link'

import appStoreIconLvBlack from './images/app-store-icon-lv-black.svg'
import appStoreIconLvWhite from './images/app-store-icon-lv-white.svg'

interface LejupladeAppStoreProps {
  variant?: 'black' | 'white'
  width: number
  href?: string
}

const APP_STORE_ICON_ALT = 'Lejupielādēt no App Store'

export const LejupladeAppStore = ({
  width,
  href = '#',
  variant = 'black',
}: LejupladeAppStoreProps) => {
  return (
    <Link target="_blank" href={href}>
      <Image
        className="drop-shadow-lg"
        alt={APP_STORE_ICON_ALT}
        src={variant === 'black' ? appStoreIconLvBlack : appStoreIconLvWhite}
        width={width}
      />
    </Link>
  )
}
