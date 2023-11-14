import React from 'react'
import './SettingsSidebar.css';
import { NavLink } from 'react-router-dom';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';

function SettingsSidebarItem({ link, icon, title }) {
  const linkTo = (`${link}`.slice(0, 1) == '/') ? `${link}`.slice(1) : `${link}`;
  return (
    <NavLink to={`/settings/${linkTo}`} className='settings-sidebar-section-item'>
      {icon}
      <p>{`${title}`}</p>
    </NavLink>
  )
}

function SettingsSidebar() {
  return (
    <div className='settings-sidebar'>

      <div className='settings-sidebar-section'>
        <div className='settings-sidebar-section-title'>
          <p>Access</p>
        </div>
        <div className='settings-sidebar-section-items'>
          <SettingsSidebarItem link='password' icon={<GppMaybeIcon />} title='Password' />
          <SettingsSidebarItem link='subject' icon={<PeopleOutlinedIcon/>} title='Interested Disciplines' />
          <SettingsSidebarItem link='work-place' icon={<LocationOnIcon/>} title='Work-Place'/>
          <SettingsSidebarItem link='designation' icon={<MarkunreadMailboxOutlinedIcon/>} title='Designation'/>
          {/* Add more pages here */}
        </div>
      </div>

    </div>
  )
}

export default SettingsSidebar;