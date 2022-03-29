import { Card, Container, Typography } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <Card>
      <Image
        src="/hero.jpg"
        alt="me"
        layout="responsive"
        width={500}
        height={120}
      ></Image>
    </Card>
  );
};

export default Hero;
