import React from 'react'
import { connect } from 'react-redux'
import { selectHeaderMenu } from '../actions/index'
import appleIcon from '../assets/icon-apple.png'
import HeaderMenuPopup from './HeaderMenuPopup'


const HeaderMenu = (props) => {
    let classes, imgClass
    const onClickFn = () => {
        if (props.selectedHeaderMenu === props.text) {
            props.dispatch(selectHeaderMenu(''))
        } else {
            props.dispatch(selectHeaderMenu(props.text))
        }
    }
    const onMouseOverFn = () => { 
        if (props.selectedHeaderMenu) {
            props.dispatch(selectHeaderMenu(props.text))
        } 
    }

    const isSelected = props.selectedHeaderMenu === props.text

    if (props.icon) {
        classes = 'apple-icon-box'
        imgClass = isSelected? 'apple-icon selected' : 'apple-icon'
    } else {
        classes = props.bold? 'text-menu boldest' :'text-menu'
    }
    if (isSelected) {
        classes += ' selected'
    }

    return (
        <div style={{display: 'inline-block', verticalAlign: 'top', marginLeft: props.icon? '10px' : '0'}}>
            <div className={classes} onClick={onClickFn} onMouseOver={onMouseOverFn}>
                {props.icon? <img className={imgClass} src={appleIcon}  /> : props.text}
            </div>
            {isSelected? <HeaderMenuPopup menuId={props.text} /> : <div />}
        </div>
    )
}
const mapStateToProps = state => ({selectedHeaderMenu: state.selectedHeader})
export default connect(mapStateToProps)(HeaderMenu)