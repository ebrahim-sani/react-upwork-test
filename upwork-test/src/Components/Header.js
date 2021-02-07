import React from "react";
import { Button } from "@material-ui/core";
import "../Styles/Header.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    fontSize: 20,
    borderRadius: 14,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className="header">
      <div className="left_header">
        <h3 className="app_name">Books Gallery</h3>
      </div>

      <div className="right_header">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Add Book
        </Button>
      </div>
    </div>
  );
}

export default Header;
