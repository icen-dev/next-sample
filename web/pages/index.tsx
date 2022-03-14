import type { NextPage } from 'next'
import Layout from "./../components/Layout"
import Hero from "./../components/Hero"
import Products from "./../components/Products"

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Products />
      {/* <Introduction /> */}
    </Layout>
  )
}

export default Home
