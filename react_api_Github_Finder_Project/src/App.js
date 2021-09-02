import { useEffect, useState } from "react";
import "./App.css";
import Skeleton from "./components/Skeleton";
import User from "./components/User";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://api.github.com/search/users?q=" + search)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data.items);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} />
        <button type="submit">Search...</button>
      </form>
      {loading && [1, 2, 3, 4, 5].map((n) => <Skeleton key={n} />)}
      {!loading && (
        <div className="container">
          {users.map((user, index) => {
            return <User key={index} userItem={user} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
