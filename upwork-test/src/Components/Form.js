import React from "react";
import "../Styles/Form.css";
import "./Form";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    fontSize: 20,
    borderRadius: 8,
  },
}));

function Form() {
  const { register, handleSubmit, watch, errors } = useForm();
  const classes = useStyles();

  return (
    <div className="form">
      <form>
        <input
          name="name"
          type="text"
          placeholder="Book Name"
          ref={register({ required: true })}
        />
        <input
          name="year"
          type="text"
          placeholder="Date Submitted"
          ref={register({ required: true })}
        />
        <input
          name="cover-url"
          type="text"
          placeholder="Submitted By"
          ref={register({ required: true })}
        />
        <input
          name="info-url"
          type="text"
          placeholder="Cover Url"
          ref={register({ required: true })}
        />
        <input
          name="submitted-by"
          type="text"
          placeholder="Info Url"
          ref={register({ required: true })}
        />
        <div className="submit_btn">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            href="/add-new-book"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
