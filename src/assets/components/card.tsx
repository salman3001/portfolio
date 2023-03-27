interface IFeedCard {
  title: string;
  discription: string;
  img: string;
}

export default function Card(prop: IFeedCard) {
  return (
    <div className="flex flex-col h-full ">
      <div className="relative border-red-200 border-2 group w-full min-h-[150px]  my-5 shadow-md  sm:flex-row">
        {/* image container */}
        <div className="p-4 float-left aspect-square relative  clear-right  w-52 h-52 overflow-hidden">
          <div
            className={`aspect-square group-hover:scale-110 transition-transform bg-cover`}
            style={{
              backgroundImage: `url(${prop.img})`,
            }}
          >
            {/* image overlay */}
            <div className="absolute aspect-square w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-90 bg-gradient-to-t from-black/80 via-transparents to-transparent z-10"></div>
          </div>
        </div>
        <h1 className=" w-[75%] flex right-4 text-lg font-bold absolute shadow-md  p-2 top-4 text-start  bg-base-100">
          {prop.title}
        </h1>
        <p className="p-4 mt-12">{prop.discription}</p>
      </div>
      <div>
        <button>dj</button>
      </div>
    </div>
    // <Container>
    //   <ImageContainer>
    //     <ImageOverlay />
    //     <CardImage src={prop.img} />
    //   </ImageContainer>

    //   <Typography>
    //     <TitleContainer>
    //       <Title>{prop.title}</Title>
    //     </TitleContainer>
    //     <Discrition>{prop.discription}</Discrition>
    //   </Typography>
    // </Container>
  );
}

//Styled Components

const Container = (prop: any) => (
  <div
    {...prop}
    className={`w-full h-auto my-5 shadow-md rounded-md sm:flex-row group`}
  />
);

const ImageContainer = (prop: any) => <div {...prop} className={` `} />;

const CardImage = (prop: any) => (
  <img
    {...prop}
    className={` transition-transform duration-300 center group-hover:scale-110`}
  />
);

const ImageOverlay = (prop: any) => (
  <div
    {...prop}
    className={`absolute aspect-square w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-90 bg-gradient-to-t from-black/80 via-transparents to-transparent z-10
    `}
  />
);

const Typography = (prop: any) => (
  <div {...prop} className={`relative flex-1 p-4`} />
);

const TitleContainer = (prop: any) => (
  <div
    {...prop}
    className={`p-2 sm:relative shadow-sm sm:right-20 bg-light sm:w-[calc(100%+80px)] bg-base-100`}
  />
);

const Title = (prop: any) => (
  <a
    {...prop}
    className={`text-lg font-extrabold cursor-pointer hover:underline`}
  />
);

const Discrition = (prop: any) => <p {...prop} className={`py-2`} />;
