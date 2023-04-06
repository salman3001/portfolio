interface ISkillCard {
  name: string;
  img: string;
  key: number;
}

const SkillsCard = (prop: ISkillCard) => {
  return (
    <div
      key={prop.key}
      className="h-36 w-36 flex flex-col hover:scale-110 transition-transform items-center justify-between  p-2 bg-transparent gap-2 "
    >
      <img src={prop.img} className="h-[70%] w-auto " alt="" />
      <p className="text-md ">{prop.name}</p>
    </div>
  );
};

export default SkillsCard;