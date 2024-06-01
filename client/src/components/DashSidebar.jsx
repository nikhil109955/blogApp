import { Sidebar } from 'flowbite-react';
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from 'react-icons/hi';
 import { useEffect, useState } from 'react';
 import { useLocation } from 'react-router-dom';
export default function DashSidebar(){
    const location = useLocation()
    const[tab, setTab] = useState('')
    useEffect(()=>{
      const urlParams = new URLSearchParams(location.search)
      const tabFromUrl = urlParams.get('tab')
      console.log(tabFromUrl)
    },[location.search])
    return(
        <Sidebar>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item active = {tab === 'profile'} icon = {HiUser} label ={'User'} labelColor='dark'>
                        Profile
                    </Sidebar.Item>
                    <Sidebar.Item active icon ={HiArrowSmRight} className='cursor-pointer'>
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}