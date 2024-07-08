'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { CustomButton } from '.'
import { updateSearchParams } from '../utils'

interface ShowMoreProps {
  pageNumber: number
  isNextPage: boolean
}

function ShowMore({ pageNumber, isNextPage }: ShowMoreProps) {
  const router = useRouter()
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10
    const newPathName = updateSearchParams('limit', `${newLimit}`)
    router.push(newPathName, { scroll: false })
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNextPage && (
        <CustomButton
          title="Show More"
          containerStyle="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore
