"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface User {
    id: number;
    firstName: string;
}

interface UsersResponse {
    users: User[];
}

const UsersPage = () => {
    const [users, setUsers] = useState<UsersResponse>({ users: [] });

    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch("https://dummyjson.com/users");
            const data: UsersResponse = await res.json();
            setUsers(data);
        }
        fetchUsers();
    }, []);

    console.log(users);

    return (
        <>
            <h1>Client Side Rendering (CSR)</h1>
            {users?.users?.map((user: User) => (
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.firstName}</Link>
                </li>
            ))}
        </>
    );
};

export default UsersPage;