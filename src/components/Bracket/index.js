/* eslint-disable no-unused-vars */
import React, {useContext, useEffect} from 'react'
import './index.css'
import { AppContext } from '../../contexts/globalContext'

import { ref, set } from 'firebase/database'
import db from '../../configs/firebaseConfig'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export default function Bracket({tournamentId}) {
    const {tournaments, matches, participants, getTournaments, getMatches, getParticipants,} = useContext(AppContext)
    let participantsData = []
    let matchesData = []

    useEffect(() => {
        getTournaments()
        getParticipants()
        getMatches()
    }, [])

    Object.keys(participants).map(itemId =>{
        if(participants[itemId].tournamentId == tournamentId){
            participantsData.push(participants[itemId])
        }
    })

    if(participantsData.length>16) return(<p className='announcementText'>Tournaments currently not support having more than 16 participants</p>)

    if(participantsData.length<2) return(<p className='announcementText'>You should have 2 or more participant to view bracket</p>)

    Object.keys(matches).map(itemId =>{
        if(matches[itemId].tournamentId == tournamentId){
            matchesData.push(matches[itemId])
        }
    })

    const ArrangeLeaderboardMatches = (arrObj) => {
        let arranger = []
        for(let i = 0; i < arrObj.length; i++){
            for(let j = i+1; j < arrObj.length; j++){
                arranger.push({
                    matchId: '5' + Math.random().toString(9).substring(2,8),
                    firstPlayerId: arrObj[i].id,
                    secondPlayerId: arrObj[j].id,
                    isFirstPlayerWin: false,
                    tournamentId: tournamentId
                })
            }
        }

        return arranger
    }

    const SortLeaderboardByScore = (arrObj) =>{
        for(let i = 0; i < arrObj.length; i++) {
            for(let j=i+1; j < arrObj.length; j++) {
                if(arrObj[i].score < arrObj[j].score) {
                    let temp = arrObj[i]
                    arrObj[i] = arrObj[j]
                    arrObj[j] = temp       
                }
            }
        }

        return arrObj
    }

    let matchesArranger = ArrangeLeaderboardMatches(participantsData)
    participantsData = SortLeaderboardByScore(participantsData)

    let tableRows = []
    let tableIndex = 1

    participantsData.map(participant =>{ 
        
        tableRows.push({
            ranking: tableIndex,
            name: participant.name,
            score: participant.totalScore
        })

        tableIndex++
    })

    let dataToPush = []

    // Check if any matches detect on DB, if occurs then only push to DB non-exist matches
    if(matchesData.length != 0){ 
        matchesData.forEach(matchOnDB =>{
            matchesArranger.forEach(matchArranged =>{
                if (matchOnDB.matchId != matchArranged.matchId){
                    dataToPush.push(matchArranged)
                }
            })
        })
    } else dataToPush = matchesArranger

    // Try post the data to DB
    try{
        dataToPush.map(match =>{
            set(ref(db, 'matches/'), match)
        })

        console.log('Matches successfully saved to DB')

    } catch{err => {console.error('Bracket upload error: ' + err)}}

    if(tournaments[tournamentId].format == 'Leaderboard') return(
        <div>
            <p className='announcementText'>This is Leaderboard bracket</p>
            <TableContainer className='leaderboard'>
                <Table sx={{ minWidth: 650, maxWidth: 850, margin: '0 auto', border: '1px white solid' }} aria-label='simple table'>
                    <TableHead sx = {{backgroundColor:'#2B303D'}}>
                        <TableRow>
                            <TableCell sx={{color:'white', fontWeight: 850}} >Ranking</TableCell>
                            <TableCell align='center' sx={{color:'white', fontWeight: 850}}>Name</TableCell>
                            <TableCell align='center' sx={{color:'white', fontWeight: 850}}>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableRows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{color:'white'}}>{row.ranking}</TableCell>
                                <TableCell align='center' sx={{color:'white'}}>{row.name}</TableCell>
                                <TableCell align='center' sx={{color:'white'}}>{row.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>)

    if(tournaments[tournamentId].format == 'Single Elimination') return(
        <div>
            <p className='announcementText'>Coming soon</p>
        </div>)

    else return(<p className='announcementText'>Setting up, please wait or contact the host for more information</p>)

}
