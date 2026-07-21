type Props = {
    params: Promise<{ id: string }>;
};

const User = async ({ params }: Props) => {
    const { id } = await params;

    async function fetchUser() {
        const res = await fetch(`https://dummyjson.com/users/${id}`);
        return res.json();
    }

    const user = await fetchUser();


    return (
        <>
            <h2><strong>Server Side Rendering (SSR)</strong></h2>
            <h5>First Name: {user?.firstName}</h5>
            <h5>Last Name: {user?.lastName}</h5>
            <h5>E-mail: {user?.email}</h5>
            <h5>Phone: {user?.phone}</h5>
        </>
    );
};

export default User;