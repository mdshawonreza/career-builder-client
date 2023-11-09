
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = e => {

        e.preventDefault()
        const displayName = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        const password = e.target.password.value

        setRegisterError('')
        setSuccess('')


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters!')
            return
        } else if (!/^(?=.*[A-Z]).*$/.test(password)) {
            setRegisterError('Password must have at least one Uppercase Character')
            return
        } else if (!/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
            setRegisterError('Password must have at least one Special Character')
            return
        }


        createUser(email, password, photo, displayName)

            .then(result => {
                console.log(result)
                Swal({
                    title: "Good job!",
                    text: "User created successfully",
                    icon: "success",
                    button: "Aww yiss!",
                });
            })
            .catch(error => {
                console.error(error.message)
                setRegisterError(error.message)
            })
    }
    return (
        <div className="bg-base-200">
            <div className="hero min-h-[780px] md:min-h-[60vh] ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register <span className="text-orange-500">now</span>!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-[350px] md:w-[500px]  shadow-2xl bg-base-100">
                        {
                            registerError && <p className="text-red-600 text-center text-sm mt-4 -mb-6 ">{registerError}</p>
                        }

                        {
                            success && <p className="text-green-600 mt-4 -mb-6 text-center text-base font-medium  ">{success}</p>
                        }

                        <form onSubmit={handleRegister} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base font-medium">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base">Email</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-base">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-medium">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="block bg-orange-600  hover:bg-orange-700 hover:border-orange-700 text-white px-2 py-2 font-semibold text-xl w-full rounded-lg">Register</button>
                            </div>
                        </form>

                        <p className="text-center font-medium -mt-8 mb-4">Already Register ? please
                            <Link to="/login">
                                <button className="btn btn-link ">Login</button>
                            </Link>
                        </p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;