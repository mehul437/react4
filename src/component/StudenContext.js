import React, { useState, createContext } from "react";


export const StudentContext = createContext();

export const StudentProvider = (props) => {


    const [students,setstudents] = useState([
        {
            name: "mehul kaushal",
            age: 21,
            course: 'MERN',
            batch: "October",
            id: "100"
        },
        {
            name: "joe",
            age: 20,
            course: 'MERN',
            batch: "October",
            id: "101"
        },
        {
            name: "biden",
            age: 21,
            course: 'MERN',
            batch: "October",
            id: "102"
        },
        {
            name: "john",
            age: 20,
            course: 'MERN',
            batch: "October",
            id: "103"
        }
    ]);

    return (
        <StudentContext.Provider value={[students,setstudents]}>
            {props.children}
        </StudentContext.Provider>
    )

}