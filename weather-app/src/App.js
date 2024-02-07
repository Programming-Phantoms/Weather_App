import "./App.css";

function App() {
  return (
    <>
      <div className="main-body bg-slate-900 h-screen w-screen flex justify-center items-center">
        <div className="container flex justify-center bg-slate-800 w-[350px] md:w-[500px] h-[600px] rounded-xl">
          <div>
            <div className="flex mt-10 mx-5 items-center">
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                className="text-xl text-slate-300 block w-[220px] md:w-[380px] h-[50px] md:h-[45px] px-3 py-2 bg-slate-500 border border-slate-500 rounded-md shadow-sm placeholder-slate-700
                            focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
              />
              <button className="ml-5">
                <div className="bg-slate-500 h-[50px] w-[50px] flex items-center justify-center rounded-[100%]">
                  <i className="fa-solid fa-magnifying-glass text-2xl text-slate-300"></i>
                </div>
              </button>
            </div>
            <div className="img">
              <img
                src="../Icons/wind.png"
                width="100%"
                height="100%"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
