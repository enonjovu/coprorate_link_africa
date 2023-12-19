import LatestNews from './components/LatestNews'
import Hero from './components/Hero'
import Videos from './components/Videos'


export default async function Home() {
  return (
      <main id="content">
          <Hero/>
          <LatestNews/>
          <Videos/>
      </main>
  )
}
