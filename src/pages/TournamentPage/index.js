<<<<<<< HEAD
=======
import * as React from 'react'
>>>>>>> 63e32394cc46ce303cc6c38b4d5b6ccaadcd1fa6
import MatchHistory from '../MatchHistory'   
import Banner from '../../components/Banner'
import Participant from '../Participant'
import TournamentEdit from '../TournamentEdit'
import './index.css'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
<<<<<<< HEAD
import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../contexts/globalContext'
import { useParams } from 'react-router-dom'


=======
>>>>>>> 63e32394cc46ce303cc6c38b4d5b6ccaadcd1fa6

const styles = {
    tab: {
        color: '#fff'
    }
}

function TabPanel(props) {
    const { children, value, index, ...other } = props
  
    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}


export default function TournamentPage() {
<<<<<<< HEAD
    const { id } = useParams()
    const [value, setValue] = React.useState(0)
    const { tournaments, getTournaments,  } = useContext(AppContext)

    useEffect(() => {
        getTournaments()

    },[])

=======
    const [value, setValue] = React.useState(0)
>>>>>>> 63e32394cc46ce303cc6c38b4d5b6ccaadcd1fa6

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <>
            <div className='tournament-detail-page'>
                <Banner/>
                <Box 
                    className='tournament-tabs'
                    sx={{ width: '100%' }}>
                    <Box 
                        className='tournament-tabs-menu'
                        sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs 
                            className='tournament-tabs-items'
                            value={value} onChange={handleChange} aria-label='basic tabs example'>
                            <Tab style={styles.tab} label='Bracket' {...a11yProps(0)} />
                            <Tab style={styles.tab} label='Match History' {...a11yProps(1)} />
                            <Tab style={styles.tab} label='Participant' {...a11yProps(2)} />
                            <Tab style={styles.tab} label='Setting' {...a11yProps(3)} />
                        </Tabs>
                    </Box>
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
<<<<<<< HEAD
                    
                    <Paper
                        className='tournament-intro'
                        elevation={3}
                    >  
                        {Object.keys(tournaments).map(tournamentsId => {
                            if(id == tournamentsId){
                                return(
                                    <React.Fragment key={tournamentsId}>
                                        <div className='tournament-game-intro' >
                                            <label className='tournament-intro-name'> {(id == tournamentsId) ? tournaments[tournamentsId].name : '' }</label>
                                            <div className='tournament-intro-detail'>
                                                <div className='tournament-intro-item'>
                                                    <PermIdentityIcon className='tournament-intro-item-icon' />
                                                    <p className='tournament-intro-item-content'>{tournaments[tournamentsId].participantCount} người chơi</p>
                                                </div>
                                                <div className='tournament-intro-item'>
                                                    <EmojiEventsIcon className='tournament-intro-item-icon' />
                                                    <p className='tournament-intro-item-content'>{tournaments[tournamentsId].format}</p>
                                                </div>
                                                <div className='tournament-intro-item'>
                                                    <SportsEsportsIcon className='tournament-intro-item-icon' />
                                                    <p className='tournament-intro-item-content'>{tournaments[tournamentsId].gameId}</p>
                                                </div>
                                                <div className='tournament-intro-item'>
                                                    <AccessTimeIcon className='tournament-intro-item-icon' />
                                                    <p className='tournament-intro-item-content'>{tournaments[tournamentsId].startAt}</p>
                                                </div>
                                            </div>
                                            <div className='tournament-intro-description'>
                                                <p>Description</p>
                                            </div>
                                            <div className='tournament-intro-description-detail'>
                                                <p>{tournaments[tournamentsId].description}</p>
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
                                    </React.Fragment>
                                )
                            }
                        })}
                    </Paper>
                    
=======
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
>>>>>>> 63e32394cc46ce303cc6c38b4d5b6ccaadcd1fa6
                </Box>
                <Box className='tournament-page-tabs'>
                    <TabPanel value={value} index={0}>
                        <Participant/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <MatchHistory/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Participant/>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <TournamentEdit/>
                    </TabPanel>
                </Box>
                
            </div>
        </>
    )
}
