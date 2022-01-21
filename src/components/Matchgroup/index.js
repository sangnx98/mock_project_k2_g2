import React from 'react'
import './index.css'


import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'



export default function DenseTable() {
    return (
        <div className='wrapper'>
            <div className='title'>
                <h1>Upcoming match</h1>
            </div>
            <div className='container'>
                <Container className='box-1'>
                    <ul>
                        <li>12:00 AM 2/2/2022</li>
                        <li>Navi</li>
                        <li>VS</li>
                        <li>G2 Esport</li>
                    </ul>
                </Container> 
                <Container style={{ backgroundColor:'#2B303D' }} className='box-1'>
                    <ul>
                        <li>12:00 AM 2/2/2022</li>
                        <li>Navi</li>
                        <li>VS</li>
                        <li>G2 Esport</li>
                    </ul>
                </Container>   
                <Container className='box-1'>
                    <ul>
                        <li>12:00 AM 2/2/2022</li>
                        <li>Navi</li>
                        <li>VS</li>
                        <li>G2 Esport</li>
                    </ul>
                </Container>   
                <Container style={{ backgroundColor:'#2B303D' }} className='box-1'>
                    <ul>
                        <li>12:00 AM 2/2/2022</li>
                        <li>Navi</li>
                        <li>VS</li>
                        <li>G2 Esport</li>
                    </ul>
                </Container>       
            </div>
            <h1>Group</h1>
            <Container>
                <TableContainer component={Paper}>
                    <Table sx={{ textAlign:'center'}} size='medium' aria-label='a dense table'>
                        <TableHead style={{ backgroundColor:'#2B303D' }}>
                            <TableRow>
                                <TableCell style={{ color:'white' }} align='center'>Rank</TableCell>
                                <TableCell style={{ color:'white' }} align='center'>Name&nbsp;</TableCell>
                                <TableCell style={{ color:'white' }} align='center'>Score&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableHead style={{ backgroundColor:'#E68E10' }}>
                            <TableRow>
                                <TableCell style={{ color:'white' }} align='center'>1</TableCell>
                                <TableCell style={{ color:'white' }} align='center'>Navi&nbsp;</TableCell>
                                <TableCell style={{ color:'white' }} align='center'>9&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableHead style={{ backgroundColor:'#925600' }}>
                            <TableRow>
                                <TableCell style={{ color:'white' }} align='center'>2</TableCell>
                                <TableCell style={{ color:'white' }} align='center'>G2 Esport&nbsp;</TableCell>
                                <TableCell style={{ color:'white' }} align='center'>6&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableHead style={{ backgroundColor:'#603B06' }}>
                            <TableRow>
                                <TableCell style={{ color:'white' }} align='center'>3</TableCell>
                                <TableCell style={{ color:'white' }} align='center'>Vitality&nbsp;</TableCell>
                                <TableCell style={{ color:'white' }} align='center'>3&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableHead style={{ backgroundColor:'#333333' }}>
                            <TableRow>
                                <TableCell style={{ color:'white' }} align='center'>4</TableCell>
                                <TableCell style={{ color:'white' }} align='center'>Liquid&nbsp;</TableCell>
                                <TableCell style={{ color:'white' }} align='center'>0&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}