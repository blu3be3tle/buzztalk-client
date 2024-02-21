const List = () => {
  return (
    <div>
      <div className="px-7 pt-5">
        <label className="input input-bordered flex items-center gap-2 shadow-md">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className="p-7">
        <h1 className="pb-4 font-medium text-xl">Recent</h1>

        <table className="my-4">
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Bruce Wayne</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>

            <th>
              <button className="btn btn-ghost btn-xs ml-10">2:37 PM</button>
            </th>
          </tr>
        </table>
        <table className="my-6">
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Bruce Wayne</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>

            <th>
              <button className="btn btn-ghost btn-xs ml-10">2:37 PM</button>
            </th>
          </tr>
        </table>
        <table className="my-6">
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Bruce Wayne</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>

            <th>
              <button className="btn btn-ghost btn-xs ml-10">2:37 PM</button>
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default List;
