"use client"
import {useParams} from "next/navigation";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

const User =()=>{
    const params=useParams();
    const {data, error} = useSWR(`https://dummyjson.com/users/${params.id}`,fetcher);

    if(!data){
        return <><h2>Loading...</h2></>;
    }

    if(error){
        return (
            <>
                <h2>Erorr happened!</h2>
            </>
        );
    }
    return (
        <>
            <h2><strong><h2>Client Side Rendering(CSR)</h2></strong></h2>
            <h2>User - {data?.firstName} page</h2>
            <h5>First Name : {data?.firstName}</h5>
            <h5>Last Name : {data?.lastName}</h5>
            <h5>E-mail : {data?.email}</h5>
            <h5>Phone : {data?.phone}</h5>
        </>
    );
}


export default User;