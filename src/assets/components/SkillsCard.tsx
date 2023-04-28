import { motion } from "framer-motion";

interface ISkillCard {
  name: string;
  img: string;
  key: number;
}

const SkillsCard = (prop: ISkillCard) => {
  return (
    <motion.div
      initial={{
        scale: 0.1,
      }}
      transition={{
        duration: 0.05,
      }}
      whileInView={{
        scale: 1,
      }}
      key={prop.key}
      className="h-36 w-36 flex flex-col hover:scale-110 transition-transform items-center justify-between  p-2 bg-transparent gap-2 bg-white shadow-xl"
    >
      <img src={prop.img} className="h-[70%] w-auto " alt="" />
      <p className="text-md ">{prop.name}</p>
    </motion.div>
  );
};

export default SkillsCard;
