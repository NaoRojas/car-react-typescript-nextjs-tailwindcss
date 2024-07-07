import { SearchBar, CustomFilter, Hero, CarCard } from './components'
import { fetchCars } from './utils'

export default async function Home() {
  const allCars = await fetchCars()
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
            <CustomFilter title="fuel"></CustomFilter>
            <CustomFilter title="year"></CustomFilter>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard key={car.id} car={car}></CarCard>
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black font-bold text-xl"></h2>
          </div>
        )}
      </div>
    </main>
  )
}
