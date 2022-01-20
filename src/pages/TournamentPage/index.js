import * as React from 'react'
// import MatchHistory from '../MatchHistory'   
import Banner from '../../components/Banner'
import Participant from '../Participant'
import './index.css'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 80,
        width: '100%',
        backgroundColor: '#635ee7',
        
    }
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: '600',
        fontSize: theme.typography.pxToRem(20),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: 'yellow'
        },
        '&.Mui-focusVisible': {
            backgroundColor: '#2B303D'
        }
    })
)


export default function TournamentPage() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <>
            <div className='tournament-detail-page'>
                {/* <Header/> */}
                <Banner/>
                <Box className='tournament-tabs' sx={{ bgcolor: '#2B303D' }}>
                    <div className='tournament-tabs-menu'>
                        <StyledTabs
                            className='tournament-tabs-items'
                            value={value}
                            onChange={handleChange}
                            aria-label='styled tabs example'
                        >
                            <StyledTab label='Bracket'>Bracket</StyledTab>
                            <StyledTab label='Match History' />
                            <StyledTab label='Participants' />
                            <StyledTab label='Setting' />
                        </StyledTabs> 
                    </div>
                    <div >
                        <button className='tournament-tabs-button'>Start Tournament</button>
                    </div>
                </Box>
                <Box
                    className ='tournament-page-intro'
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 1290,
                            height: 230,
                            fontSize: 13
                        }
                    }}
                >
                    <Paper
                        className='tournament-intro'
                        elevation={3}
                    >
                        <div className='tournament-game-intro'>
                            <label className='tournament-intro-name'>League Of Kid Academy</label>
                            <div className='tournament-intro-detail'>
                                <div className='tournament-intro-item'>
                                    <PermIdentityIcon className='tournament-intro-item-icon'/>
                                    <p className='tournament-intro-item-content'>2 nguoi choi</p>
                                </div>
                                <div className='tournament-intro-item'>
                                    <EmojiEventsIcon className='tournament-intro-item-icon'/>
                                    <p className='tournament-intro-item-content'>Single Elimination</p>
                                </div>
                                <div className='tournament-intro-item'>
                                    <SportsEsportsIcon className='tournament-intro-item-icon'/>
                                    <p className='tournament-intro-item-content'>Apex Legends</p>
                                </div>
                                <div className='tournament-intro-item'>
                                    <AccessTimeIcon className='tournament-intro-item-icon'/>
                                    <p className='tournament-intro-item-content'>January 20 2022</p>
                                </div>
                            </div>
                            <div className='tournament-intro-description'>
                                <p>Description</p>
                            </div>
                            <div className='tournament-intro-description-detail'>
                                <p>Giống với chuyện trứng có trước hay gà có trước, tranh luận về việc nên tập trung quyền lực nhiều hơn cho trung ương hay nên phân quyền nhiều hơn cho các địa phương thường rất khó khăn (và không phải bao giờ cũng có ích). </p>
                            </div>
                        </div>
                        <div>
                            <div className='tournament-host'>
                                <div className='tournament-host-detail'>
                                    <img className='tournament-host-detail-avt'></img>
                                    <div className='tournament-host-detail-item'>
                                        <p className='tournament-host-detail-item-p1'>Organized by</p>
                                        <p className='tournament-host-detail-item-p2'>ptlinh239</p>
                                    </div>
                                </div>
                            </div>
                            <button className='tournament-host-button'>Share</button>
                        </div>
                    </Paper>
                </Box>
            </div>
            {/* <MatchHistory/> */}
            <Participant/>
        </>

    )
}
