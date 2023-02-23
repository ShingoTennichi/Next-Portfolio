import Image from "next/image";

export default function Skills() {
  const urlPrefix: string = "https://raw.githubusercontent.com/imgwarehouse/portfolio/main/"
  const logos: Array<string> = [
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
    "LOGO_C-SHARP.png",
    "LOGO_PYTHON.png",
    "LOGO_SWIFT.png",
  ];
  const imageSize = 75;
  const gapSize: number = 40;
  const quality: number = 1;
  const size:number = (imageSize + gapSize) * logos.length * 2;

  return (
    <div className=" overflow-hidden bg-gradient-to-t from-gray-800 to-slate-500 py-5">
      <div className={`grid grid-rows-1 grid-cols-42 gap-10 w-[${size}px] animate-slider`}>
        {logos.map((logo, index) => {
          return (
            <div key={index.toString()}>
              <Image
              className="pointer-events-none"
                alt={logo}
                src={urlPrefix + logo}
                height={imageSize}
                width={imageSize}
                quality={quality}
                priority={true}
              />
            </div>
          );
        })}
        {logos.map((logo, index) => {
          return (
            <div key={index.toString()}>
              <Image
                alt={logo}
                src={urlPrefix + logo}
                height={imageSize}
                width={imageSize}
                quality={quality}
                priority={true}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
