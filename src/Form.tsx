import React, { useEffect } from 'react';
import { InputPerson } from './Person';
import { useParams, useNavigate } from 'react-router-dom';
import usePerson from './usePerson';
import { useForm } from 'react-hook-form';
import './Form.css';

const initialPerson: InputPerson = {
  firstName: '',
  lastName: '',
  birthdate: '',
  street: '',
  city: '',
  zipcode: '',
};

const Form: React.FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<InputPerson>();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const { handleSave } = usePerson();

  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/users/${id}`)
        .then((response) => response.json())
        .then((data) => reset(data));
    }
  }, [id]);

  return (
    <form
      onSubmit={handleSubmit((person) => {
        handleSave(person);
        navigate('/');
      })}
    >
      <label>
        first name:{' '}
        <input
          type="text"
          {...register('firstName', { required: true })}
          className={errors.firstName && 'error'}
        />
      </label>
      {errors.firstName && <div>This field is required</div>}
      <label>
        last name: <input type="text" {...register('lastName')} />
      </label>
      <label>
        birth date: <input type="text" {...register('birthdate')} />
      </label>
      <label>
        street: <input type="text" {...register('street')} />
      </label>
      <label>
        city: <input type="text" {...register('city')} />
      </label>
      <label>
        zip code: <input type="text" {...register('zipcode')} />
      </label>
      <button type="submit">save</button>
      <button
        type="reset"
        onClick={() => {
          setPerson(initialPerson);
          navigate('/');
        }}
      >
        cancel
      </button>
    </form>
  );
};

export default Form;
