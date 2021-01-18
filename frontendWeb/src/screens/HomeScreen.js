import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../index.css'

export default function HomeScreen() {
  const [allStudents , setallStudents] = useState([]);
  useEffect(() => {
    const fecthData = async () =>{
      const { data } = await axios.get("/api/students/")
      setallStudents(data)
    };
fecthData();
  }, []);

    return (
        <div>
        <table>
              <tr  id="header">
                <th>Student Name</th>
                <th>Student RollNo</th>
                <th>Student Department</th>
              </tr>
        {
          allStudents.map( (student) => (
            // <div>
            //   <a href={`/student/${student.id}`}><span>{student.id}</span>{student.name}</a>
            // </div>
            
              <tr>
              
                <td><a href={`/student/${student.id}`}>
                {student.name}
                </a></td>
                <td><a href={`/student/${student.id}`}>
                {student.rollNo}
               </a></td>
                <td><a href={`/student/${student.id}`}>
                {student.department}
               </a></td>
              </tr>
          ))
        }
        </table>
    </div>
    )
}
