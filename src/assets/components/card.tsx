interface IFeedCard {
  title: string;
  discription: string;
  img: string;
}

export default function Card(prop: IFeedCard) {
  return (
    <div className="flex snap-center flex-col gap-4 rounded-t-md h-72 w-72 border-rose-700 shadow-rose-200 shadow-lg group overflow-hidden ">
      {/* image container */}
      <div className="relative h-1/3 w-auto">
        <div
          className={`group-hover:scale-110 h-full w-full transition-transform bg-cover`}
          style={{
            backgroundImage: `url(${prop.img})`,
          }}
        >
          {/* image overlay */}
          <div className="absolute w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-90 bg-gradient-to-t from-black/80 via-transparents to-transparent z-10"></div>
        </div>
      </div>
      <div className="grow flex flex-col justify-between">
        <h1 className="font-bold p-1">{prop.title}</h1>

        <p className="p-2 text-xs overflow-hidden grow ">{prop.discription}</p>

        <button className="btn-3 self-end m-2">Explore</button>
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
