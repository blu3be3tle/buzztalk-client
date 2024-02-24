import logo from '/logo.png';
const Loader = () => {
  return (
    <div className="h-screen relative flex justify-center items-center">
      <div className="absolute -mt-20">
        <img className="w-64" src={logo} />
        <p className="text-gray-500 text-lg">@Developed by Jim & Shoeb</p>
      </div>
      <div className="absolute bottom-10 text-Cpurple text-center ">
        <span className="loading loading-infinity loading-lg"></span>
        <p className="text-gray-500 text-lg">v1.0</p>
      </div>
    </div>
  );
};

export default Loader;
