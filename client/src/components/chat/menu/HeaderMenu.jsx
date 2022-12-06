import React ,{useState} from 'react';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';
//import {useNavigate} from "react-router-dom"


const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

const HeaderMenu = ({setOpenDrawer}) => {

  //  const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };


    const handleClose = () => {
        setOpen(null);
    };
   // const Logout = () => {
    //    LoginDialog();
   // };

  return (
   <>
   <MoreVert onClick={handleClick}/>
   <Menu
       
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        
      >
        <MenuOption onClick={()=>{handleClose();setOpenDrawer(true);}}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
   </>
  )
}

export default HeaderMenu;