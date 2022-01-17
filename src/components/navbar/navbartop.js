import { Link } from "react-router-dom";
import NavImg from '../../assets/img/logo.png'
import { useState } from 'react'

export const NavbarTop = () => {

    const [notification, setNotification] = useState(false)
    const newnots = [
        {
            message: "Medicine Taking time is appearing in 6 minutes"
        },
        {
            message: "Next follow ups date is 1st february 20222"
        },
        {
            message:"Medicine Taking time is appearing in 20 minuets"
        }
    ]

    return (
        <div className="sticky top-0 bg-white shadow">
            <nav className="px-4 flex justify-between bg-white h-16 border-b-2 ">


                <ul className="flex items-center">
                    <Link to="/">
                        <li className="h-6 w-6">
                            <img
                                className="h-full w-full mx-auto"
                                src={NavImg}
                                alt="svelte logo" />
                        </li>
                    </Link>
                </ul>

                <ul className="flex items-center">

                    <li>
                        <h1 className="pl-8 lg:pl-0 text-gray-700 font-bold">Patient App</h1>
                    </li>
                </ul>


                <div class="flex items-center">
                    <div class="relative inline-block">
                        <button class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none" onClick={() => setNotification(!notification)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-bell">
                                <path
                                    d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                        </button>
                        {!notification ? null : 
                        <div class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                            {newnots.map((item, index) => {
                                return (
                                    <div class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> {item.message} </div>
                                )
                            })}
                        </div>}
                    </div>
                </div>

            </nav>
        </div>
    )
}