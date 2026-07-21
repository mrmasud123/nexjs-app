"use client"
import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import useSWR from "swr";

// const fetcher = (url: string) => fetch(url).then(res => res.json());
const fetcher = (...args: [RequestInfo | URL, RequestInit?]) =>
    fetch(...args).then(res => res.json());
const ClientUser = () => {
    const {data, error} = useSWR("https://dummyjson.com/users", fetcher);


    if (!data) {
        return <><h2>Loading...</h2></>;
    }

    if (error) {
        return (<>
            <h2>Error happened!</h2>
        </>);

    }

    return (
        <>
            <h2><strong><h2>Client Side Rendering(CSR)</h2></strong></h2>
            {
                data?.users?.map((user: {
                    id: Key | null | undefined;
                    firstName: string | undefined;
                }) => <li key={user?.id}>
                    <Link href={`/client/${Number(user?.id)}`}>{user?.firstName}</Link>
                </li>)
            }
        </>
    );
}


export default ClientUser;