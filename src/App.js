import { Download, Features, SectionWrapper } from "./components"
import assets from "./assets"

function App() {
  return (
    <>
      <SectionWrapper
        title="Trade NFTs, Get Rewards"
        description="Buy NFTs (or sell 'em) to earn rewards.
      Explore the market to get started. Join 10+ million people using Marco NFT"
        showBtn
        mockupImage={assets.homeHero}
        banner="bannerr"
        textBlack
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of Marco NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImage={assets.homeCards}
        reverse
        textBlack
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Marco NFT App is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImage={assets.feature}
        reverse
        textBlack
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImage={assets.mockup}
        banner="banner02"
      />
      <Download />
    </>
  )
}

export default App
