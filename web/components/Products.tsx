import { useState } from "react"
import { Card, Container, Typography, Box, CardActionArea, CardMedia, CardContent, Chip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import Image from "next/image"
import Headline from "./Headline"
import { Widgets } from "@mui/icons-material"


interface DialogProps {
  isDialogOpened: boolean
  productData: any
}

interface ItemProps {
  src: string
  title: string
  price: number
  parts: number
}

const ProductDialog = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
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

const Product = () => {
  const title = "Productions"
  const subtitle = " Choose a Customizable Shoe Style. (10+)"
  const itemList = [
    { src: '/product-sample.jpg', title: 'Hole Cut', price: 42000, parts: 2 },
    { src: '/product-sample.jpg', title: 'Straight Tip', price: 58000, parts: 3 },
    { src: '/product-sample.jpg', title: 'Loafer', price: 23000, parts: 2 },
    { src: '/product-sample.jpg', title: 'Double Mounk', price: 59000, parts: 5 },
    { src: '/product-sample.jpg', title: 'Hole Cut', price: 42000, parts: 3 },
    { src: '/product-sample.jpg', title: 'Straight Tip', price: 58000, parts: 3 },
    { src: '/product-sample.jpg', title: 'Loafer', price: 23000, parts: 4 },
    { src: '/product-sample.jpg', title: 'Double Mounk', price: 59000, parts: 2 },
  ]
  const isDialogOpened = false

  return (
    <Container sx={{ p: 3 }}>
      <ProductDialog />
      <Headline title={title} subtitle={subtitle} />
      <Box>
        {itemList.map((v) => {
          <Item
            src={v.src}
            title={v.title}
            price={v.price}
            parts={v.parts} />
        })}
      </Box>
    </Container>
  );
};

export default Product
