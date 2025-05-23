import React from 'react';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log("data", data)
        fetch(`https://journey-junction-server.vercel.app/makeAdmin/${data.email}`,
            {
                method: 'PUT',

                headers: {
                    'Content-Type': 'application/json'



                },


            }

        )
            .then(res => res.json())
            .then(data => console.log(data))
        reset()
    };

    return (
        <div class="flex  h-screen" style={{ border: "2px solid red" }}>
            <div class="text-center">
                {/* <h1 class="text-xl font-bold">Make Admin</h1> */}
                <form class="mt-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex '>
                        <h1 class="text-xl  pr-5">Make Admin</h1>
                        <input class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" type='email' {...register("email")} />
                    </div>

                    <br />
                    <input class="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer" type="submit" />
                </form>
            </div>
        </div>




    );
};

export default MakeAdmin;