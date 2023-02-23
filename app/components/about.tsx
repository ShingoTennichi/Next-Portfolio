import about from '../../JSON/about.json';

export default function About() {
  return(
    <ul className=" grid grid-cols-1 gap-4">
      {
        about.map((el, index) => {
          return(
            <li key={index.toString()} className="md:max-w-2xl w-full list-none px-6 py-8 bg-[var(--black-light)] m-auto">
              <p className=' text-[10px] md:text-xs mb-2 md:mb-3 leading-[15px]'>{el.time}</p>
              {el.title.map((El, id)=> {
                return(
                  <p key={id.toString()} className=' text-base md:text-xl'>{El}</p>
                )
              })}
              {el.licenses.map((El, id)=> {
                return(
                  <p key={id.toString()} className=' text-xs md:text-sm'>{El}</p>
                )
              })}
            </li>
          )
        })
      }
    </ul>
  )
}