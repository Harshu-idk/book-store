import { NavLink } from "react-router-dom";
import {Button,Tab,Tabs,Box,TextField,IconButton} from "@material-ui/core";
import {styles} from "./style";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { useState } from "react";



export const Profile = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes =styles();



  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }



    return (
      <h1 className={classes.wrapper}>
          profile Component <NavLink to="/user">User</NavLink><NavLink to='/'>Home</NavLink>
          <br />
          <br />
          <br />

          <Button variant="text">Text</Button>
          <br />
          <Button variant="contained">Contained</Button>
          <br />
          <Button variant="outlined">Outlined</Button>
          <br />
          <br />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
         
          <TextField id="filled-basic" label="Filled" variant="filled" />
         
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <br />
          <br />
          <IconButton aria-label="fingerprint" color="secondary">
          <Fingerprint />
          </IconButton>
          <IconButton aria-label="fingerprint" color="success">
          <Fingerprint />
          </IconButton>
          <IconButton aria-label="delete">
          <DeleteIcon />
</IconButton>
<IconButton aria-label="delete" disabled color="primary">
  <DeleteIcon />
</IconButton>
<IconButton color="secondary" aria-label="add an alarm">
  <AlarmIcon />
</IconButton>
<IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>
<br />
<br />
<div className="heading">
<Tabs
  value={value}
  onChange={handleChange}
  textColor="secondary"
  indicatorColor="secondary"
  alignItems="center"
  aria-label="secondary tabs example"
  centered
>
  <Tab value="one" label="Tablets">One</Tab>
  <Tab value="two" label="Mobiles" >two</Tab>
  <Tab value="three" label="Buds">Three</Tab>
</Tabs>
</div>
<div className="App">
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
      </h1>
    );
  };
  
  