import type { NextPage } from 'next'
import Layout from "./../components/Layout"
import Hero from "./../components/Hero"

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      {/* <Introduction /> */}
    </Layout>
  )
}

export default Home
