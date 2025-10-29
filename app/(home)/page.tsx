import About from "@/components/sections/about"
import Hero from "@/components/sections/hero"
import LogoSection from "@/components/sections/logoCarousel"

const Page = () => {
  return (
    <main className="relative z-20">
      <Hero />
      <About />
      <LogoSection />
      <div className="h-screen"></div>
    </main>
  )
}

export default Page