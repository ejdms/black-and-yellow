import React from "react";
import Person from "./Person";

const Persons = ({ persons }) => {
  const displayPersons = persons.map(person => (
    <Person
      key={person.id}
      src={person.imgSrc}
      moveable={person.moveable}
      text={person.text}
    />
  ));

  return <div className="persons">{displayPersons}</div>;
};

export default Persons;
