import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <div>
                <Link to={`/rooms/${1}`}>Room</Link>
            </div>
        </div>
    );
};

export default Home;
