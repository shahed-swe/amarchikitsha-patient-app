import { Layout } from "../../components/layout";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const {register,handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Layout>
            <section className="bg-white-900  p-2">
                <div className="px-0 py-20 mx-auto max-w-7xl sm:px-4">
                    <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
                        <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">Log in to your account</h1>
                        <form className="mb-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <label className="block">
                                <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
                                <input className="form-input" type="email" placeholder="Ex. james@bond.com" {...register("email", {required: "Email is required"})} />
                            </label>
                            <label className="block">
                                <span className="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
                                <input className="form-input" type="password" placeholder="••••••••" {...register('password', {required: "Password is required"})}/>
                            </label>
                            <button type="submit" className="w-full py-3 mt-1 btn btn-primary">Login</button>
                        </form>
                    </div>
                    <p className="mb-4 text-xs text-center text-gray-400">
                        <span className="text-purple-500 hover:text-purple-400 font-semibold">Don't have an account? <Link classNameName="underline" to="/registration">Registration</Link></span>
                    </p>
                </div>
                
            </section>
        </Layout>
    );
}

export default Login;
