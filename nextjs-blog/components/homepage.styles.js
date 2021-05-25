import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return createStyles({
    container: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      // justifyContent: "center",
      backgroundColor: "lightgrey",
    },
  });
});
