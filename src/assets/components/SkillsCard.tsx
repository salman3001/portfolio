interface ISkillCard {
  name: string;
  img: string;
}

const SkillsCard = (prop: ISkillCard) => {
  return (
    <div className="h-36 w-36 flex flex-col hover:scale-110 transition-transform items-center justify-between shadow-xl p-2 gap-2  ">
      <img src={prop.img} className="h-[70%] w-auto" alt="" />
      <p className="text-xl font-bold">{prop.name}</p>
    </div>
  );
};

export default SkillsCard;
