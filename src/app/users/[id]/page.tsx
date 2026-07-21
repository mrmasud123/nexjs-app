"use client"
import {useEffect, useState} from "react";
import { useParams } from "next/navigation";

interface User{
    id: number,
    firstName: string
}
const UserInfo = () => {
    const params = useParams();
    const [user, setUser] = useState<User>();
    useEffect(() => {
        async function getUser() {
            const id = params.id;
            const data=await fetch(`https://dummyjson.com/users/${id}`);
            setUser(await data.json());
        }
        getUser();
    }, [params]);

    return (
        <>
            <h1>User information page</h1>
            {
                user?.firstName
            }
        </>
    );
};

export default UserInfo;