import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Avatar, Checkbox, FormControl, InputAdornment, List, ListItemAvatar, ListItemButton, ListItemText, TextField } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SelectLabels from './SelectLabels';
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import DataGridDemo from './DataGridDemo';
import image1 from "../../../assets/profile.png"
import { useState } from 'react';
import order from "../data/orders.json"

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [status,setStatus]=useState("All");
  const revered=[...order].reverse()
  const [textSearch,settextSearch]=useState("")
  const filtered=status=="All"?order :(status=="NewCustomer"?revered
      :(order=="Europe"?order.filter((item)=>item.location=="Europe")
      :(status=="Completed")?order.filter((item)=>item.orders.some((o)=>o.status=="Completed"))
      :order));
  const search=textSearch.trim()==""?filtered:filtered.filter((item)=>item.name.toLowerCase().includes(textSearch.toLowerCase()))
 const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ pb: 7 }} ref={ref}>
    <BottomNavigation
        showLabels
        value={value}
        sx={{
            justifyContent: 'flex-start',
            width: 'fit-content',
            fontSize: '13px',
            '& .MuiBottomNavigationAction-root': {
            minWidth: 'auto',
            width: 'fit-content',
            px: 2,
            flex: '0 0 auto',
            },
            '& .MuiBottomNavigationAction-label': {
            fontSize: '13px',
            },
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction label="All Customers" 
        onClick={()=>setStatus("All")}
        sx={{
            '&.Mui-selected':{
                color:"blue",
                borderBottom:'1px solid blue'
            }
        }}
        />
        <BottomNavigationAction label="New Customers" 
        onClick={()=>setStatus("NewCustomer")}
        sx={{
            '&.Mui-selected':{
                color:"blue",
                borderBottom:'1px solid blue'
            }
        }}
        />
        <BottomNavigationAction label="From Europe"
        onClick={()=>setStatus("Europe")}
        sx={{
            '&.Mui-selected':{
                color:"blue",
                borderBottom:'1px solid blue'
            }
        }}
        />
        <BottomNavigationAction label="Returning Customers" 
        onClick={()=>setStatus("Completed")}
        sx={{
            '&.Mui-selected':{
                color:"blue",
                borderBottom:'1px solid blue'
            }
        }}
        />
      </BottomNavigation>
      <CssBaseline />
          <div>
        <div className="bg-blue-100">{/* <ButtonNav /> */}</div>
        <div className="flex mt-3 justify-between">
          <div className="flex gap-5">
            <div>
              <SelectLabels />
            </div>
            <div>
              <FormControl>
                <TextField
                  
                  sx={{width:"400px"}}
                  size="small"
                  id="outlined-basic"
                  label="Search"
                  variant="outlined"
                  onChange={(e)=>settextSearch(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </FormControl>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="border border-gray-200 text-blue-500 w-10 rounded">
              <BorderColorSharpIcon />
            </button>
            <button className="border border-gray-200 text-blue-500 w-10 rounded">
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div >
      {/* <List > */}
        <DataGridDemo orders={search}/>
      {/* </List> */}

    </Box>
  );
}
