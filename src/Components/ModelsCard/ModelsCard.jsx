import React, { useState } from 'react';

const ModelsCard = ({models}) => {
    const [isSubscribe, setIsSubscribe] = useState(false)
    const handleIsSubscribe = () =>{
        setIsSubscribe(true)
    }

    return (
        <div className="card bg-base-100 shadow-lg">
            <figure className='bg-zinc-300 p-5'>
                <img
                    src={models.image}
                    alt={models.title} 
                    className=' overflow-hidden w-40 h-40 object-contain'/>
            </figure>
    

            <div className='card-body flex-1'> 
                <section className="text-2xl font-bold">
                            {models.title}
                </section>  

            <section>{models.description}</section>

                <section className='text-lg font-semibold'>Price: {models.price}</section>
                                
                        
            </div>
                <button 
                    onClick={handleIsSubscribe}
                    className={`btn w-full rounded-2xl text-white mb-4 ${isSubscribe ?'bg-linear-to-r from-red-400 via-orange-400 to-amber-400' : 'bg-red-500'}`}> 
                    {
                        isSubscribe ? 'Subscribe' : 'Subscribe Now'
                    }
                </button>

        </div>
    );
};

export default ModelsCard;