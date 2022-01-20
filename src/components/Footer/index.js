import React from 'react'
import Box from '@mui/material/Box'
import './index.css'
import footerbanner from '../../assets/images/footerbanner.png'

const FooterInner = () => {
    return (
        <div className='footer'>
            <Box className='footer-left' sx={{  display: { xs: 'none', md: 'flex' } }} >
                <div className='footer-left-content'>
                    <div className='footer-desc-content' >
                        <a href='#' className='link-desc-content' >PRESS</a>
                        <a href='#' className='link-desc-content' >SECURYTY</a>
                        <a href='#' className='link-desc-content' >TEAM OF SERVICE</a>
                        <a href='#' className='link-desc-content' >PLAYER SUPPORT</a>
                    </div>
                    <div>
                        <a href='#' className='link-desc-content' style={{marginLeft: -20}} >CANDIDATE PRIVACY</a>
                        <a href='#' className='link-desc-content' >ACCESSIBILITY</a>
                    </div>
                    <hr className='hr-decs'/>
                    <h3>2022 Games, Inc. All Rights Reserved.</h3>
                </div>
            
            </Box>
            <div className='footer-right'>
                <img className='footer-img-right' src={footerbanner} ></img>
            </div>
        </div>
    )
}

export default FooterInner
