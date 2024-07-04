import Image from "next/image";

const URL_PREFIX = "https://raw.githubusercontent.com/imgwarehouse/storage/main/images/logos/";
const LOGOS = [
  "LOGO_JS.png",
  "LOGO_TYPESCRIPT.png",
  "LOGO_JAVA.png",
  "LOGO_PYTHON.png",
  "LOGO_NODEJS.png",
  "LOGO_HTML5.png",
  "LOGO_CSS3.png",
  "LOGO_REACT.png",
  "LOGO_NEXTJS.png",
  "LOGO_REDUX.png",
  "LOGO_PRISMA.jpeg",
  "LOGO_MONGO-DB-2.png",
  "LOGO_COCKROACH-LABS.png",
  "LOGO_POSTGRESQL.png",
  "LOGO_MYSQL.png",
  "LOGO_SASS.png",
  "LOGO_TAILWIND-CSS.png",
  "LOGO_BOOTSTRAP.png",
  "LOGO_AWS.jpeg",
  "LOGO_AWS-LAMBDA.png",
  "LOGO_AWS-SNS.png",
  "LOGO_AWS-EVENT-BRIDGE.jpeg",
  "LOGO_VSCODE.png",
  "LOGO_GITHUB.png"
];

const IMAGE_SIZE = 75;
const QUALITY = 1;

export default function Slider() {
  return (
    <div className="slider">
      <div className="slider__inner">
        {displayLogos()}
        {displayLogos()}
      </div>
    </div>
  );
}

function displayLogos() {
  return LOGOS.map((logo, index) => {
    return (
      <div key={index.toString()}>
        <Image
          className="slider__pointer-events"
          alt={logo}
          src={URL_PREFIX + logo}
          height={IMAGE_SIZE}
          width={IMAGE_SIZE}
          quality={QUALITY}
          priority={true}
        />
      </div>
    );
  })
}