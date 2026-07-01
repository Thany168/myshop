import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { BorderClear } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "profile",
    headerName: "Name",
    width: 500,
    sortable: false,
    renderCell: (params) => (
        <Box sx={{
            display:"flex",
            justifyContent:"flex-start",
            alignItems:"center",
            textAlign:'left',
            gap:'10px',
            paddingTop:"6px"
        }}>
            <Avatar
            src={params.row.profile}
            alt={params.row.name}
            sx={{ width: 40, height: 40 ,backgroundColor:"#a1a7c4"}}
            />

            <Typography variant="body2" fontWeight={600}>
            {params.row.name}
            </Typography>
        </Box>
    ),
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field:"location",
    headerName:"Location",
    width:300
  },
  {
    field: "orders",
    headerName: "Orders",
    width: 150,
    valueGetter: (value) => value.length,
  },
  {
    field: "spent",
    headerName: "Spent",
    width: 180,
    valueGetter: (value) => `$${value}`,
  },
  
  {
    field: "address",
    headerName: "Address",
    width: 250,
  },

  {
    field: "tags",
    headerName: "Tags",
    width: 220,
    sortable: false,
    renderCell: (params) => (
      <Stack direction="row" spacing={0.5}>
        {params.row.tags.map((tag) => (
          <Chip key={tag} label={tag} size="small" />
        ))}
      </Stack>
    ),
  },

];



export default function DataGridDemo({orders}) {
const navigate=useNavigate()

  return (
    <Box sx={{ height: 480, width: '100%' }}>
      <DataGrid
      onCellClick={(param)=>navigate('viewdetail',{
        state:param.row
      })
      }
        rows={orders}
        columns={columns}
        initialState={{
          columns:{
            columnVisibilityModel:{
                id:false,
                address:false,
                phone:false,
                email:false,
                tags:false,

            }
          },
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        sx={{
            border:0,
            '& .MuiDataGrid-columnSeparator':{
                display:'none'
            },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
