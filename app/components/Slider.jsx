import Image from "next/image";

const URL_PREFIX = "https://raw.githubusercontent.com/imgwarehouse/portfolio/main/";
const LOGOS = [
  "LOGO_JS.png",
  "LOGO_TYPESCRIPT.png",
  "LOGO_REACT.png",
  "LOGO_NEXTJS.png",
  "LGO_REDUX.png",
  "LOGO_PRISMA.jpeg",
  "LOGO_MONGODB2.png",
  "LOGO_COCKROACH_LABS.png",
  "LOGO_HTML5.png",
  "LOGO_CSS3.png",
  "LOGO_NODEJS.png",
  "LOGO_AWS.jpeg",
  "LOGO_AWS-LAMBDA.png",
  "LOGO_AWS-SNS.png",
  "LOGO_AWS-EVENT-BRIDGE.jpeg",
  "LOGO_VSCODE.png",
  "LOGO_GITHUB.png",
  "LOGO_JAVA.png",
  "LOGO_PYTHON.png"
];
// "LOGO_C-SHARP.png",
// "LOGO_SWIFT.png",
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
          className="pointer-events-none"
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