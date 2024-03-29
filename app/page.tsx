'use client'
import React, {FC, useState} from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header"
import Hero1 from "./components/Route/Hero";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
      title="EduPulse Education"
      description="EduPulse is a platform for learning."
      keywords="WEBD, Programming, DSA"
      />
      <Header 
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
        />

      <Hero1 />
    </div>
  )
};

export default Page;