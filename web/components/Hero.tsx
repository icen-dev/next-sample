import { Card, Container, Typography } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <Container sx={{ border: 2, p: 3 }}>
      <Card>
        <Image
          src="/hero.jpg"
          alt="me"
          layout="responsive"
          width={500}
          height={200}
        ></Image>
      </Card>
    </Container>
  );
};

export default Hero;
