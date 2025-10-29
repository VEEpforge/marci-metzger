import { logo_images } from "@/assets"
import Image from "next/image"

const LogoSection = () => {
  
  return (
    <section className="max-w-screen h-auto flex items-center justify-center bg-background">
      <div className="grid grid-cols-4 w-full">
        { logo_images.map((logo, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <Image src={logo.src} alt={`Logo ${index + 1}`} height={100} width={100} />
          </div>
        ))
        }
      </div>
    </section>
  )
}

export default LogoSection