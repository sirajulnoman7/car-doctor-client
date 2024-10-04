import React from 'react';


const BookingRow = ({ books ,handleDelete,updateBooking}) => {
    const { price, date, img, name, _id,status } = books
              
                return (
                    <div>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline btn-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={img}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>

                                    </div>
                                </div>
                            </td>
                            <td>

                                <span className="badge badge-ghost badge-sm">{price}</span>
                            </td>
                            <td>{date}</td>
                            <th>
                                {status==="Confirm" ? <span className='text-md text-blue-600'>Confirm</span>
                                    
                                    :<button onClick={()=>updateBooking(_id)} className="btn btn-warning ">Please Confirm</button>}
                            </th>
                        </tr>

                    </div>
                );
            };

        export default BookingRow;