import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/a" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="*"
          element={<div>oh noez, your content is not there</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};

const List = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/">This is a link</Link>
      <button onClick={() => navigate('/')}>go to</button>
    </div>
  );
};

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [person, setPerson] = useState<Person>();
  useEffect(() => {
    fetch('/wasweissich/' + id)
      .then((response) => response.json())
      .then((data) => setPerson(data));
  }, [id]);
  return <div>{id}</div>;
};
