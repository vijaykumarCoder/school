import React from 'react'
import data from '../data.js'

export default function DetailStudScreen(props) {
    const stud = data.allStudents.find((x)=> x.id===props.match.params.id)
    return (
        <div className="wrapper">
    <div className="left">
       <h4>{stud.name}</h4>
          <p>S/o : {stud.fatherName}</p>
          <p>{stud.rollNo}</p>
          <p>{stud.position}</p>
          <p>{stud.department}</p>
    </div>
    <div clas̥sName="right">
        <div className="info">
            <h3>Information</h3>
            <div className="info_data">
                 <div className="data">
                    <h4>Email</h4>
                    <p>{stud.email}</p>
                 </div>
                 <div className="data">
                   <h4>Phone</h4>
                    <p>{stud.contact}</p>
              </div>
              <div className="data">
                    <h4>Grade</h4>
                    <p>{stud.avergaeMarks}</p>
                 </div>
            </div>
        </div>
      
      <div className="projects">
            <h3>Projects</h3>
            <div className="projects_data">
                 <div className="data">
                    <h4>Recent</h4>
                    <p>{stud.project}</p>
                 </div>
            </div>
        </div>
    </div>
</div>
    )
}
