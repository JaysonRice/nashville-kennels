import React from "react"
import LocationList from "./location/LocationList"
import EmployeeList from "./employee/EmployeeList"
import CustomerList from "./customer/CustomerList"
import AnimalList from "./animal/AnimalList"
import "./animal/Animal.css"
import "./employee/Employee.css"
import "./customer/Customer.css"
import "./location/Location.css"
import { LocationProvider } from "./location/LocationProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { AnimalProvider } from "./animal/AnimalProvider"


export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <AnimalList />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

        <h2>Employees</h2>
            <EmployeeProvider>
                <EmployeeList />
            </EmployeeProvider>

        <h2>Locations</h2>
            <LocationProvider>
                <LocationList />
            </LocationProvider>

        <h2>Customers</h2>
            <CustomerProvider>
                <CustomerList />
            </CustomerProvider>
    </>
)