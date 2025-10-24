import About from "@/components/sections/about"
import Hero from "@/components/sections/hero"

const Page = () => {
  return (
    <main className="relative z-20">
      <Hero />
      <About />
      <div className="h-screen"></div>
    </main>
  )
}

export default Page