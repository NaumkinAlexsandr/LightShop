import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  createTheme,
} from "@material-ui/core";

const GoodsItem = (props) => {
  const { name, price, poster, setOrder } = props;

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#757575",
      },
    },
  });

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: "100%" }}>
        <CardMedia
          image={poster}
          component="img"
          alt={name}
          title={name}
          sx={{ height: 300 }}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">Price: {price} $.</Typography>
        </CardContent>
        <CardActions>
          <Button
            theme={darkTheme}
            variant="text"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
