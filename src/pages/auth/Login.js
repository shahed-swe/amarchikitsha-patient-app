import { Layout } from "../../components/layout";

const Login = () => {
    return (
        <Layout>
            <section class="bg-white-900 text-left p-2">
                <div class="px-0 py-20 mx-auto max-w-7xl sm:px-4">
                    <div class="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
                        <h1 class="mb-4 text-lg font-semibold text-left text-gray-900">Log in to your account</h1>
                        <form class="mb-8 space-y-4">
                            <label class="block">
                                <span class="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
                                <input class="form-input" type="email" placeholder="Ex. james@bond.com" inputmode="email" required />
                            </label>
                            <label class="block">
                                <span class="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
                                <input class="form-input" type="password" placeholder="••••••••" required />
                            </label>
                            <button type="submit" class="w-full py-3 mt-1 btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Login;