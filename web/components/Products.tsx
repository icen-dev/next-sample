import { useState } from "react";
import {
  Card,
  Container,
  Typography,
  Box,
  CardActionArea,
  CardMedia,
  CardContent,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  ButtonBase,
} from "@mui/material";
import Image from "next/image";
import Headline from "./Headline";
import { Widgets } from "@mui/icons-material";

interface DialogProps {
  open: boolean;
  handleClose: any;
  data: DataProps;
}

interface DataProps {
  src: string;
  title: string;
  price: number;
  parts: number;
}

interface ItemProps {
  idx: number;
  data: DataProps;
  handleOpen: Function;
}

const ProductDialog = (props: DialogProps) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.data.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Disagree</Button>
        <Button onClick={props.handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Item = (props: ItemProps) => {
  return (
    <Card
      sx={{ m: 2 }}
      onClick={() => {
        props.handleOpen(props.idx);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={props.data.src}
          alt="test"
        ></CardMedia>

        <CardContent>
          <Typography component="div" sx={{ fontWeight: "bold" }}>
            {props.data.title}
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            ¥{props.data.price} -
          </Typography>
        </CardContent>

        <Chip
          icon={<Widgets />}
          sx={{ position: "absolute", px: 1, top: 10, right: 10 }}
          size="small"
          label={`${props.data.parts} Parts`}
          color="primary"
          variant="outlined"
        />
      </CardActionArea>
    </Card>
  );
};

const Product = () => {
  const title = "Productions";
  const subtitle = " Choose a Customizable Shoe Style. (10+)";
  const itemList = [
    { src: "/product-sample.jpg", title: "Hole Cut", price: 42000, parts: 2 },
    {
      src: "/product-sample.jpg",
      title: "Straight Tip",
      price: 58000,
      parts: 3,
    },
    { src: "/product-sample.jpg", title: "Loafer", price: 23000, parts: 2 },
    {
      src: "/product-sample.jpg",
      title: "Double Mounk",
      price: 59000,
      parts: 5,
    },
    { src: "/product-sample.jpg", title: "Hole Cut", price: 42000, parts: 3 },
    {
      src: "/product-sample.jpg",
      title: "Straight Tip",
      price: 58000,
      parts: 3,
    },
    { src: "/product-sample.jpg", title: "Loafer", price: 23000, parts: 4 },
    {
      src: "/product-sample.jpg",
      title: "Double Mounk",
      price: 59000,
      parts: 2,
    },
  ];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const handleOpen = (idx: number) => {
    setSelected(idx);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container sx={{ p: 3 }}>
      <ProductDialog open={open} handleClose={handleClose} data={itemList[selected]} />
      <Headline title={title} subtitle={subtitle} />
      <Box
        sx={{ display: "grid", gap: 1, gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" } }}
      >
        {itemList.map((v, i) => {
          return <Item idx={i} data={v} handleOpen={handleOpen} />;
        })}
      </Box>
    </Container>
  );
};

export default Product;
