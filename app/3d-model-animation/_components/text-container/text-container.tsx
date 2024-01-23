'use client'

import { animated, useScroll } from '@react-spring/web'
import { PropsWithChildren, useRef } from 'react'

import { Lego } from '../lego-model/components/lego/lego'
import { LegoModel } from '../lego-model/lego-model'

export const TextContainer = ({ children }: PropsWithChildren) => {
  const textBlockRef = useRef<HTMLDivElement>(null!)

  const { scrollYProgress } = useScroll({
    container: textBlockRef,
    default: {
      immediate: true,
    },
  })

  return (
    <div ref={textBlockRef} className=" text-3xl text-gray-800 p-12 max-h-screen overflow-x-scroll">
      <animated.div
        className="fixed top-0 left-0"
        style={{ top: scrollYProgress.to(val => `${val * 100}vh`) }}
      >
        <LegoModel>
          <Lego />
        </LegoModel>
      </animated.div>
      {children}
    </div>
  )
}
