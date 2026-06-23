import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ButtonNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box >
      <BottomNavigation
        sx={{justifyContent:"flex-start"}}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className='bg-blue-100 gap-5 '
      >
        <button className='group relative '>
          <p className='group-focus:text-blue-500'>All Coupons</p>
          <div className='absolute w-[90px] h-[1px] mt-[15px] scale-y-0 group-focus:scale-y-100 bg-blue-500 rounded'/>
        </button>
        <button className='group relative '>
          <p className='group-focus:text-blue-500'>Active Coupons</p>
          <div className='absolute w-[115px] h-[1px] mt-[15px] scale-y-0 group-focus:scale-y-100 bg-blue-500 rounded'/>
        </button>
        <button className='group relative '>
          <p className='group-focus:text-blue-500'>Expired Coupons</p>
          <div className='absolute w-[123px] h-[1px] mt-[15px] scale-y-0 group-focus:scale-y-100 bg-blue-500 rounded'/>
        </button>
      </BottomNavigation>
      <hr />
    </Box>
  );
}
