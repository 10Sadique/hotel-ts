import React from 'react';
import Room from './Room';

type Room = {
    id: string;
    imgURL: string;
    name: string;
    address: string;
    bed: number;
    person: number;
    price: number;
};

const SingleRoom = () => {
    const rooms: Room[] = [
        {
            id: '1',
            imgURL: 'https://a0.muscache.com/im/pictures/32a04978-86d7-445a-9441-111ca31564bf.jpg?im_w=720',
            name: 'Ba hao Residence x SANTIPHAP ROOM',
            address: 'Bangkok, Krung Thep Maha Nakhon, Thailand',
            bed: 1,
            person: 2,
            price: 84,
        },
        {
            id: '2',
            imgURL: 'https://a0.muscache.com/im/pictures/4f0c2866-04d3-4cc6-b718-29a4ab571c56.jpg?im_w=720',
            name: 'Serene&comfort - 87 Old town @ River Pier',
            address: 'Khet Phra Nakhon, Krung Thep Maha Nakhon, Thailand',
            bed: 2,
            person: 3,
            price: 25,
        },
        {
            id: '3',
            imgURL: 'https://a0.muscache.com/im/pictures/miso/Hosting-614187010946679608/original/c049e8e5-72cd-41aa-88dc-6e861b5961ec.jpeg?im_w=720',
            name: 'Warmly welcome to natural garden resort',
            address: 'Pai, Mae Hong Son, Thailand',
            bed: 2,
            person: 4,
            price: 18,
        },
    ];

    const pathId = location.pathname.split('/').at(-1);

    const selectedRoom = rooms.find((room) => room.id === pathId);

    return (
        <div className="flex items-center justify-center my-20">
            {selectedRoom && (
                <div className="bg-gray-300 p-6 rounded-lg shadow-lg text-gray-800 max-w-md md:max-w-2xl lg:max-w-7xl">
                    <h1 className="font-bold text-3xl">{selectedRoom.name}</h1>
                    <div>
                        <img
                            className="my-5 w-full rounded-lg shadow-lg"
                            src={selectedRoom.imgURL}
                            alt=""
                        />
                    </div>
                    <div>
                        <p>{selectedRoom.address}</p>
                        <p className="font-bold text-4xl my-2">
                            ${selectedRoom.price}
                        </p>
                        <p>Bed: {selectedRoom.bed}</p>
                        <p>Person: {selectedRoom.person}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleRoom;
