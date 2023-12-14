import React from 'react'
import Card from '../Components/Card'
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';

const Layout = () => {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[60%] h-full flex justify-center'>
            <div className='w-[80%] flex flex-col gap-2 '>

               <Card/>
               <Card/>
            </div>
            </div>
        <div className='w-[30%]'>
          <div className='w-[328px]'>
            <Select sx={{width:328}}>
              <MenuItem>

            <Checkbox/>
            <ListItemText/>
              </MenuItem>

            </Select>

          </div>
        </div>
    </div>
  )
}

export default Layout