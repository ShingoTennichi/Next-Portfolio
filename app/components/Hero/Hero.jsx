import HeroBgVideo from "./HeroBgVideo";
import MovingTitle from "./MovingTitle";
export default function Hero({ children, videoUrl }) {

  return (
    <div className="hero">
      <HeroBgVideo videoUrl={videoUrl} />
      <MovingTitle>
        {children}
      </MovingTitle>
    </div>
  )
}

