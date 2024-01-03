import { useState } from "react";

const FOLLOW_CLASS = 'px-4 py-1 text-sm text-blue-400 font-semibold rounded-full border border-blue-400 hover:text-white hover:bg-blue-400 hover:border-transparent focus:outline-none'
const UNFOLLOW_CLASS = 'px-4 py-1 text-sm text-red-400 font-semibold rounded-full border border-red-400 hover:text-white hover:bg-red-400 hover:border-transparent focus:outline-none'

export const Card = ({username}) => {

  const [isFollow, setIsFollow] = useState(false);

  const handleFollow = () => {
    setIsFollow(!isFollow)
  }

  return (
    <div className="flex rounded-xl p-6 bg-gray-200 w-80 mx-auto shadow-lg space-x-4 items-center">
      <div className=" flex flex-row space-x-4">
        <img src={`https://unavatar.io/twitter/${username}`} alt="profile image"  className=" rounded-full w-14"/>
        <div className=" space-y-0.5">
          <p className=" text-lg font-semibold text-black">{username}</p>
          <p className=" text-slate-500 font-medium">@{username}</p>
        </div>
      </div>
      <div className={!isFollow ? FOLLOW_CLASS : UNFOLLOW_CLASS}>
        <button onClick={handleFollow}>{!isFollow ? 'Follow' : 'Unfollow' }</button>
      </div>
    </div>
  );
};
