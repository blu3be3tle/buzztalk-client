import { Button, Input } from '@material-tailwind/react';
import { FaSearch } from 'react-icons/fa';

const Groups = () => {
  return (
    <div className="w-full">
      {/* Background Image  */}
      <div
        className="h-[180px] px-10 py-5"
        style={{
          backgroundImage: 'url(https://i.ibb.co/CbzLL8Q/bg-image.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="text-2xl font-[600] text-left pb-5 text-white">
          My Groups
        </h1>
        <div className="flex items-center justify-center mt-4">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Search for contacts here..."
              className="pr-20 text-white border border-b-white border-t-0 border-r-0 border-l-0"
              containerProps={{
                className: 'min-w-[288px] text-white',
              }}
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
            >
              <FaSearch />
            </Button>
          </div>
        </div>
      </div>
      {/* https://i.ibb.co/5n85Ssw/Formal-Passport.jpg */}
      {/* Profile Options  */}
      {/* <div className="px-10 -mt-10">
        <div className="avatar online">
          <div className="w-24 rounded-full border-4">
            <img src={user?.photoURL} />
          </div>
        </div>
        <h1 className="text-lg font-medium text-center pb-5 text-black py-2">
          {user?.displayName}
        </h1>
        <p className="text-base font-normal text-left pb-5  py-2">
          If several languages coalesce, the grammar of the resulting language
          is more simple and regular than that of the individual.
        </p>
        <div className="divider"></div>
        <div>
          <nav className="my-2  flex  flex-col gap-4 px-0 font-sans text-base font-normal pb-10 text-gray-700">
            <div className="flex items-center justify-start ">
              <LuUser2 className="text-xl mr-4" />
              <h4 className="text-base">{user?.displayName}</h4>
            </div>
            <div className="flex items-center justify-start ">
              <BsEnvelopeAt className="text-xl mr-4" />
              <h4 className="text-base">{user?.email}</h4>
            </div>
            <div className="flex items-center justify-start ">
              <TfiTime className="text-xl mr-4" />
              <h4 className="text-base">{time.split(',')?.[1]}</h4>
            </div>

            <div className="flex items-center justify-start ">
              <GrMap className="text-xl mr-4" />
              <h4 className="text-base">Dhaka, Bangladesh</h4>
            </div>
          </nav>
        </div>
      </div> */}
    </div>
  );
};

export default Groups;
