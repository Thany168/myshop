import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SelectActionCard from './components/SelectActionCard';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Height } from '@mui/icons-material';
function CreateCoupon() {
    const currentYear = dayjs();
  return (
    <>
      <div className='p-4'>
        <div >
          <div >
            <Link className="flex items-center gap-1" to={'/coupons'}>
            <ArrowBackIcon className='text-sm' fontSize='small' />
            <p className='text-md'>Back</p>
            </Link>
          </div>
          <div className='mt-1'><b className='text-xl '>Create Coupon</b></div>
        </div>

        <div className='mt-8 py-9 px-5 bg-white rounded'>
          <div>
            <b className='text-lg'>Coupon Imformation</b>
            <p className='text-sm'>Code will be used by users in checkout</p>
          </div>
          <div className='flex gap-3 mt-8'>
            <div className='w-[50%]'>
              <span className='text-xs text-gray-500'>Coupon Code</span>
              <input type="text" placeholder='Shipfree20 ' style={{border:"1px solid gray"}}  className='bg-transparent  rounded px-2 py-1 w-full' />
            </div>
            <div className='w-[50%]'>
              <span className='text-xs text-gray-500'>Coupon Code</span>
              <input type="text" placeholder='Free Shipping'  style={{border:"1px solid gray"}} className='bg-transparent  rounded px-2 py-1 w-full' />
            </div>
            
          </div>
          <div className='bg-gray-300 h-[1px] mt-[50px]' />
          <div className='mt-10'>
            <b className='text-lg'>Coupon Type</b>
            <p className='text-sm'>Type of coupon you want to create</p>
          </div>
          <div className='mt-5'>
            <SelectActionCard/>
          </div>
          
          <div className='flex gap-3 mt-8'>
            <div className='w-[50%]'>
              <span className='text-xs text-gray-500'>Discount Value</span>
              <input type="text" placeholder='Amount' style={{border:"1px solid gray"}}  className='bg-transparent  rounded px-2 py-1 w-full' />
            </div>
            <div className='w-[50%]'>
              <span className='text-xs text-gray-500'>Applies to</span>
              {/* <input type="text" placeholder='Free Shipping'  style={{border:"1px solid gray"}} className='bg-transparent  rounded px-2 py-1 w-full' /> */}
              <select name="" id="" style={{border:"1px solid gray"}} className='bg-transparent  rounded px-2 py-1 w-full text-gray-900 invalid:text-gray-400'>
                <option value=""  disabled selected hidden>Choose</option>
                <option value="">L192</option>
                <option value="">Bun Tham</option>
                <option value="">J&T</option>
              </select>
            </div>
            
          </div>
          
          <div className='flex gap-3 mt-8'>
            <div className='w-[50%] '>
              <span className='text-xs text-gray-500'>Duration</span>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Set Duration"
                  maxDate={currentYear}
                  openTo="year"
                  views={['year', 'month']}
                  yearsOrder="desc"
                  slotProps={{
                    textField: {
                      size:'small',
                      sx:{
                        width:"100%",
                        padding :'0'
                      }
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className='w-[50%]'>
              <span className='text-xs text-gray-500'>Usage Limits</span>
              <input type="text" placeholder='Amount' style={{border:"1px solid gray",height:'40px'}}  className='bg-transparent  rounded px-2 py-1 w-full' />
            </div>
          </div>
          <div className='flex gap-3 items-start'>
            <div className='w-[50%] flex gap-4  items-center'>
              <input style={{height:'50px',width:'20px'}} type="checkbox" />
              <p>Don't Set Duration</p>
            </div>
            <div className='w-[50%] flex gap-4  items-center'>
              <input style={{height:'50px',width:'20px'}} type="checkbox" />
              <p>Don't limit amount of uses</p>
            </div>
            
          </div>
        </div>
        <div className='bg-gray-300 h-[1px] mt-[40px]' />
        <div className='mt-5'>
          <div className='flex gap-2 justify-end'>
            <div><button className='text-blue-400 bg-white border py-1 px-4 rounded'>Cancel</button></div>
            <div><button className='text-white bg-blue-600 border py-1 px-4 rounded'>Save</button></div>
          </div>
        </div>
        
        
      </div>
    </>
  )
}

export default CreateCoupon
