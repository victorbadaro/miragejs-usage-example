import { FormEvent, useEffect, useState } from 'react';
import { api } from '../../services/api';

type User = {
    id: number | string;
    name: string;
}

export function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState('');

    useEffect(() => {
        (async () => {
            const { data } = await api.get('/users');
            
            setUsers(data.users);
        })();
    }, []);

    async function handleFormSubmit(e: FormEvent) {
        e.preventDefault();

        const { data } = await api.post('/users', { name });
        setUsers([ ...users, data.user ]);
    }

    return (
        <>
            <h1>Users</h1>

            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <form action="post" onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={event => setName(event.target.value)}
                    value={name}
                />
                <button type="submit">Add user</button>
            </form>
        </>
    );
}