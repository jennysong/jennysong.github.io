import React from 'react'
import menuContent from '../constants/header-menu'

const HeaderMenuPopup = (props) => {
    return (
        <div className='header-menu-popup'>
            {menuContent(props.menuId).map((obj) => {
                return <div className='header-menu-item'>{obj.text}</div>
            })} 
        </div>
    )
}

export default HeaderMenuPopup