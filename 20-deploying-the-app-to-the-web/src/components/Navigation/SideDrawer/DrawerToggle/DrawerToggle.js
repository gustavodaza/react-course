import React from 'react';
import Bars from '../../../../assets/menu-icon.svg';
import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
  <div
    onClick={props.clicked}
    className={classes.Icon}>
    <img src={Bars} alt="Menu Icon"></img>
  </div>
)

export default drawerToggle
