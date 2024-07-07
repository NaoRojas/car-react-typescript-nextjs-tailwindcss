'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import { calculateCarRent } from '../utils'
import { CustomButton } from '.'
import CarDetails from './CarDeatils'

interface CarcardProps {
  car: CarProps
}

function CarCard({ car }: CarcardProps) {
  const carRent = calculateCarRent(car.city_mpg, car.year)
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className="car-card group">
      <div className="card-card__content">
        <h2 className="car-card__content-title">
          {car.make} {car.model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>
      <div className="relative w-full h-40 h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt={`${car.make} ${car.model}`}
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col items-center gap-2 justify-center">
            <Image
              src="/steering-wheel.svg"
              alt="sterng-wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {car.transmission == 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center">
            <Image src="/tire.svg" alt="sterng-wheel" width={20} height={20} />
            <p className="text-[14px]">{car.drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center">
            <Image src="/gas.svg" alt="sterng-wheel" width={20} height={20} />
            <p className="text-[14px]">{car.city_mpg}</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyle="w-full py-[16px] rounded-full bg-primary-blue text-white leading-[17px] font-bold"
            handleClick={() => setIsOpened(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpened={isOpened}
        close={() => setIsOpened(false)}
        car={car}
      />
    </div>
  )
}

export default CarCard
