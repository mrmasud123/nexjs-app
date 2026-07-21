import Link from "next/link";
import {Key} from "react";

export default async function ServerClient() {
    async function fetchUsers(){
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        return data?.users;
    }
    const data=await fetchUsers();


    return (
        <>

            <h2>Server Side Rendering (SSR)</h2>

            {
                data?.map((user: {
                    id: Key | null | undefined;
                    firstName: string | undefined;
                })=> <li key={user?.id}>
                    <Link href={`/server/${Number(user?.id)}`}>{user?.firstName}</Link>
                </li>)
            }
        </>
    );
}