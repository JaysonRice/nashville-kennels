import React, { useState, useContext } from "react"
import { Button, Modal, ModalBody, ModalHeader} from "reactstrap"
import { EditEmployeeForm } from "./EditEmployeeForm"
import { EmployeeContext } from "./EmployeeProvider"

const employees = useContext(EmployeeContext)

const employee = employees.map(employee => {
     employee.id
)

export default () => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
        <Button color="primary" className={"button--" + employee.id} onClick={() => {
            // check if the user is authenticated
            const userId = localStorage.getItem("kennel_customer")
            if(userId){
                // If the user is authenticated, show the animal form
                toggle()
            }
        }}>Edit Employee</Button>

        <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Save
                </ModalHeader>
                <ModalBody>
                    <EditEmployeeForm toggler={toggle}/>
                </ModalBody>
            </Modal>
        </>
    )
}