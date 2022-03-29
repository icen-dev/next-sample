import type { NextPage } from 'next'
import AppLayout from "../components/AppLayout"
import TheHero from "../components/TheHero"
import TheProducts from "../components/TheProducts"

const Home: NextPage = () => {
  return (
    <AppLayout>
      <TheHero />
      <TheProducts />
    </AppLayout>
  )
}

export default Home
