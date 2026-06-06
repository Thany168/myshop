import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, date, amount, status) {
  return { name, date, amount, status };
}

const rows = [
  createData('Jagarnath S.', '24.05.2023', 124.97, 'Paid'),
  createData('Anand G.', '23.05.2023', 55.42, 'Pending'),
  createData('Kartik S.', '23.05.2023', 89.90, 'Paid'),
  createData('Rakesh S.', '22.05.2023', 144.94, 'Pending'),
  createData('Anup S.', '22.05.2023', 70.52, 'Paid'),
];

export default function Tables() {
  return (
    <TableContainer component={Paper} sx={{boxShadow: 'none'}}>
      <Table sx={{ minWidth: 550 }}  aria-label="simple table">
        <TableHead sx={{'& th':{borderBottom:"2px solid",borderColor: 'divider'}}}>
          <TableRow >
            <TableCell sx={{color:'gray',fontSize:'14px'}}>Name</TableCell>
            <TableCell sx={{color:'gray',fontSize:'14px'}}>Date</TableCell>
            <TableCell sx={{color:'gray',fontSize:'14px'}}>Amount</TableCell>
            <TableCell sx={{color:'gray',fontSize:'14px'}}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': {  }}}
            >
              <TableCell component="th" scope="row" sx={{fontWeight:500}}>
                {row.name}
              </TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell >${row.amount}</TableCell>
              <TableCell ><p className={`bg-blue-100 ${row.status=="Pending"?"w-[60px] rounded bg-gray-300 p-1":"w-[35px] rounded bg-green-300 p-1"}`}>{row.status}</p></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
