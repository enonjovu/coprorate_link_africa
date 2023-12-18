import LatestNews from './components/LatestNews'
import Ads from './components/Advertisment'
// import Hero from './components/Hero'
import Videos from './components/Videos'


export default async function Home() {
  return (
      <main id="content">

          {/* hero big grid */}
          {/* <Hero/> */}

          {/* advertisement */}
          <Ads/>

          <LatestNews/>


          {/* Videos*/}
          <Videos/>
      </main>
  )
}
