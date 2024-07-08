import { CarProps, FilterProps } from "@/types"

export async function fetchCars(
  filters: FilterProps
) {
  const headers = {
    'x-rapidapi-key': '512abd6e6bmshde9e8639c369ed4p1aaa29jsnf054160c5c1e',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filters.manufacturer}&year=${filters.year}&model=${filters.model}&limit=${filters.limit}&fuel_type=${filters.fuel}`, {
    headers: headers,
  });

  const result = await response.json()
  debugger
  console.log(result)
  return result
}


export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')

  url.searchParams.append('customer', 'hrjava')
  url.searchParams.append('make', car.make)
  url.searchParams.append('modelFamily', car.model.split(" ")[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${car.year}`)

  return `${url}`
}


export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)

  searchParams.set(type, value)

  return `${window.location.pathname}?${searchParams.toString()}`
}