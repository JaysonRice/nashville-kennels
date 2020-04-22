import React from "react"
import "./Kennel.css"
import "./animal/Animal.css"
import "./employee/Employee.css"
import "./customer/Customer.css"
import "./location/Location.css"
import LocationList from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import AnimalList from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"
import CustomerList from "./customer/CustomerList"

export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <AnimalProvider>
            <CustomerProvider>
                <EmployeeProvider>
                    <LocationProvider>
                        <h2>Animals</h2>
                        <AnimalList />
                        <h2>Locations</h2>
                        <LocationList />
                        <h2>Customers</h2>
                        <CustomerList />
                        <h2>Employees</h2>
                        <EmployeeList />
                    </LocationProvider>
                </EmployeeProvider>
            </CustomerProvider>
        </AnimalProvider>
    </>
)