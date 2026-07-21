import Link from "next/link";
interface User {
    id:number,
    firstName: string,
}
export default async function StaticUsers() {
    async function fetchUsers() {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        return data?.users;
    }

    const data = await fetchUsers();

    return (
        <>
            <h2>Static Site Generation (SSG)</h2>

            {data?.map((user : User) => (
                <li key={user?.id}>
                    <Link href={`/static/${user?.id}`}>{user?.firstName}</Link>
                </li>
            ))}
        </>
    );
}