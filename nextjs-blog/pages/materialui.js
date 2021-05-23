import { Button, Typography } from "@material-ui/core";
import { useStyles } from "../components/homepage.styles";

const MaterialUI = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Welcome to Next.js!</h1>
      <Button>
        <Typography color="primary">Click Me</Typography>
      </Button>
    </div>
  );
};

export default MaterialUI;
