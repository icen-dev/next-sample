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
  Grid,
  Divider,
} from "@mui/material";
import Image from "next/image";
import BaseHeadline from "./BaseHeadline";
import { Widgets } from "@mui/icons-material";

interface DialogProps {
  open: boolean;
  handleClose: any;
  data: DataProps;
}

interface DataProps {
  src: string;
  title: string;
  discription: string;
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
      maxWidth={'md'}
    >
      <Grid container spacing={0} >
        <Grid xs={12} sm={6} item>
          <DialogContent sx={{ p: 0 }}>
            <Image
              src={props.data.src}
              alt="me"
              layout="responsive"
              width={500}
              height={500}
            />
          </DialogContent>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mx: -0.1 }} />
        <Grid xs={12} sm={6} item>
          <DialogContent sx={{ py: 1 }}>
            <DialogTitle sx={{ p: 0, fontWeight: "bold" }}>
              {props.data.title}
            </DialogTitle>
          </DialogContent>
          <Divider flexItem />
          <DialogContent sx={{ py: 1 }}>
            <DialogContentText id="alert-dialog-description">
              {props.data.discription}
            </DialogContentText>
          </DialogContent>
          <Divider flexItem />
          <DialogContent sx={{ py: 1 }}>
            <DialogContentText sx={{ textAlign: "right", fontWeight: "bold" }}>
              ¥ {props.data.price} -
            </DialogContentText>
          </DialogContent>
          <Divider flexItem />
          <DialogActions sx={{ py: 2 }}>
            <Button onClick={props.handleClose} variant="contained" size="large">
              Simulation Start
            </Button>
          </DialogActions>
        </Grid>
      </Grid>

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
        />

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
    {
      src: "/product-sample.jpg",
      title: "Hole Cut",
      discription: "1Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.Let Google help apps determine location. ",
      price: 42000,
      parts: 2
    },
    {
      src: "/product-sample.jpg",
      title: "Straight Tip",
      discription: "1Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.Let Google help apps determine location. ",
      price: 58000,
      parts: 3,
    },
    {
      src: "/product-sample.jpg",
      title: "Hole Cut",
      discription: "1Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.Let Google help apps determine location. ",
      price: 42000,
      parts: 2
    },
    {
      src: "/product-sample.jpg",
      title: "Double Mounk",
      discription: "2Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.Let Google help apps determine location. ",
      price: 59000,
      parts: 5,
    },
    {
      src: "/product-sample.jpg",
      title: "Hole Cut",
      discription: "1Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.Let Google help apps determine location. ",
      price: 42000,
      parts: 2
    },
    {
      src: "/product-sample.jpg",
      title: "Straight Tip",
      discription: "3Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.Let Google help apps determine location. ",
      price: 58000,
      parts: 3,
    },
    {
      src: "/product-sample.jpg",
      title: "Hole Cut",
      discription: "1Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.Let Google help apps determine location. ",
      price: 42000,
      parts: 2
    },
    {
      src: "/product-sample.jpg",
      title: "Double Mounk",
      discription: "4Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.Let Google help apps determine location. ",
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
    <Container maxWidth={'lg'} sx={{ p: 3 }}>
      <ProductDialog open={open} handleClose={handleClose} data={itemList[selected]} />
      <BaseHeadline title={title} subtitle={subtitle} />
      <Box
        sx={{ display: "grid", gap: 1, gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" } }}
      >
        {itemList.map((v, i) => {
          return <Item idx={i} data={v} handleOpen={handleOpen} />;
        })}
      </Box>
    </Container>
  );
};

export default Product;
