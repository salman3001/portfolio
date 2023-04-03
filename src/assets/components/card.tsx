interface IFeedCard {
  title: string;
  discription: string;
  img: string;
  link: string;
}

export default function Card(prop: IFeedCard) {
  return (
    <div className="flex snap-center flex-col gap-4 rounded-t-md h-80 w-80 border-rose-700  shadow-xl group overflow-hidden ">
      {/* image container */}
      <div className="relative h-[40%] w-auto">
        <div
          className={`group-hover:scale-110 h-full w-full transition-transform bg-no-repeat bg-center bg-cover`}
          style={{
            backgroundImage: `url(${prop.img})`,
          }}
        >
          {/* image overlay */}
          <div className="absolute w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-90 bg-gradient-to-t from-black/80 via-transparents to-transparent z-10"></div>
        </div>
      </div>
      <div className="grow p-2 flex flex-col justify-between">
        <h1 className="font-bold p-1">{prop.title}</h1>
        <p className="p-2 text-xs overflow-hidden grow ">{prop.discription}</p>
        <a href={prop.link} target="_blank" className="btn-3 self-end m-2">
          Explore
        </a>
      </div>
    </div>
  );
}
