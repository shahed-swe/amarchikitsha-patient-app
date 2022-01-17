import { Layout } from "../../components/layout";
import Doctime from  '../../assets/img/doctime.png'
import Reneta from '../../assets/img/reneta.jpg'

const Home = () => {
    return (
        <Layout>


            <section className="px-4 py-2 mx-auto max-w-7xl">
                <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Features</h2>
                <p className="mb-16 text-lg text-gray-500">Features have integrated in this system.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 lg:gap-x-24 gap-y-20">
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-red-600 bg-red-100 rounded-full">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Medicine Taking Time System</h3>
                        <p className="text-sm text-gray-500">Hand crafted dashboards for everything from Recurring Revenue to Customer Churn.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-center w-8 h-8 mb-4 text-pink-600 bg-pink-100 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Follow Up Consultation Time</h3>
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
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">Medicine Information/Details Showing</h3>
                        <p className="text-sm text-gray-500">Stay informed with daily, weekly, or monthly reports on all your insights data.</p>
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
                        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">24/7 Support System</h3>
                        <p className="text-sm text-gray-500">Goals, Breakouts, Instant notifications, Comparisons, Annotations and Cohort Analysis!</p>
                    </div>
                </div>
            </section>
            <section class="px-4 py-24 mx-auto max-w-7xl">
                <h1 class="mb-3 text-3xl font-bold leading-tight text-center text-gray-900 md:text-4xl">Trusted by 5200+, built by 17</h1>
                <p class="mb-16 text-lg text-center text-gray-600">Organizations of all sizes trust Hellonext to manage patient feedback</p>
                <div class="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-6">
                    <div class="flex items-center justify-center">
                        <img src={Doctime} alt="Todoist Logo" class="block object-contain h-16" />
                    </div>
                    <div class="flex items-center justify-center">
                        <img src={Reneta} alt="Slack Logo" class="block object-contain h-16" />
                    </div>
                    <div class="flex items-center justify-center">
                        <img src={Doctime} alt="Typeform Logo" class="block object-contain h-16" />
                    </div>
                    <div class="flex items-center justify-center">
                        <img src={Reneta} alt="Algolia Logo" class="block object-contain h-16" />
                    </div>
                    <div class="flex items-center justify-center">
                        <img src={Doctime} alt="Postcss Logo" class="block object-contain h-16" />
                    </div>
                    <div class="flex items-center justify-center">
                        <img src={Reneta} alt="Yahoo Logo" class="block object-contain h-16" />
                    </div>
                </div>
            </section>


        </Layout>
    )
}
export default Home