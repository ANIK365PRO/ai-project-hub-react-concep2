import React from 'react';

const Cart = ({carts}) => {
    console.log(carts)
    return (
        <div className=' md:p-10 lg:p-20 bg-linear-to-r from-red-400 via-orange-400 to-amber-400'>
            <h1 className='text-5xl font-black'>Total Cart: {carts.length}</h1>

            <div className='mt-10 space-y-4'>
                {
                    carts.map(item =><div className='border p-5 md:p-8 rounded-2xl bg-zinc-200 flex justify-between items-center'>

                        <section className='flex items-center gap-2.5'>
                           <div>
                             <img src={item.image} alt="" className='w-16 h-16 md:w-20 md:h-20' />
                           </div>
                           <div>
                                <h4 className='md:text-2xl font-medium'>{item.title}</h4>
                                <p className='lg:flex hidden'>{item.description}</p>
                           </div>
                        </section>
                        <section className='flex gap-3 items-center'>
                            <p className='md:text-2xl font-bold'>
                                ${item.price}</p>
                            
                            <p className='btn md:not-visited:text-xl text-red-600'>Remove</p>
                        </section>

                    </div>)
                }

                <section className='flex justify-between items-center bg-black text-white text-2xl font-bold p-8 rounded-2xl'>
                    <h4>Total</h4>
                    <p>$ 0</p>
                </section>

            </div>


        </div>
    );
};

export default Cart;