import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Register = () => {
    const {signUp} = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        
        signUp(email, password)
        .then(res => {
            console.log(res.user);
            const createdAt = res?.user.metadata.createdAt
            const user = {email, createdAt: createdAt}
            fetch('https://slash-expresso-emporium-server.onrender.com/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        })
        .catch(error => {
            console.log(error);
        })
    }



    return (
        <div className="bg-[url('https://i.ibb.co.com/6bMvLDn/11.png')]  bg-cover bg-center">
        <div className="lg:max-w-7xl max-w-lg mt-17 rounded-xl py-6 bg-[#F4F3F0]  items-center md:flex-row flex-col flex mx-auto">
            <div className="lg:w-1/2 w-full flex items-center justify-center">
                <img className="lg:h-96 md:flex hidden h-40 ml-0 lg:ml-16 rounded-xl " src="/src/assets/images/more/6.png" alt="" />
            </div>
            <div className="flex lg:w-2/3 w-full rounded-xl lg:max-w-xl  mx-auto  font-raleway justify-center ">
                <form
                onSubmit={handleRegister}
                // onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg w-full px-6 py-8 mx-auto"
                >
                <div className="mb-6">
                    <h3 className="text-gray-800 font-rancho  text-center text-4xl font-bold">
                    Register To Admin
                    </h3>
                </div>
                <div className="">
                    <div>
                    <label className="text-gray-800 font-rancho text-xl block font-bold mt-4">
                        Full Name
                    </label>
                    <div className="relative flex items-center">
                        <input
                        name="name"
                        type="text"
                        required
                        className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                        placeholder="Enter Your Name"
                        // {...register("email", { required: true })}
                        />
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 682.667 682.667"
                        >
                        <defs>
                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                            </clipPath>
                        </defs>
                        <g
                            clipPath="url(#a)"
                            transform="matrix(1.33 0 0 -1.33 0 682.667)"
                        >
                            <path
                            fill="none"
                            strokeMiterlimit="10"
                            strokeWidth="40"
                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                            data-original="#000000"
                            ></path>
                            <path
                            d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                            data-original="#000000"
                            ></path>
                        </g>
                        </svg>
                    </div>
                    {/* {errors.email && (
                    <span className="text-primary text-xs font-medium">
                        Please Enter Your Email
                    </span>
                    )} */}
                    </div>
                    <div>
                    <label className="text-gray-800 font-rancho text-xl block font-bold mt-4">
                        PhotoURL
                    </label>
                    <div className="relative flex items-center">
                        <input
                        name="photo"
                        type="text"
                        // required
                        className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                        placeholder="Give Your Photo URL"
                        // {...register("email", { required: true })}
                        />
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 682.667 682.667"
                        >
                        <defs>
                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                            </clipPath>
                        </defs>
                        <g
                            clipPath="url(#a)"
                            transform="matrix(1.33 0 0 -1.33 0 682.667)"
                        >
                            <path
                            fill="none"
                            strokeMiterlimit="10"
                            strokeWidth="40"
                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                            data-original="#000000"
                            ></path>
                            <path
                            d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                            data-original="#000000"
                            ></path>
                        </g>
                        </svg>
                    </div>
                    {/* {errors.email && (
                    <span className="text-primary text-xs font-medium">
                        Please Enter Your Email
                    </span>
                    )} */}
                    </div>
                    <div>
                    <label className="text-gray-800 font-rancho text-xl block font-bold mt-4">
                        Email
                    </label>
                    <div className="relative flex items-center">
                        <input
                        name="email"
                        type="email"
                        required
                        className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                        placeholder="Enter email"
                        // {...register("email", { required: true })}
                        />
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 682.667 682.667"
                        >
                        <defs>
                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                            </clipPath>
                        </defs>
                        <g
                            clipPath="url(#a)"
                            transform="matrix(1.33 0 0 -1.33 0 682.667)"
                        >
                            <path
                            fill="none"
                            strokeMiterlimit="10"
                            strokeWidth="40"
                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                            data-original="#000000"
                            ></path>
                            <path
                            d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                            data-original="#000000"
                            ></path>
                        </g>
                        </svg>
                    </div>
                    {/* {errors.email && (
                    <span className="text-primary text-xs font-medium">
                        Please Enter Your Email
                    </span>
                    )} */}
                    </div>

                    <div className="mt-4">
                    <label className="text-gray-800 font-rancho text-xl block font-bold ">
                        Password
                    </label>
                    <div className="relative flex items-center">
                        <input
                        name="password"
                        type={showPass ? "text" : "password"}
                        required
                        className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                        placeholder="Enter password"
                        // {...register("password", {
                        //   required: "Password is required",
                        //   minLength: {
                        //     value: 6,
                        //     message: "Password must be at least 6 characters",
                        //   },
                        //   validate: {
                        //     hasUppercase: (value) =>
                        //       /[A-Z]/.test(value) ||
                        //       "Must contain at least one uppercase letter",
                        //     hasLowercase: (value) =>
                        //       /[a-z]/.test(value) ||
                        //       "Must contain at least one lowercase letter",
                        //   },
                        // })}
                        />
                        <svg
                        onClick={() => setShowPass(!showPass)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                        viewBox="0 0 128 128"
                        >
                        <path
                            d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                            data-original="#000000"
                        ></path>
                        </svg>
                    </div>
                    {/* {errors.password && <p>{errors.password.message}</p>} */}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                    <div className="flex items-center">
                        <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                        htmlFor="remember-me"
                        className="ml-1 block text-sm text-gray-800"
                        >
                        Accept Terms And Conditions
                        </label>
                    </div>
                    </div>

                    <div className="mt-6">
                    {/* <button
                        to={"/login"}
                        className="w-full font-semibold rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                    >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Login</span>
                    </button> */}
                    <button className="btn font-rancho bg-[#E3B577] text-xl w-full">Register</button>

                    <p className="text-gray-800 text-sm text-center mt-2">
                        Already have an account ?{" "}
                        <Link className="text-green-500 font-bold" to={"/login"}>
                        Login
                        </Link>
                    </p>
                    </div>
                </div>

                
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;