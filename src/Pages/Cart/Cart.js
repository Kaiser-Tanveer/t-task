import React, { useContext, useEffect, useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Zoom } from 'react-reveal';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import SingleCart from './SingleCart';
import Spinner from '../Spinner/Spinner';
import useTitle from '../../Components/myHook/useTitle';

const Cart = () => {
    useTitle('Cart');
    const { user, logOut } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);


    // fetching data according to mail query 
    useEffect(() => {
        if (!loading) {
            fetch(`https://t-task-server.vercel.app/myBookings?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer${localStorage.getItem("my-token")}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        logOut()
                    }
                    return res.json();
                })
                .then(data => {
                    setBookings(data);
                })
        }
    }, [user?.email, loading]);

    if (loading) {
        return <Spinner />
    }
    return (
        <Zoom>
            <div className='w-5/6 container mx-auto shadow-lg rounded-lg min-h-screen'>
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
                                setLoading={setLoading}
                            />)
                        }
                    </Tbody>
                </Table>
            </div>
        </Zoom>
    );
};

export default Cart;