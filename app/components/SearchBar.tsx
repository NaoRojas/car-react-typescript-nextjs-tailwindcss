'use client'

import React from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface SearchButtonProps {
  otherClasses: string
}

const SearchButton = ({ otherClasses }: SearchButtonProps) => {
  return (
    <button className={`-ml-3 z-10 ${otherClasses}`} type="submit">
      <Image
        src="/magnifying-glass.svg"
        alt="Search"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  )
}

function SearchBar() {
  const [manufacturer, setManufacturer] = useState('' as string)
  const [model, setModel] = useState('' as string)
  const router = useRouter()

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!manufacturer || !model) {
      return alert('Please enter a manufacturer and model')
    }
    updateSearchParams(
      model.toLocaleLowerCase(),
      manufacturer.toLocaleLowerCase()
    )
  }

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    if (model) {
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }
    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('model')
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathName, { scroll: false })
  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
        <div className="searchbar__item">
          <Image
            src="/model-icon.png"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px]"
            alt="car"
          />
          <input
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Model"
            className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
      </div>
    </form>
  )
}

export default SearchBar
