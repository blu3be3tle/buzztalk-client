import { IoSend } from 'react-icons/io5';

const Chatbox = () => {
  return (
    <div className="border-[2px] border-opacity-20 border-gray-400 w-full relative h-[100vh]">
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

      <div className="p-7 absolute bottom-0 w-full flex">
        <input
          type="text"
          placeholder="Enter message"
          className="input input-bordered border-gray-400 border-opacity-50 w-full"
        />
        <IoSend className="m-3 text-2xl" />
      </div>
    </div>
  );
};

export default Chatbox;
