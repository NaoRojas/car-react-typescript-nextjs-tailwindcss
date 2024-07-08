import { SearchBar, CustomFilter, Hero, CarCard, ShowMore } from './components'
import { fuels, yearsOfProduction } from './constants/constants'
import { fetchCars } from './utils'

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  })
  console.log(allCars, 'data')

  const isDataEmpty = allCars.length === 0

  return (
    <main className="overflow-hidden">
      <Hero></Hero>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-1xl font-extrabold">Car Catalogue</h1>
          <p> Explore you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar></SearchBar>
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
            ></CustomFilter>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard key={car.id} car={car}></CarCard>
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNextPage={(searchParams.limit || 10) > allCars.length}
            ></ShowMore>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black font-bold text-xl">
              No cars found for this search
            </h2>
          </div>
        )}
      </div>
    </main>
  )
}
