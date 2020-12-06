import React,{ useEffect, useState } from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
const UserList=({}) =>{
const [user,setUser]=useState([]);
useEffect(()=>{
    const fetchData=async()=>{
      const response= await axios.get('https://jsonplaceholder.typicode.com/users');
      setUser(response.data)
    }
    fetchData()
  },[]);


  const useStyles = makeStyles((theme) => ({
    root: {
      
      width: '100%',
      maxWidth: '80ch',
      //backgroundColor: theme.palette.background.paper,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    
    },
    inline: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      
    },
  }));
  const classes = useStyles();
  return (
 <>
    <center>
  {user.map(e=>
<List className={classes.root}>
      <ListItem alignItems="flex-start" key={e.id}>
       
        <ListItemText
          primary=  {e.address.street}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
       {" "} {e.username}
       {"  "}  {e.name} <br/>
       {" email: " +e.email}<br />
             
          {" Phone: " +e.phone}<br />
          {" website: " +e.website}<br />
         
          {" company: " +e.company.name}
          {" " +e.company.catchPhrase}
          {" " +e.company.bs}<br/>
          {" Address: " +e.address.street}
              {" " +e.address.suite}
              {" " +e.address.city}
              {" " +e.address.zipcode}
              {" " +e.address.geo.lat}
              {" " +e.address.geo.lng}<br/>
              </Typography>
         
            
            </React.Fragment>
          
          }
        />
      </ListItem>
      
    </List>)}
    </center>
</>
  );
}

export default UserList;


















