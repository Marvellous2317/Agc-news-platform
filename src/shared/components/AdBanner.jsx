import Images from "../../assets/images";

export default function AdBanner({className='', imageSrc}) {
  return (
    <div className={ `bg-black px-4 py-3 w-full ${className}`}>
        <div className={`relative overflow-hidden rounded-sm  h-42.5 flex items-center justify-center `}>
          <img
            src={imageSrc}
            alt="Person reviewing expenses on a laptop"
            className="absolute py-3 h-full w-2/3 object-contain opacity-90"
          />
      
      </div>
    </div>
  );
}


 