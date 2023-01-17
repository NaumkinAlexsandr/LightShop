import {
  createTheme,
  AppBar,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  Badge,
} from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";

function Header({ handleCart, orderLen }) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#757575",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            Light Shop
          </Typography>
          <IconButton color="inherit" onClick={handleCart}>
            <Badge color="secondary" badgeContent={orderLen}>
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
