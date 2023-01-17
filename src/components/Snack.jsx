import { Alert, Snackbar } from "@material-ui/core";

function Snack({ isOpen, handleClose = Function.prototype }) {
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity="success">Item added to basket!</Alert>
    </Snackbar>
  );
}

export default Snack;
