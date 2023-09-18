type Person = {
  id: number;
  firstName: string;
  lastName: string;
  birthdate: string;
  street: string;
  city: string;
  zipcode: string;
};

export default Person;

export type InputPerson = Omit<Person, 'id'> & { id?: number };
