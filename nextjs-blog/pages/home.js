import { createStyles, makeStyles, Grid } from "@material-ui/core";

import { Header } from "../components/header/Header";
import { Content } from "../components/content/Content";

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      marginRight: "30px",
    },
  })
);

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item sm={2} />
        <Content />
        <Grid item sm={2} />
      </Grid>
    </Grid>
  );
};

export default Home;
