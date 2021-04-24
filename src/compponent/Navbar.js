import React from 'react';
import RedditIcon from '@material-ui/icons/Reddit';
import {AppBar,Tab ,Tabs,Toolbar}  from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './navCss.css';  

const Navbar = () =>
{  
    return(
        <>
        <AppBar>
            <Toolbar style={{backgroundColor:"rgb(0 0 0 / 88%)"}}> 
                    <RedditIcon style={{fontSize:"40px"}}/>
                    <Tabs>
                        <Tab label= 'Home' style={{fontSize:"20px", fontStyle:"normal" , fontWeight: 900}}  href="https://www.npmjs.com/package/moviedb"/>
                    </Tabs>
                    <Tabs>
                        <Tab label= 'Subject' style={{fontSize:"20px", fontStyle:"normal" , fontWeight: 900}}  href="https://www.npmjs.com/package/moviedb"/>
                    </Tabs>
                    <Tabs>
                        <Tab label= 'About Us' style={{fontSize:"20px", fontStyle:"normal" , fontWeight: 900}}  href="https://www.npmjs.com/package/moviedb" />
                    </Tabs>
                    <Tabs>
                        <Tab label= 'Contact us' style={{fontSize:"20px", fontStyle:"normal" , fontWeight: 900}}  href="https://www.npmjs.com/package/moviedb" />
                    </Tabs>
                    <input type="text" placeholder="search"/>
                    <ExitToAppIcon />
            </Toolbar>
        </AppBar>
        </>
    );
};
export default Navbar;