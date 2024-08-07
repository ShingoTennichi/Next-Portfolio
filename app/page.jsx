import Link from "next/link";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider";

const VIDEO_URL = "https://raw.githubusercontent.com/imgwarehouse/storage/main/videos/background/chip.mp4";

export default function Home() {
  return (
    <div>
      <Hero videoUrl={VIDEO_URL}>
        <div>
          <h2>Shingo Tennichi</h2>
          <h4>Web/Software Developer</h4>
        </div>
      </Hero>
      <Slider />
      <div className="projects">
        <div className="link">
          <Link href="/projects">
            <span className="link--text">
              Project Gallery
            </span>
          </Link>
          <span className="border-animation-h-top"></span>
          <span className="border-animation-h-bottom"></span>
          <span className="border-animation-v-l"></span>
          <span className="border-animation-v-r"></span>
        </div>
      </div>
    </div>
  )
}
