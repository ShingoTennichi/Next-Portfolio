import Link from "next/link";
import projects from "../../JSON/projects.json";

export default function Projects() {
  return (
    <ul className=" grid grid-cols-1 gap-4">
      {projects.map((project, index) => {
        return (
          <li key={index.toString()} className="list-none px-6 py-8 bg-[var(--black-light)] md:max-w-2xl w-full md:m-auto lg:hover:scale-110 duration-300">
            <Link href={project.url} passHref={true}>
              <p className="text-sm md:text-base pl-2 border-l-2 border-[var(--white)]">
                {project.technologies.join(" / ")}
              </p>
              <h4 className="text-xl md:text-2xl text-center py-4">{project.title}</h4>
              <p className="text-sm md:text-base">{project.description}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
