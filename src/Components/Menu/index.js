import './menu.scss';

import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToApp from '@material-ui/icons/ExitToApp';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PermDataSetting from '@material-ui/icons/PermDataSetting';
import SearchIcon from '@material-ui/icons/Search';
import ListItemButton from '@mui/material/ListItemButton';
import { useCallback, useContext, useState } from 'react';

import { AuthContext } from '../../Contexs/auth';

 

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    nestedSecondLevel: {
      paddingLeft: theme.spacing(8)
    }
  }));

export default function Menu(){
    const {user, signOut} = useContext(AuthContext);
    const classes = useStyles();

    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [openSecondLevel, setOpenSecondLevel] = useState(true);
   
    const handleClick = (event) => { 
      event === 0 ? setOpen(!open) : setOpen2(!open2)
   
    };
  
    const handleClickSecondLevel = () => {
      setOpenSecondLevel(!openSecondLevel);
    };
     
    return(
       
        
         <div className="containerMenu">
            
        <div className="sidebar">
        
        <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            
          </ListSubheader>
        }
        className={classes.root}
      >
       
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton  onClick={(event) => handleClick(0)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Pesquisar" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
         </List>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Monitor" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
         </List>
          <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Notas Emitidas" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
         </List>
          <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Nfs-e Emitidas" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
         </List>
          <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Notas Recebidas" />
            </ListItem>
          </List>
        </Collapse>
        {/* <ListItem button onClick={(event) => handleClick(1)}>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText primary="Receber documento" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
         </List>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Validar Nfe" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
         </List>
          <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Validar CTe" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
         </List>
          <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Local de Recebimento" />
            </ListItem>
          </List>
        </Collapse> */}
      </List>
         
            </div> 
                 <footer>

                  <ListItem button>
                    <ListItemIcon>
                      <PermDataSetting />
                    </ListItemIcon>
                    <ListItemText primary="Configurações" />
                  </ListItem>

                  <ListItem button onClick={signOut}>
                    <ListItemIcon>
                    <ExitToApp />
                  </ListItemIcon>
                  <ListItemText primary="Sair" />
                </ListItem>

            </footer> 
                 
         </div>
    )
}