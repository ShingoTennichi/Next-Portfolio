
import Card from "./Card";
import Hero from "../../components/Hero/Hero";
import IntersectionObserver from "../../components/IntersectionObserver";
import ProjectSearchBar from "./ProjectSearchBar";
import projectData from "../../../data/projects.json";

const VIDEO_URL = "https://raw.githubusercontent.com/imgwarehouse/storage/main/videos/background/ripple-effect.mp4";

export default function Projects() {

  return (
    <div className="overflow-hidden" >
      <Hero videoUrl={VIDEO_URL}>
        <div>
          <h2>Project Gallery</h2>
        </div>
      </Hero>
      <ProjectSearchBar />
      <section className="projects">
        <IntersectionObserver threshold={0.3} unobserve={true} selector=".card">
          {projectData.map((data, key) => <Card key={key} data={data} previewUrl={"/videos/home-bg.mp4"} />)}
        </IntersectionObserver>
      </section>
    </div>
  )
}