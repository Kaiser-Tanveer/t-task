import React, { useContext, useEffect, useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Zoom } from 'react-reveal';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';
import SingleCart from './SingleCart';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    // fetching data according to mail query 
    useEffect(() => {
        fetch(`http://localhost:5000/myBookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [user?.email]);
    return (
        <Zoom>
            <div className='w-5/6 container mx-auto shadow-lg rounded-lg'>
                <Table className="rounded-lg">
                    <Thead>
                        <Tr className="h-12 border border-gray-400 border-b-0 shadow-lg bg-gradient-to-r from-info to-secondary">
                            <Th>Products Image</Th>
                            <Th>Products Name</Th>
                            <Th>Email</Th>
                            <Th>Price</Th>
                            <Th className="mb-4">Remove</Th>
                        </Tr>
                    </Thead>
                    <Tbody className="text-center rounded-lg">
                        {
                            bookings.map(booking => <SingleCart
                                key={booking._id}
                                booking={booking}
                            />)
                        }
                    </Tbody>
                </Table>
            </div>
        </Zoom>
    );
};

export default Cart;