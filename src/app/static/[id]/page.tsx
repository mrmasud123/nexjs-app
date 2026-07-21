interface User{
    id:number
}

export async function generateStaticParams() {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();

    return data?.users?.map((user: User)  => ({
        id: String(user.id),
    }));
}
type Props = {
    params: Promise<{ id: string }>;
};

export default async function StaticUser({ params }: Props) {
    const { id } = await params;

    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const user = await res.json();

    return (
        <>
            <h2><strong>Static Site Generation (SSG)</strong></h2>
            <p>User ID: {id}</p>
            <p>Name: {user?.firstName} {user?.lastName}</p>
        </>
    );
}