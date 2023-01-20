import React from "react";
//import EmployeeList from "./EmployeeList";

export default function EmployeeListItem(props) {
    return(
        < div className="employeelistitem">
            <img className = "img" src={props.image} alt=""></img>
            <section className="employee">
                {props.name}
                <br></br>
                <small className="designation">{props.designation}</small>
            </section>
            
            
            
        </div>
        
    );
}