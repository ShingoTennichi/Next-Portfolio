import CardImage from "./CardImage";
import Image from "next/image";

const PROJECT_URL_PREFIX = "https://raw.githubusercontent.com/imgwarehouse/storage/main/images/projects";
const PREVIEW_URL_PREFIX = "https://raw.githubusercontent.com/imgwarehouse/storage/main/videos/project-previews";

export default function Card({ data }) {

  return (
    <div className="card">
      <CardImage previewUrl={PREVIEW_URL_PREFIX + data.previewUrl ?? '/videos/home-bg.mp4'}>
        <Image
          className="card__image"
          alt="card__image"
          src={data.imgUrl ? PROJECT_URL_PREFIX + data.imgUrl : "/images/futuristic-city.jpg"}
          placeholder="blur"
          blurDataURL={data.imgUrl ? data.imgUrl : "/images/futuristic-city.jpg"}
          fill={true}
          quality={40}
        />
      </CardImage>
      <div className="card__content">
        <h4 className="card__content__title">{data.title}</h4>
        <p className="card__content__description">{data.description}</p>
        <p className="card__content__description">{data.technologies}</p>
        {data.websiteUrl !== "" &&
          <div>
            <a href={data.websiteUrl}>
              <u>Visit Website</u>
            </a>
          </div>
        }
        {data.githubUrl !== "" &&
          <div>
            <a href={data.githubUrl}>
              <u>Visit Repository</u>
            </a>
          </div>
        }
      </div>
    </div>
  )
}