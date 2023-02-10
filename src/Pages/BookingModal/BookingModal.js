import React from 'react';

const BookingModal = ({ goods, setModalCondition }) => {
    const { _id, img, name, price, detail } = goods;
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const phone = form.phone.value;
        const msg = form.msg.value;

        const bookingData = {
            img,
            productName: name,
            price,
            phone,
            msg
        }
        console.log(bookingData);
        setModalCondition(0);
    }
    return (
        <>
            < input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box shadow-lg shadow-error-content">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        <div className="text-center">
                            <p className="text-xl font-semibold">{name}</p>
                            <img src={img} alt="" className="w-2/3 mx-auto my-2" />
                            <p className="text-orange-500">Total Price: {price}</p>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone</span>
                                </label>
                                <input type="tel" name='phone' placeholder="+880 1XXXXXXXXX" className="input input-bordered w-full rounded-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Location</span>
                                </label>
                                <input type="text" name='location' placeholder="@ Satkania, Chattogram" className="input italic input-bordered w-full rounded-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea type="text" name='msg' placeholder="Product Looks Good" className="input input-bordered w-full rounded-md" />
                            </div>
                            <div className="modal-action mt-14">
                                <input htmlFor="booking-modal" type="submit" value='Add to Cart' className="uppercase rounded-md w-full bg-gradient-to-r from-info to-error py-3 font-semibold border border-gray-500 hover:scale-y-110 hover:text-gray-100" />
                                {/* {
            user ?
                :
                <>
                    <input htmlFor="cart-modal" type="submit" value='Add to Cart' className="btn btn-disabled rounded-md w-full" disabled />
                    <p className="absolute flex items-center -mt-12 text-xl font-semibold p-2 border-2 rounded-md border-error"><FaExclamationTriangle className="text-yellow-500 mr-2" /> Please, <Link to='/logIn' className="mx-2 link link-hover link-primary">Login</Link> to Add Product</p>
                </>
        } */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;