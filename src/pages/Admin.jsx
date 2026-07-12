import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Admin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { admin, login, logout } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!login(username, password)) {
            alert('Wrong credentials!');
        }
    };

    if (admin) {
        return (
            <div className="p-10">
                <h1>Welcome Admin: {admin.username}</h1>
                <button onClick={logout}>Logout</button>
            </div>
        )
    }

    return (
        <div className="p-10">
            <h1>Admin Login</h1>
            <form onSubmit={handleLogin}>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}