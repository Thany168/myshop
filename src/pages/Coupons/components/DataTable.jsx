import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Stack, Typography } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { AlignCenter, TextAlignCenter } from 'lucide-react';
import { BorderClear } from '@mui/icons-material';
const columns = [

  { field: 'coupon', headerName: 'Coupon Name', width: 540,
    renderCell:(param)=>(
      <Stack direction={'row'} spacing={2} sx={{marginTop:1}}>
        <div className='bg-blue-500 w-9 h-9  flex items-center justify-center rounded'><LocalOfferIcon/></div>
        <Typography>{param.value} <br /> </Typography>
      </Stack>
    ),
    BorderClear

   },
  { field: 'usage', headerName: 'Usage', width: 130, TextAlignCenter },
  { field: 'status', headerName: 'Status', width: 130 ,
    renderCell:(param)=>(
      <div className={` ${param.value=="Active"?"bg-green-200  h-7 w-14 flex  mt-3 items-center justify-center rounded ":"bg-gray-200  h-7 w-14 flex  mt-3 items-center justify-center rounded "} `}>{param.value}</div>
    ),
  },
  { field: 'date', headerName: 'Date', width: 338, },
];


const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({row}) {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={row}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        
        sx={{ 
          '& .MuiDataGrid-columnSeparator':{
            display:'none',
          },
          border: 0,
          
         }}
      />
    </Paper>
  );
}
