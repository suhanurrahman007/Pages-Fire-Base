import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../FireBase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [showText, setShowText] = useState(false);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    let re = /[A-Z]/;

    if (password.length < 6) {
      setLoginError("Password should be at least 6 characters");
      return;
    } else if (!re.test(password)) {
      setLoginError("password must be upper and lower case");
      return;
    }
    setLoginError("");
    setLoginSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user.emailVerified) {
          setLoginSuccess("Login This Website successfully!");
        }else{
          alert("Email is Not Verify !...check Your email and verify")
        }
        
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  const handleReset = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Plz Enter is Your Email");
      return;
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
      alert("Plz Enter is Valid Email");
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Plz Check Your Email");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Some farther unto whispered nevermore in than linking spoken. Quoth
            the so an while. Into tufted beast no from lenore the a ghost this,
            bird thy i back be stately hauntedtell and. Pallas at its i upon
            fearing though on,.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRef}
                  type="text"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showText ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a
                    onClick={handleReset}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
                <div className="-ml-2.5">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex cursor-pointer items-center rounded-full p-3"
                      htmlFor="checkbox"
                      data-ripple-dark="true"
                    >
                      <input
                        onClick={() => setShowText(!showText)}
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                        id="checkbox"
                      />
                      <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          // stroke-width="1"
                        >
                          <path
                            // fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            // clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px cursor-pointer text-sm select-none font-light text-white"
                      htmlFor="checkbox"
                    >
                      {showText ? "Hide Password" : "Show Password"}
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {loginError && <p className="text-red-600">{loginError}</p>}

            {loginSuccess && <p className="text-green-600">{loginSuccess}</p>}
            <p>
              Do not have an account? Please{" "}
              <span className="text-orange-700 hover:underline">
                <Link to={"/registration"}>Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
