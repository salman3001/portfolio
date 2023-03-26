interface IProjectCard {
  title: string;
  img: string;
  description: string;
}

const ProjestCard = (prop: IProjectCard) => {
  return (
    <div className="card w-96 bg-base-100 font-extrabold shadow-xl">
      <figure>
        <img src={prop.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{prop.title}</h2>
        <p>{prop.description}</p>
        <div className="card-actions justify-end">
          <button className="btn-3">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default ProjestCard;
