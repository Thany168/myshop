import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomerTable({customer}) {
    const order=customer.orders;
  return (
    <TableContainer component={Paper} sx={{boxShadow:"none",maxHeight: 350,}} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{'& th':{borderBottom:"2px solid",borderColor: 'divider'}}}>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Order Status</TableCell>
            <TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row,index)=>(
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={index}
            >
              <TableCell align='left' component="th" scope="row">
                {row.orderId}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
            </TableRow> 
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
