import Image from 'next/image'
import React from 'react'

import pirmaSkanaIcon from './images/pirma-skana-icon.png'

export const PirmaSkanaIcon = () => (
  <Image
    className="mb-5 drop-shadow-lg"
    src={pirmaSkanaIcon}
    width={180}
    height={180}
    alt="Pirmā skaņa"
  />
)
