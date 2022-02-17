import Image from "next/image";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import banner1 from "../public/Banner1.jpg"
import banner2 from "../public/Banner2.jpg"
import banner3 from "../public/Banner3.jpg"
import banner4 from "../public/Banner4.jpg"

const Banner = () => {
  return (
    <div className="relative">
        <div className="absolute w-full h-12 lg:h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}> 
            <div><img loading="lazy" src="/Banner1.jpg" alt="" /></div>
            <div><img loading="lazy" src="/Banner2.jpg" alt="" /></div>
            <div><img loading="lazy" src="/Banner3.jpg" alt="" /></div>
            <div><img loading="lazy" src="/Banner4.jpg" alt="" /></div>
        </Carousel>

    </div>
  )
}

export default Banner