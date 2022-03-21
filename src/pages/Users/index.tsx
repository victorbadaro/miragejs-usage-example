import { useEffect, useState } from 'react';
import { api } from '../../services/api';

type User = {
    id: number;
    name: string;
}

export function Users() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await api.get('/users');
            
            setUsers(data.users);
        })();
    }, []);

    return (
        <>
            <h1>Users</h1>

            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}