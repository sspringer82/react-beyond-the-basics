import React from 'react';
import ListItem from './ListItem';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
    return <div>{t('loading')}</div>;
  }

  if (isError) {
    return <div>{t('error')}</div>;
  }

  function handleDelete(id: number) {
    mutation.mutate(id);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{t('firstName')}</th>
            <th>{t('lastName')}</th>
            <th>{t('birthDate')}</th>
            <th>{t('street')}</th>
            <th>{t('city')}</th>
            <th>{t('zipCode')}</th>
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
