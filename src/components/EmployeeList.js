import React from "react";
import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList(props) {
    return (
        <div className="employeeList">
            <EmployeeListItem
            image= "\image\man-avatar-character-isolated-icon-free-vector.jpg"
            name = "James King"
            designation = "President and CEO"/>
            <EmployeeListItem
            image= "\image\images.jpg"
            name = "Julie Taylor"
            designation = "VP of Marketing"/>
            <EmployeeListItem
            image= "\image\female-avatar-icon-flat-style-female-user-icon-cartoon-woman-avatar-pink-hair-vector-stock-91462795.jpg"
            name = "Eugene Lee"
            designation = "CFO"/>
            <EmployeeListItem
            image= "\image\beautiful-woman-avatar-character-icon-free-vector.jpg"
            name = "John Williams"
            designation = "VP of Engineering"/>
            <EmployeeListItem
            image= "\image\beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg"
            name = "Ray Moore"
            designation = "VP of Sales"/>
            <EmployeeListItem
            image= "\image\avtaarlady.jpg"
            name = "Paul Jones"
            designation = "QA Manager"/>
        </div>   
    );
}