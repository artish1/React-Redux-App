import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

//Redux
import { connect } from "react-redux";

//Redux Actions
import { getWord } from "../../actions/index";

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(45deg,  #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    marginTop: theme.spacing(2),
    padding: "0 30px",
    width: "100%"
  },
  paper: {
    padding: theme.spacing(5, 5),
    width: "50%",
    maxWidth: 600,
    marginBottom: 25
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  textField: {
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .2)",
    borderRadius: 5,
    width: "100%",
    margin: "0 auto"
  },
  title: {
    color: "#444",
    marginBottom: theme.spacing(5)
  }
}));

const SearchForm = props => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    props.getWord(searchTerm);
  };
  return (
    <Paper className={classes.paper}>
      <form
        onSubmit={handleSearch}
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <h1 className={classes.title}>Search Word Definitions</h1>
        <TextField
          id="outlined-basic"
          disabled={props.isFetching ? true : false}
          className={classes.textField}
          label="Search"
          margin="normal"
          variant="outlined"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Button
          disabled={props.isFetching ? true : false}
          type="submit"
          className={classes.root}
        >
          Search
        </Button>
      </form>
    </Paper>
  );
};

const mapStateToProps = state => {
  return { isFetching: state.isFetching };
};

export default connect(
  mapStateToProps,
  { getWord }
)(SearchForm);
