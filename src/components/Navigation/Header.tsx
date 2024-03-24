import Link from "next/link";
import React from "react";
import { FaApple } from "react-icons/fa";
import Container from "../ui/container";
import Button from "../ui/button";

const Header = () => {
  return (
    <>
      <header className=" bg-backgroundContrast z-20  text-white relative">
        <Container className="items-center flex h-[--header-row-height]">
          <Link
            href={"/"}
            className=" h-[--header-row-height] flex items-center px-6 -ml-6 text-xl"
          >
            <FaApple /> <span className=" sr-only">Back to homepage</span>
          </Link>
        </Container>
      </header>
      <div className=" sticky top-0 bg-backgroundContrast z-20  text-white">
        <Container className="flex items-center  h-[--header-row-height] justify-between ">
          <p className=" text-xl font-medium">Apple TV+</p>
          <Button size="small">Stream Now</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
