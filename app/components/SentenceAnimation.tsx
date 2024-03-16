"use client"
import React from 'react'

import SpanText from './SpanText';


interface SentenceAnimationProps {
  phrase: string;
  className?: string;
}

const SentenceAnimation: React.FC<SentenceAnimationProps> = ({ phrase, className }) => {
  const _phrase = phrase.split("");

  return (
    <div className={className}>
      {_phrase.map((letter, i) => {
        return (
          <SpanText key={i} children={letter} />
        )
      })}
    </div>
  )
}

export default SentenceAnimation;