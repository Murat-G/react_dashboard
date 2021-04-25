import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  IconButton,
  CssBaseline,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import NotificationsIcon from '@material-ui/icons/Notifications';


const drawerWidth = 250;

function HeaderBar({openDrawer,setOpenDrawer}) {

  const handleBarMenu = () => {
    setOpenDrawer(false);
  };

  const classer = useStylesDrawer();
  const theme = useTheme();

  return (
      <div className={classer.root}>
        <CssBaseline />
        <Drawer
          className={classer.drawer}
          variant="persistent"
          anchor="left"
          open={openDrawer}
          classes={{
            paper: classer.drawerPaper,
          }}
        >
          <div className={classer.drawerHeader}>
            <IconButton onClick={handleBarMenu}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon className={classer.icon} />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Çalışma Klavuzu", "Sıfır Hata", "Soru Havuzu", "Rehberlik", "Karnelerim", "Hedeflerim" ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon className={classer.icon}  /> : <MailIcon className={classer.icon}  />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Takvimim", "Raporlarım", "Hesabım", "Mesajlarım", "Bildirimlerim", "Üyelik Paketlerim"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InsertInvitationIcon className={classer.icon} /> : <NotificationsIcon className={classer.icon} />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
  );
}

export default HeaderBar;


const useStylesDrawer = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: '#e33371',
    width: drawerWidth,
    color:'white',
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  icon: {
    color:'white',
  }
}));