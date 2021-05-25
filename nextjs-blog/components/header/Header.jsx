import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  topographyStyles: {
    flex: 1,
  },
}));
export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography className={classes.topographyStyles} variant="h6">
          Header stuff
        </Typography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  );
};
