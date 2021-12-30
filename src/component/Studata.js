import React, { useState , useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { StudentContext } from './StudenContext'
import TextField from '@mui/material/TextField';

export default function Studata (props) {
    const [status, setstatus] = useState({
        name: "",
        age: "",
        course: "",
        batch:""
    })
    const[show]=useState(props.data)

    const temp=useRef()
    const navigate=useNavigate()
    const[students,setstudents]=useContext(StudentContext)
    const fid = useParams();
   
   
    const change = (event) => {
        setstatus({ ...status, [event.target.name]: event.target.value })
    }
    
    const handle = (e) => {
        e.preventDefault()
        
        setstudents([...students,{...status,id:new Date().getTime().toString()}])
    
        navigate("/student")
    }
    const changehandle = (e) => {
        e.preventDefault()

        setstudents(prevState =>
            prevState.map((stud) =>
                (stud.id === fid.fid) ?
                    {
                        ...status,
                        "id": stud.id
                    } : stud
            )
        )
        navigate("/student")
    }

    temp.current=funset
    useEffect(() => {
        
            temp.current()
        
    }, []);

    function funset() {
      if(show){
          const newelement = students.find((el) => el.id === fid.fid);
          setstatus(newelement);
      }
    }


    let butto;
    if(show){
        butto = <button className='sub' onClick={changehandle} type='submit'>update</button>
    }
    else{
       
        butto = <button className='sub' onClick={handle} type='submit'>submit</button>
    }

    return(
       <div className='main2'>
           <form>
         
             <div className='frow'>

                    <span className='first'> <TextField

                        name="name"
                        label="name"
                        type="text"
                        maxRows={4}
                        value={status.name}
                        onChange={change}
                    /></span>

                    <span className='second'> <TextField

                        name="age"
                        label="age"
                        type="number"
                        maxRows={4}
                        value={status.age}
                       onChange={change}
                    /></span>
                </div>

                <div className='frow'>
                    <span className='third'> <TextField

                        name="course"
                        label="course"
                        type="text"
                        maxRows={4}
                        value={status.course}
                       onChange={change}
                    /></span>

                    <span className='fourth'> <TextField

                        name="batch"
                        label="batch"
                        type="text"
                        maxRows={4}
                        value={status.batch}
                       onChange={change}
                    /></span>
                </div>
  
                {butto}


         </form>
        </div>
    )
}