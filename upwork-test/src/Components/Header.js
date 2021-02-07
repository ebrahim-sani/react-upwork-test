import React from "react";
import { Button } from "@material-ui/core";
import "../Styles/Header.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "blue",
    borderRadius: 8,
    border: 0,
    color: "white",
    height: 54,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #ededed",
  },

  label: {
    textTransform: "capitalize",
    fontSize: 20,
  },
});

function Header() {
  const classes = useStyles();
  return (
    <div className="header">
      <div className="left_header">
        <h3 className="app_name">Books Gallery</h3>
      </div>

      <div className="right_header">
        <Button
          classes={{
            root: classes.root,
            label: classes.label,
          }}
        >
          Submit A Book
        </Button>
      </div>
    </div>
  );
}

export default Header;
