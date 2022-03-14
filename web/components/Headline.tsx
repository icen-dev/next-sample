import { Container, Typography } from "@mui/material"

interface HeadlineProps {
  title: string
  subtitle: string
}

const Headline = (props: HeadlineProps) => {
  return (
    <Container sx={{ mb: 3 }}>
      <Typography sx={{ typography: 'h5', textAlign: 'center', fontWeight: "bold" }}>
        {props.title}
      </Typography>
      <Typography sx={{ typography: 'subtitle', textAlign: 'center', }}>
        {props.subtitle}
      </Typography>
    </Container>
  )
}

export default Headline