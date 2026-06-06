import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  {
    title:{
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT489PLlE9YViF9h7KOrisCKUBXc_J7Qo-84w&s',
      name: 'Men Grey Hoodie'
    },
    price: 49.9,
    unitsold: 204,
  },
  {
    title:{
      image: 'https://assets.timberland.com/images/t_img/f_auto,h_1300,e_sharpen:60,w_1300/dpr_2.0/v1767199972/TB0A43Z7ABI-ALT3/Womens-Striped-ShortSleeve-TShirt-TBL-ALT3.png',
    name: 'Women Striped T-Shirt',
    },
    price: 34.9,
    unitsold: 155,
  },
  {
    title:{
      image: 'https://hips.hearstapps.com/hmg-prod/images/gh-white-tshirt-66059c6ec5b44.png?crop=0.502xw:1.00xh;0.498xw,0&resize=1200:*',
    name: 'Women White T-Shirt',
    },
    price: 40.9,
    unitsold: 120,
  },
  {
    title:{
      image: 'https://hips.hearstapps.com/hmg-prod/images/gh-white-tshirt-66059c6ec5b44.png?crop=0.502xw:1.00xh;0.498xw,0&resize=1200:*',
      name: 'Women White T-Shirt',
    },
    title:{
    image: 'https://lecoureurnordique.ca/cdn/shop/files/1ME10232985-performance_T-ss25-arctic-eclipse-2.jpg?v=1744999801&width=1214',
    name: 'Men White T-Shirt',
    },
    price: 49.9,
    unitsold: 204,
  },
  {
    title:{
    image: 'https://www.target.com.au/medias/static_content/product/images/large/87/17/A928717.jpg?impolicy=product_portrait',
    name: 'Women Red T-Shirt',
    },
    price: 34.9,
    unitsold: 155,
  },
];
export default function Unitsoldtable() {
  return (
    <TableContainer   component={Paper} sx={{boxShadow: 'none'}}>
      <Table sx={{ minWidth: 550 }}  aria-label="simple table">
        <TableHead sx={{'& th':{borderBottom:"2px solid",borderColor: 'divider'}}}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Price</TableCell>
            <TableCell>Unit Sold</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {rows.map((row) => (
            <TableRow
              key={row.title.name}
              sx={{ '&:last-child td, &:last-child th': {  } }}
            >
              <TableCell sx={{fontWeight:500}}><div className='flex items-center gap-5 ' ><img src={row.title.image} className='rounded' width={25}  alt="" /><p>{row.title.name}</p></div> </TableCell>
              <TableCell >${row.price}</TableCell>
              <TableCell ><div className='p-1'>{row.unitsold}</div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
