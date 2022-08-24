import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const notify = () => {
    toast.success("Login Success", {
      position: toast.POSITION.TOP_CENTER
    });
  };
  const errorfy = () => {
    toast.error("You should give true infos", {
      position: toast.POSITION.TOP_CENTER
    });
  };
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setusers(data)
      })
  }, []);
  const [users, setusers] = useState([]);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');

  function handleChangeName(e) {
    setname(e.target.value)
    console.log(e.target.value);
  }
  function handleChangeEmail(e) {
    setemail(e.target.value)
    console.log(e.target.value);
  }
  function handleSubmit() {
    users.map(i => i.email === email || i.name === name ?
      notify()
      :
      errorfy()
    )
  }
  return <div className="w-full ">
    <section className="h-full gradient-form bg-rose-300 md:h-screen">
      <ToastContainer />
      <div className=" px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12 ">
            <div className="block  bg-white shadow-lg rounded-lg">
              <div className="lg:flex  lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Your Education Coach</h4>
                    </div>
                    <form>
                      <p className="mb-4">Please login to your account</p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                          value={name}
                          onChange={handleChangeName}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                          value={email}
                          onChange={handleChangeEmail}
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block bg-gradient-to-r from-rose-700 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          onClick={handleSubmit}

                        >
                          Log in
                        </button>
                        <a className="text-gray-500" href="#!">Forgot password?</a>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="lg:w-6/12 flex bg-gradient-to-r from-rose-500 items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"

                >
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6">You are most useful app, If you are thinking about your children education life.</h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>;
};

export default Login;
