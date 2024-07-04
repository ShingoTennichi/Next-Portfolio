import CardImage from "./CardImage";
import CardContents from "./CardContents";
import Image from "next/image";

const PROJECT_URL_PREFIX = "https://raw.githubusercontent.com/imgwarehouse/storage/main/images/projects";
const PREVIEW_URL_PREFIX = "https://raw.githubusercontent.com/imgwarehouse/storage/main/videos/project-previews";

export default function Card({ data }) {

  return (
    <div className="card">
      <CardImage previewUrl={data.previewUrl ? PREVIEW_URL_PREFIX + data.previewUrl : ''}>
        <Image
          className="card__image"
          alt="card__image"
          src={data.imgUrl ? PROJECT_URL_PREFIX + data.imgUrl : "/images/futuristic-city.jpg"}
          placeholder="blur"
          blurDataURL={data.imgUrl ? PROJECT_URL_PREFIX + data.imgUrl : "/images/futuristic-city.jpg"}
          fill={true}
          quality={40}
        />
      </CardImage>
      <CardContents data={data} />
    </div>
  )
}