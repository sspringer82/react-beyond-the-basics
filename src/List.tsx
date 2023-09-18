import React from 'react';
import ListItem from './ListItem';
import { useNavigate } from 'react-router-dom';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import Person from './Person';

const url = `${import.meta.env.VITE_APP_BACKEND_URL}/users`;

async function getPersons(): Promise<Person[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Response not OK');
  }
  const data = await response.json();
  return data;
}

async function removePerson(id: number) {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Response not OK');
  }
}

const List: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: persons,
    isLoading,
    isError,
  } = useQuery(['persons'], getPersons);

  const mutation = useMutation(removePerson, {
    onSuccess() {
      queryClient.invalidateQueries(['persons']);
    },
  });

  if (isLoading) {
    return <div>...lade Daten</div>;
  }

  if (isError) {
    return <div>{`Ein Fehler ist aufgetreten`}</div>;
  }

  function handleDelete(id: number) {
    mutation.mutate(id);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>birth date</th>
            <th>street</th>
            <th>city</th>
            <th>zip code</th>
          </tr>
        </thead>
        <tbody>
          {persons?.map((person) => (
            <ListItem key={person.id} person={person} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
      <button
        onClick={() => navigate('/create')}
        style={{
          position: 'sticky',
          bottom: 20,
          left: '90%',
        }}
      >
        new
      </button>
    </>
  );
};

export default List;
