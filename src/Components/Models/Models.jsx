import React, { use } from 'react';
import ModelsCard from '../ModelsCard/ModelsCard';

const Models = ({modelPromise, carts, setCarts}) => {
    const modelsData = use(modelPromise)
    // console.log(modelsData)


    return (
        <div>
            <div className='text-center py-10'>
                <h2 className='text-4xl font-bold text-center text-red-500'>Choose Your AI Model</h2>
                <p className=''>One subscription gives you access to all frontier AI models</p>
            </div>

                <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto'>
                
                {
                    modelsData.map(models =><ModelsCard key={models.id} models={models} carts={carts} setCarts={setCarts}></ModelsCard>)
                }
                

            </div>

        </div>
    );
};

export default Models;