import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  titleContainer: {
    margin: theme.spacing(1),
    display: "flex",
  },
  title: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
}));

const Title = ({ title }) => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>{title}</Typography>
      </div>
    </div>
  );
};

export default Title;
