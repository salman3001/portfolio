import { Dispatch } from "react";

interface IRecaptcha {
  num1: number;
  num2: number;
  captcha: number;
  setCaptcha: Dispatch<React.SetStateAction<number>>;
}

const ReCaptcha = (prop: IRecaptcha) => {
  return (
    <div className="flex gap-1 justify-end items-center">
      <span>{prop.num1}</span>
      <span>+</span>
      <span>{prop.num2}</span>
      <span>=</span>
      <input
        className="input input-bordered w-24 inline"
        type="number"
        name="captcha"
        value={prop.captcha}
        onChange={(e) => {
          prop.setCaptcha(e.target.value);
        }}
      />
    </div>
  );
};

export default ReCaptcha;
