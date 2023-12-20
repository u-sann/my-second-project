import React from 'react';
import TodoList from '../components/TodoList';
import { defaultConfig } from 'next/dist/server/config-shared';

const Home = ()=>{
    return(
        <div 
    className={`
        group 
        bg-blue-200 hover:bg-gray-600 
        w-auto m-6 text-center p-4 rounded 
        transition duration-300
    `}
>
    <div 
        className={`
        text-black group-hover:text-white 
        font-bold
        `}
    >
    to do app
    </div>
</div>

    )
};
export default Home;