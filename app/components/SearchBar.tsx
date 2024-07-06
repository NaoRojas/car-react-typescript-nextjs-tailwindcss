'use client'

import React from 'react'
import SearchManufacturer from './SearchManufacturer'

import { useState } from 'react'

function SearchBar() {
  const [manufacturer, setManufacturer] = useState('' as string)

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchQuery = formData.get('searchQuery') as string
    console.log(searchQuery)
  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar
