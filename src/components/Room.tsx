import React from 'react';
import { FaBed } from 'react-icons/fa';
import { ImManWoman } from 'react-icons/im';
import { Link } from 'react-router-dom';

type Props = {
    room: {
        id: number;
        imgURL: string;
        name: string;
        address: string;
        bed: number;
        person: number;
        price: number;
    };
};

const Room: React.FC<Props> = ({ room }: Props): JSX.Element => {
    return (
        <div className="bg-gray-300 p-4 rounded-lg shadow-lg">
            <div className="mb-4">
                <img
                    className="w-full rounded-md shadow-md"
                    src={room.imgURL}
                    alt={room.name}
                />
            </div>
            <div>
                <h2 className="font-2xl font-bold text-gray-800">
                    {room.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1 h-10">
                    {room.address}
                </p>
                <p className="font-black text-3xl text-gray-800 mb-3">
                    ${room.price}
                </p>
                <div className="text-gray-800 flex items-center justify-between gap-6">
                    <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center justify-center gap-2 flex-1">
                            <FaBed className="h-5 w-5" />
                            <span>{room.bed}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 flex-1">
                            <ImManWoman className="h-4 w-4" />
                            <span>{room.person}</span>
                        </div>
                    </div>
                    <Link to={`/rooms/${room.id}`} className="">
                        <button className="bg-purple-600 text-white py-2 px-7 rounded-md shadow-md shadow-purple-600/50">
                            Book
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Room;
