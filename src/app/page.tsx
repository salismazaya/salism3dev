import { NavbarComponent } from "../components/NavbarComponent"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className="flex items-center min-h-[calc(100vh-5rem)] p-8">
        <div className="w-full">

          <Image src={"/salis.png"} alt="kasep" className="-translate-x-5" width={300} height={300} />
          <div>
            <p className="text-3xl text-primary ubuntu-bold">Salis Mazaya Miftah Malik</p>
            <p className="text-2xl text-secondary bitcount-grid-double">Radical Developer</p>
            <p className="mt-5 text-xl ubunt-light">Backend & Blockchain dev with 5+ years of experience. Passionate about building secure, efficient systems and exploring blockchain innovations.</p>

          </div>


          <div className="mt-10 flex gap-3">
            <a href="https://github.com/salismazaya" target="_blank">
              <Image src={"/github.png"} alt="github" width={50} height={50} className="p-1 bg-white rounded-full"></Image>
            </a>
            <a href="https://t.me/salismiftah" target="_blank">
              <Image src={"/telegram.png"} alt="github" width={50} height={50} className="p-1 bg-white rounded-full"></Image>
            </a>
          </div>
          {/* <p className="text-gray-400 mt-28 text-3xl font-bold underline mb-3">Projects</p> */}

          {/* <div className="bg-gray-600 rounded-md p-5 drop-shadow-sm">

            <div>
              <div className="flex gap-3 items-center">
                <Image src={"/warungswap.jpg"} alt="warungswap" height={50} width={50} className="rounded-full"></Image>
                <a href="https://t.me/warungswap_bot" className="text-accent text-xl hover:text-accent-content">Warungswap</a>
              </div>
              <p className="mt-5">WarungSwap merupakan bot yang menyediakan layanan transaksi Crypto dan PPOB dengan server yang aktif 24 jam Non-stop.</p>
            </div>

          </div> */}
        </div>
      </div>
    </>
  )
}
