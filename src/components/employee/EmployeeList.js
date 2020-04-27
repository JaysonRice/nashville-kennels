import React, { useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import { LocationContext } from "../location/LocationProvider"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import EmployeeForm from "./EmployeeForm"
import { EditEmployeeForm } from "./EditEmployeeForm"

export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal);
    return (
        <>
            <Button color="primary" onClick={toggle}>Add New Employee</Button>

            <ul className="employees">
                {
                    employees.map(employee => {
                        const loc = locations.find(l => l.id === employee.locationId)

                        return <Employee key={employee.id} location={loc} employee={employee} />
                    })
                }
            </ul>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Employee
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler={toggle} />
                </ModalBody>
            </Modal>
            < Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    {employees.name}
                </ModalHeader>
                <ModalBody>
                    <EditEmployeeForm key={employees.id} toggleEdit={toggleEdit} {...employees} />
                </ModalBody>
            </Modal >
        </>
    )
}