import React from "react"

export const Animal = ({animal, customer, location}) => (
    <section className="animal">
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__owner">Owner: {customer.name}</div>
        <div className="animal__branch">Kennel: {location.name}</div>
    </section>
)