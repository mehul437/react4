import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import { StudentContext } from './StudenContext'

export default function Temp() {
    const [students] = useContext(StudentContext)
    const nav=useNavigate();
    const caller=()=>{
        nav("/student-dec");
    }
    return (
    <div>
            <p><span>Student data</span> <button className='add' onClick={caller}>add student</button></p>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Course</TableCell>
                        <TableCell>Batch</TableCell>
                        <TableCell>Change</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        students.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.age}</TableCell>
                                <TableCell>{item.course}</TableCell>
                                <TableCell>{item.batch}</TableCell>
                                <TableCell><Link to={`/student-dec/${item.id}`}>edit</Link></TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>

        </TableContainer>



    </div>

    )}