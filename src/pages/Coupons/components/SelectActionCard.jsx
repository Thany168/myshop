import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const cards = [
  {
    id: 1,
    icons: PaymentsIcon,
    title: 'Fixed Discount',
  },
  {
    id: 2,
    icons: ShoppingBagIcon,
    title: 'Percentage Discount',
  },
  {
    id: 3,
    icons: LocalShippingIcon,
    title: 'Free Shipping',
  },
  {
    id:4,
    icons: LocalOfferIcon,
    title:'Price Discount'
  }
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        height:150,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 10,
        alignItems:'center',
      }}
    >
      {cards.map((card, index) => {
        const Icon=card.icons
        const selected=selectedCard==index
        return (
        <Card key={card.id} 
        sx={{
                  borderRadius: 1,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: (theme) =>
                    selected
                      ? `2px solid blue `
                      : '2px solid transparent',
                    color:(them)=>
                        selected?'blue':
                        'text-transparent'
                  
                }}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              // '&[data-active]': {
              //   backgroundColor: 'action.selected',
              //   '&:hover': {
              //     backgroundColor: 'action.selectedHover',
              //   },
              // },
            }}
          >
            <CardContent sx={{ height: '100%',
            alignItems:'center',
            height:120,
            display:'grid',
            justifyContent:'center'
             }} >
                <Box sx={{textAlign:'center'}}>
                <Icon
                    sx={{fontSize:'32px'}}/>
                </Box>
                <Box>
                    <Typography align='center'>
                        {card.title}
                    </Typography>
                </Box>
              
              
            </CardContent>
            
          </CardActionArea>
        </Card>
        )
      })}
    </Box>
  );
}

export default SelectActionCard;
