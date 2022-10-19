import React from 'react';
import Room from '../components/Room';

type Room = {
    id: number;
    imgURL: string;
    name: string;
    address: string;
    bed: number;
    person: number;
    price: number;
};

const Home = () => {
    const rooms: Room[] = [
        {
            id: 1,
            imgURL: 'https://a0.muscache.com/im/pictures/32a04978-86d7-445a-9441-111ca31564bf.jpg?im_w=720',
            name: 'Ba hao Residence x SANTIPHAP ROOM',
            address: 'Bangkok, Krung Thep Maha Nakhon, Thailand',
            bed: 1,
            person: 2,
            price: 84,
        },
        {
            id: 2,
            imgURL: 'https://a0.muscache.com/im/pictures/4f0c2866-04d3-4cc6-b718-29a4ab571c56.jpg?im_w=720',
            name: 'Serene&comfort - 87 Old town @ River Pier',
            address: 'Khet Phra Nakhon, Krung Thep Maha Nakhon, Thailand',
            bed: 2,
            person: 3,
            price: 25,
        },
        {
            id: 3,
            imgURL: 'https://a0.muscache.com/im/pictures/miso/Hosting-614187010946679608/original/c049e8e5-72cd-41aa-88dc-6e861b5961ec.jpeg?im_w=720',
            name: 'Warmly welcome to natural garden resort',
            address: 'Pai, Mae Hong Son, Thailand',
            bed: 2,
            person: 4,
            price: 18,
        },
    ];

    return (
        <div className="mb-20">
            <h1 className="font-bold text-4xl text-gray-800 text-center my-16">
                Book Your Favorite Room Now!!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-24 md:mx-10 mx-5">
                {rooms.map((room: Room) => (
                    <Room key={room.id} room={room} />
                ))}
            </div>
        </div>
    );
};

export default Home;
