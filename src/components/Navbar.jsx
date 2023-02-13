import React,{useState} from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import {useLocation } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    // const [secondOpen,setSecondOpen]=useState(false)
    const location = useLocation(); // React Hook
    // const navigate = useNavigate();
    console.log(location.pathname);
  
    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    const handleClickAway = () => {
      setOpen(false);
    };
  
    const styles = {
      position: 'absolute',
      top: 40,
      right: 0,
      left: 0,
      zIndex: 1,
      border: '1px solid',
      p: 1,
      bgcolor: 'background.paper',
    };
    

  return (
    <div className="Navbar_container">
         <Link to="/" className='Home'>Home</Link>
          
     <div> <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <h4  onClick={handleClick}>
         Secondpage
        </h4>
        {open ? (
          <Box sx={styles}>
            Please fill the Form 
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener></div>
    </div>
  )
}

export default Navbar