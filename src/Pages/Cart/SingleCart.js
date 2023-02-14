import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Td, Tr } from 'react-super-responsive-table';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const SingleCart = ({ booking, setLoading }) => {
    const { user } = useContext(AuthContext);
    const { img, productName, price, email, _id } = booking;

    const removeHandler = id => {
        setLoading(true);
        const proceed = window.confirm('Are you sure to delete!!!');
        if (proceed) {
            fetch(`https://t-task-server.vercel.app/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Product Deleted Successfully!!');
                        setLoading(false);
                    }
                })
        }
    }
    return (
        <>
            {
                (user.email === email) ?
                    <Tr
                        className="border border-gray-400 bg-gray-50 border-x-0"
                    >
                        <Td><img src={img} alt="product-img" className='w-16 flex mx-auto shadow-md' /></Td>
                        <Td className="font-semibold text-info">{productName}</Td>
                        <Td>{email}</Td>
                        <Td className="font-semibold text-info">Rs. {price}</Td>
                        <Td><FaTrashAlt
                            onClick={() => removeHandler(_id)}
                            className='flex mx-auto mb-4 text-4xl text-error p-2 rounded-md hover:scale-125 duration-500 hover:border hover:border-info hover:shadow-lg' /></Td>
                    </Tr>
                    :
                    <h2 className='text-5xl text-info text-center'>Please, Add An Order</h2>
            }
        </>
    );
};

export default SingleCart;