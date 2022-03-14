import { Card, Container, Typography, Box, CardActionArea, CardMedia, CardContent, Chip } from "@mui/material";
import Image from "next/image"
import Headline from "./Headline"
import { Widgets } from "@mui/icons-material"

interface ItemProps {
  src: string
  title: string
  price: number
  parts: number
}

const Item = (props: ItemProps) => {
  return (
    <Card sx={{ m: 2 }}>
      <CardActionArea>
        <CardMedia component="img" height="180" image={props.src} alt="test"></CardMedia>

        <CardContent>
          <Typography component="div" sx={{ fontWeight: "bold" }}>{props.title}</Typography>
          <Typography sx={{ fontWeight: "bold" }}>¥{props.price} -</Typography>
        </CardContent>

        <Chip icon={<Widgets />} sx={{ position: "absolute", px: 1, top: 10, right: 10 }} size="small" label={`${props.parts} Parts`} color="primary" variant="outlined" />
      </CardActionArea>
    </Card>
  )
}

const Hero = () => {
  const title = "Productions"
  const subtitle = " Choose a Customizable Shoe Style. (10+)"
  const items = [
    { src: '/product-sample.jpg', title: 'Hole Cut', price: 42000, parts: 2 },
    { src: '/product-sample.jpg', title: 'Straight Tip', price: 58000, parts: 3 },
    { src: '/product-sample.jpg', title: 'Loafer', price: 23000, parts: 2 },
    { src: '/product-sample.jpg', title: 'Double Mounk', price: 59000, parts: 5 },
    { src: '/product-sample.jpg', title: 'Hole Cut', price: 42000, parts: 3 },
    { src: '/product-sample.jpg', title: 'Straight Tip', price: 58000, parts: 3 },
    { src: '/product-sample.jpg', title: 'Loafer', price: 23000, parts: 4 },
    { src: '/product-sample.jpg', title: 'Double Mounk', price: 59000, parts: 2 },
  ]
  return (
    <Container sx={{ p: 3 }}>
      <Headline title={title} subtitle={subtitle} />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {items.map((v, i) => {
          return (
            <Item src={v.src} title={v.title} price={v.price} parts={v.parts} />
          )
        })}
      </Box>
    </Container>
  );
};

export default Hero;
