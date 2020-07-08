import { useUser } from 'use-okta';

function Home() {
    const { user } = useUser();

    return (
        <div>{user.name}</div>
    )
}

export default Home;
