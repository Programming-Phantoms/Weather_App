import "./App.css";

function App() {
  return (
    <>
      <div className="main-body bg-slate-900 h-screen w-screen flex justify-center items-center">
        <div className="container flex justify-center bg-gradient-to-tr from-slate-800 to-slate-700 w-[350px] md:w-[500px] h-[580px] rounded-xl">
          <div>
            <div className="flex mt-10 mx-5 items-center">
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                className="text-xl text-slate-300 block w-[250px] md:w-[380px] h-[50px] md:h-[45px] px-3 py-2 bg-slate-500 border border-slate-500 rounded-md shadow-sm placeholder-slate-700
                            focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
              />
              <button className="ml-3">
                <div className="bg-slate-500 h-[45px] w-[45px] flex items-center justify-center rounded-[100%]">
                  <i className="fa-solid fa-magnifying-glass text-xl text-slate-300"></i>
                </div>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://github.com/Programming-Phantoms/Weather_App/blob/main/weather-app/Icons/cloud-sun.png?raw=true"
                width="40%"
                height="40%"
                alt=""
                className="mt-10"
              />
              <h2 className="mt-5 mb-10 text-4xl text-slate-400">Lahore</h2>
              <h1 className="text-7xl text-white font-extrabold md:font-bold">
                17° C
              </h1>
              <hr className="w-full border-slate-500 my-[3rem]" />
              <div className="flex mx-5">
                <div className="flex items-center justify-start text-white">
                  <img
                    src="https://github.com/Programming-Phantoms/Weather_App/blob/main/weather-app/Icons/wind.png?raw=true"
                    width="15%"
                    height="15%"
                    alt=""
                  />
                  <p className="pl-3">20 km/h</p>
                </div>
                <div className="flex items-center justify-center text-white">
                  <img
                    src="https://github.com/Programming-Phantoms/Weather_App/blob/main/weather-app/Icons/humidity.png?raw=true"
                    width="40%"
                    height="40%"
                    alt=""
                  />
                  <p className="pl-3">20%</p>
                </div>
                <div className="flex items-center justify-end text-white">
                  <img
                    src="https://github.com/Programming-Phantoms/Weather_App/blob/main/weather-app/Icons/aqi.png?raw=true"
                    width="10%"
                    height="10%"
                    alt=""
                  />
                  <p className="pl-3">129</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
