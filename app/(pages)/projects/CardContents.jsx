import { FaGithubAlt, FaGlobe } from "react-icons/fa"

export default function CardContents({ data }) {
  return (
    <div className="card__content">
      <div className="card__content__box">
        <h4 className="card__content__title">{data.title}</h4>
        <p className="card__content__description">{data.description}</p>
      </div>
      <div className="card__content__box">
        <h4>Technologies</h4>
        <ul className="card__content__list">
          {data.technologies.map((tech) => <li className="card__content__item">{tech}</li>)}
        </ul>
      </div>
      <div className="card__content__links">
        {data.websiteUrl !== "" &&
          <a className="card__content__link" href={data.websiteUrl}>
            <span>Visit Website</span>
            <FaGlobe size={24} data-icon="web" />
          </a>
        }
        {data.githubUrl !== "" &&
          <a className="card__content__link" href={data.githubUrl}>
            <span>Visit Repository</span>
            <FaGithubAlt size={24} data-icon="github" />
          </a>
        }
      </div>
    </div>
  )
}