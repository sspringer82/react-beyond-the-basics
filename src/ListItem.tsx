import React from 'react';
import Person from './Person';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';

type Params = {
  person: Person;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<Params> = ({ person, onDelete }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <tr>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>
        {t('birthDateDate', { value: new Date(person.birthdate).getTime() })}
      </td>
      <td>{person.street}</td>
      <td>{person.city}</td>
      <td>{person.zipcode}</td>
      <td>
        <Button
          onClick={() => onDelete(person.id)}
          startIcon={<DeleteIcon />}
          variant="outlined"
        >
          delete
        </Button>
      </td>
      <td>
        <Button
          onClick={() => navigate(`/edit/${person.id}`)}
          startIcon={<EditIcon />}
          variant="outlined"
        >
          edit
        </Button>
      </td>
    </tr>
  );
};

export default ListItem;
