'use client'

import { CarProps } from '@/types'
import React from 'react'
import Image from 'next/image'
import { Fragment } from 'react'

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'

interface CarDetailsProps {
  isOpened: boolean
  car: CarProps
  close: () => void
}

function CarDetails({ isOpened, car, close }: CarDetailsProps) {
  return (
    <Transition appear show={isOpened} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={close}>
        <TransitionChild
          as={Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-full p-6 max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                <button
                  className="absolute top-2 right-2 w-fit p-2 z-10 bg-primary-blue-100 rounded-full"
                  type="button"
                  onClick={close}
                >
                  <Image src="/close.svg" alt="close" width={20} height={20} />
                </button>
                <div className="flex-1 flex flex-col gap-3">
                  <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                    <Image
                      src="/hero.png"
                      alt={`${car.make} ${car.model}`}
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src="/hero.png"
                        alt={`${car.make} ${car.model}`}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src="/hero.png"
                        alt={`${car.make} ${car.model}`}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src="/hero.png"
                        alt={`${car.make} ${car.model}`}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-semibold text-xl capitalize">
                    {car.make}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        key={key.split('_').join(' ')}
                        className="flex justify-between gap-5 w-full text-right"
                      >
                        <h4 className="text-gray capitalize">{key}</h4>
                        <p className="text-black-100 font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default CarDetails
