const Chatbox = () => {
  return (
    <div className="border-[1px] w-full">
      <div className="p-7 justify-between flex">
        <div className="flex">
          <img
            src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
            className="w-12"
          />
          <h1 className="font-bold m-3">Bruce Wayne</h1>
        </div>

        <div>
          <button className="btn">...</button>
        </div>
      </div>
      <hr />

      <div className="">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </div>
    </div>
  );
};

export default Chatbox;
