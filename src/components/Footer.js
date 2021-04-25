import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="#">
        kolaykampüs
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Öğrenmenin En Kolay Yolu.
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            Tüm hakları "kolaykampüs.com A.Ş" 'ye aittir.
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%'
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
      textAlign: "center"
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: "auto",
      textAlign: "center",
      backgroundColor:
        theme.palette.type === "dark"
          ? theme.palette.grey[800]
          : theme.palette.grey[200],
    },
    iconContainer: {
      display: "flex",
      flexDirection: "row",
      listStyle:  "none",
      justifyContent: "center",
      paddingLeft: "0em"
    },
    iconItem: {
      padding: "1em 0em 1em 1em",
      textDecoration: "none"
    }
  }));