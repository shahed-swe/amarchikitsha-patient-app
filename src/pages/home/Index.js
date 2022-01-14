import { Layout } from "../../components/layout";

const Home = () => {
    return (
        <Layout>
            <section className="px-4 py-2 mx-auto max-w-7xl">
                <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Features</h2>
                <p className="mb-16 text-lg text-gray-500">Get insights to dig down into what's powering your growth the most.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 lg:gap-x-24 gap-y-20">
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-red-600 bg-red-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Personal Emails</h3>
                        <p className="text-sm text-gray-500">Hand crafted dashboards for everything from Recurring Revenue to Customer Churn.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-pink-600 bg-pink-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Why a beaker icon?</h3>
                        <p className="text-sm text-gray-500">Your central hub that helps you see, and react to, absolutely everything that’s happening.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-yellow-600 bg-yellow-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Clickable</h3>
                        <p className="text-sm text-gray-500">Stay informed with daily, weekly, or monthly reports on all your insights data.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-green-600 bg-green-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                                    clip-rule="evenodd"
                                />
                                <path
                                    fill-rule="evenodd"
                                    d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                                    clip-rule="evenodd"
                                />
                                <path fill-rule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Finger Printing</h3>
                        <p className="text-sm text-gray-500">Our forecasting is your magical crystal ball that helps you predict and plan for the future.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-purple-600 bg-purple-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Performance on Fire</h3>
                        <p className="text-sm text-gray-500">How does your company compare? Learn how your company stacks up in the industry.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-blue-600 bg-blue-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Love is in the Air</h3>
                        <p className="text-sm text-gray-500">Organize your customers to bring meaningful and comparative insights across your dashboards.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-indigo-600 bg-indigo-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Thunder and Lightning</h3>
                        <p className="text-sm text-gray-500">Improve your conversion rates by monitoring exactly what’s going on while your customers are in trial.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-purple-600 bg-purple-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path
                                    d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Puzzles</h3>
                        <p className="text-sm text-gray-500">Personalized segmentation, rich customer profiles, manual subscriptions, and more!</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-pink-600 bg-pink-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Sparkles</h3>
                        <p className="text-sm text-gray-500">Merge external data with your metrics for deeper insights in to your customers and your business.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-red-600 bg-red-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Stars</h3>
                        <p className="text-sm text-gray-500">Want your metrics in other services? Extend and integrate to our every part of your business.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-green-600 bg-green-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Support</h3>
                        <p className="text-sm text-gray-500">Send important updates from here to your team’s Support channels.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-blue-600 bg-blue-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z"
                                    clip-rule="evenodd"
                                />
                                <path
                                    d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Finger Printing for Robots</h3>
                        <p className="text-sm text-gray-500">Goals, Breakouts, Instant notifications, Comparisons, Annotations and Cohort Analysis!</p>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
export default Home