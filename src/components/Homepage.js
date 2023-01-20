import React from "react";
import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function HomePage() {
    return (
        <div className = "homepage">
            <Header/>
            <SearchBar/>
            <EmployeeList/>
        </div>
        
    ) 
}