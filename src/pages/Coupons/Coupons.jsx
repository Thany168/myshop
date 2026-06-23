import React from "react";
import ButtonNav from "./components/ButtonNav";
import Dropdown from "./components/Dropdown";
import SelectLabels from "./components/SelectLabels";
import SearchIcon from '@mui/icons-material/Search'
import { Box, Button, FormControl, Input, InputAdornment, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import { Link } from "react-router-dom";
function Coupons() {
  return <>
    <div>
      <div className="flex justify-between ">
        <div>
          <b className="text-2xl">Coupons</b>
        </div>
        <div>
          <button className="bg-[#1e5eff] px-10 py-1 text-white rounded"><Link to={'create'}>+ Create</Link></button>
        </div>
      </div>
      <div className="w-full px-7 bg-white mt-5 rounded">
        
        <div >
          <FixedBottomNavigation/>
        </div>
      </div>
    </div>
  </>;
}

export default Coupons;
