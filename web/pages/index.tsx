import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Products from "../components/Products"
import ProductDialog from '../components/ProductDialog'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Products />
      {/* <ProductDialog /> */}
      {/* <Introduction /> */}
    </Layout>
  )
}

export default Home
