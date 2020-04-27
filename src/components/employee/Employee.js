import React from "react"
import  EditEmployeeButton from "./EditEmployeeButton"

export default ({ employee, location }) => (

     <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__branch">{location.name}</div>
        <EditEmployeeButton/>
    </section>
)