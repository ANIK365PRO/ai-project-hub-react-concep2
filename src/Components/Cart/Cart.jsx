import React from 'react';

const Cart = ({carts, setCarts}) => {
    // console.log(carts)
   const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

   const handlePayment = () => {
        setCarts([])
   }
   const handleDelete = (item) =>{
        const filteredArray = carts.filter(cart => cart.id !== item.id)
        setCarts(filteredArray)
   }

    return (
        <div className='py-5 md:p-10 lg:p-20 bg-linear-to-r from-red-400 via-orange-400 to-amber-400'>
            <h1 className='text-5xl font-black'>Your Cart: {carts.length}</h1>

            {
            carts.length === 0 ? <p className='text-center bg-black text-white text-2xl font-bold p-8 rounded-2xl mt-5'>Cart is empty. Please choose Ai models items. </p> : 
            <>
                <div className='mt-10 space-y-4'>
                {
                    carts.map(item =><div key={item.id} className='border p-5 md:p-8 rounded-2xl bg-zinc-200 flex justify-between items-center'>

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
                            <p className='text-xl md:text-2xl font-bold'>
                                ${item.price}/month</p>
                        
                            <button
                            onClick={()=>handleDelete(item)}
                            className='btn  rounded-full bg-error border-red-500 hover:bg-red-500 h-10 w-10 text-white'>X</button>
                         
                        </section>

                    </div>)
                }

                <section className='flex justify-between items-center bg-black text-white text-2xl font-bold p-8 rounded-2xl'>
                    <h4>Total</h4>
                    <p>${totalPrice}</p>
                </section>
                <section className='btn flex justify-center items-center bg-red-600 text-white text-2xl font-bold py-8 rounded-2xl'
                onClick={handlePayment}>
                   Proceed to checkout
                </section>

            </div>
                
                
            </>


            }

            


        </div>
    );
};

export default Cart;