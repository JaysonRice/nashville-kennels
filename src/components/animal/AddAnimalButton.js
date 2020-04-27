import React, { useContext, useState } from "react"
import "./Animal.css"
import { Button, Modal, ModalBody, ModalHeader} from "reactstrap"
import AnimalForm from "./AnimalForm"
import "./Animal.css"

export default () => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
        <Button color="primary" onClick={() => {
            // check if the user is authenticated
            const userId = localStorage.getItem("kennel_customer")
            if(userId){
                // If the user is authenticated, show the animal form
                toggle()
            }
        }}>Make Appointment</Button>

        <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Admit an Animal
                </ModalHeader>
                <ModalBody>
                    <AnimalForm toggler={toggle}/>
                </ModalBody>
            </Modal>
        </>
    )
}