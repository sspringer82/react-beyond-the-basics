import React from 'react';
import Person from './Person';
import { useNavigate } from 'react-router-dom';

type Params = {
  person: Person;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<Params> = ({ person, onDelete }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.birthdate}</td>
      <td>{person.street}</td>
      <td>{person.city}</td>
      <td>{person.zipcode}</td>
      <td>
        <button onClick={() => onDelete(person.id)}>delete</button>
      </td>
      <td>
        <button onClick={() => navigate(`/edit/${person.id}`)}>edit</button>
      </td>
    </tr>
  );
};

export default ListItem;
