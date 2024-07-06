'use client'

import { SearchManufacturerProps } from '@/types'
import React from 'react'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Transition,
} from '@headlessui/react'
import { useState, Fragment } from 'react'
import Image from 'next/image'
import { manufacturers } from '../constants/constants'
function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const [query, setQuery] = useState('' as string)

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((manufacturer) =>
          manufacturer
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="realtive w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="car-logo"
              className="ml-4"
            ></Image>
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Tesla"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(event) => {
              console.log(event.target.value)
              setQuery(event.target.value)
              console.log(filteredManufacturers)
            }}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions>
              {filteredManufacturers.map((manufacturer) => (
                <ComboboxOption
                  key={manufacturer}
                  value={manufacturer}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {manufacturer}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-teal-600'
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
