import { useCallback, useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useInput";

export default function EffectsSection() {
  const input = useInput("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await responce.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3 className="centered">Эффекты</h3>
      <p>Здесь будет информация об эффектах</p>

      <Button onClick={() => setIsModalOpen(true)}>Click me</Button>

      <Modal open={isModalOpen}>
        <h2>Modal window</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aut
          nesciunt at quam doloremque labore, amet porro. Assumenda nisi enim,
          in iure incidunt, quis perspiciatis molestias veniam, architecto non
          officia.
        </p>
        <Button onClick={() => setIsModalOpen(false)}>Close</Button>
      </Modal>

      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>
                  {user.name} ({user.email})
                </li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
