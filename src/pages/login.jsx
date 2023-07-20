const Login = () => {
     return (
          <div className="flex justify-center items-center min-h-screen shadow-sm">
               <div className="w-full max-w-sm bg-gray-50 p-3 rounded-md border border-slate-200">
                    <h1 className="text-center text-xl mt-3 mb-5">Log in to Facebook</h1>
                    <input type="text" className="py-3 px-3 border rounded-md w-full block mb-3" placeholder="Email address or phone " />
                    <input type="password" className="py-3 px-3 border rounded-md w-full block mb-3" placeholder="Password" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-full mt-2 mb-3">Log in</button>
                    <a href="#" className="text-blue-500 hover:text-blue-700 text-center">Forgotten account?</a>
                    <span className="w-2/4 h-1 bg-slate-300"></span>
                    <div className="text-center">
                         <button className="bg-green-500 p-3 font-bold text-slate-100 rounded-md mt-3">Create new account</button>
                    </div>
               </div>
          </div>
     )
};

export default Login;