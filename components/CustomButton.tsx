"use client"
import { CustomButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const CustomButton = ({title, containerStyles, handleClick, btnType, rightIcon, textStyles}: CustomButtonProps) => {
  return (
      <button
          type={btnType || 'button'}
          onClick={ handleClick}
          disabled={ false}
          className={`custom-btn ${containerStyles} `}>
          <span className={`flex-1 ${textStyles}`}>
          {title}
      </span>
      {rightIcon && (
      <div className="relative w-6 h-6 ">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
      </button>
      
  )
}

export default CustomButton
