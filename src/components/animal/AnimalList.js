import React, { useContext, useState } from "react"
import Animal from "./Animal"
import "./Animal.css"
import { Button, Modal, ModalBody, ModalHeader} from "reactstrap"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import AnimalForm from "./AnimalForm"
import "./Animal.css"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

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
        <div className="animals">
        {
            animals.map(animal => {
                const owner = customers.find(c => c.id === animal.customerId)
                const clinic = locations.find(l => l.id === animal.locationId)

            return <Animal key={animal.id}
                        animal={animal} 
                        customer ={owner}
                        location={clinic}/>
        })
        }
        </div>

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