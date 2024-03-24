import React from "react";
import Button from "./button";

type Props = {
  subHead: string;
  heading: string;
  desc: string;
  btnText: string;
};

const Offer = ({ subHead, heading, desc, btnText }: Props) => {
  return (
    <div className=" space-y-11 pb-40">
      <div className=" space-y-4">
        <h2 className=" text-xl font-semibold tracking-wide">{subHead}</h2>
        <h1 className=" text-4xl font-bold tracking-wide">{heading}</h1>
        <p className=" text-fadeWhite text-[17px]">{desc}</p>
      </div>
      <Button>{btnText}</Button>
    </div>
  );
};

export default Offer;
