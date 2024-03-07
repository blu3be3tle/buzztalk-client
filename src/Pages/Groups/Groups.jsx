import { Button, Input } from '@material-tailwind/react';
import { FaSearch } from 'react-icons/fa';
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from '@material-tailwind/react';

const Groups = () => {
  const contacts = [
    {
      name: 'Alice',
      profile_pic: 'link_to_profile_pic_alice',
      isOnline: true,
    },
    {
      name: 'Bob',
      profile_pic: 'link_to_profile_pic_bob',
      isOnline: false,
    },
    {
      name: 'Charlie',
      profile_pic: 'link_to_profile_pic_charlie',
      isOnline: true,
    },
    {
      name: 'David',
      profile_pic: 'link_to_profile_pic_david',
      isOnline: true,
    },
    {
      name: 'Eve',
      profile_pic: 'link_to_profile_pic_eve',
      isOnline: false,
    },
    {
      name: 'Frank',
      profile_pic: 'link_to_profile_pic_frank',
      isOnline: true,
    },
    {
      name: 'Grace',
      profile_pic: 'link_to_profile_pic_grace',
      isOnline: false,
    },
    {
      name: 'Hannah',
      profile_pic: 'link_to_profile_pic_hannah',
      isOnline: true,
    },
    {
      name: 'Isaac',
      profile_pic: 'link_to_profile_pic_isaac',
      isOnline: false,
    },
    {
      name: 'Jasmine',
      profile_pic: 'link_to_profile_pic_jasmine',
      isOnline: true,
    },
  ];
  const initials = contacts.map(c => c.name[0].toUpperCase());
  // console.log(initials);
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
          My Contacts
        </h1>
        {/* group search bar */}
        <div className="flex items-center justify-center mt-4">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Search contacts..."
              className=" text-white border border-b-white border-t-0 border-r-0 border-l-0"
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
      <div className="px-10">
        <Card className="w-full bg-transparent shadow-none">
          <List>
            {initials.map(initial => (
              <div>
                <h2 className="text-left font-extrabold my-4">{initial}</h2>
                {contacts
                  .filter(contact => contact.name[0].toUpperCase() === initial)
                  .map(contact => (
                    <ListItem>
                      <ListItemPrefix>
                        <Avatar
                          variant="circular"
                          withBorder={true}
                          alt="candice"
                          src="https://docs.material-tailwind.com/img/face-1.jpg"
                          className="p-0.5"
                          color={contact.isOnline ? 'green' : 'red'}
                        />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          {contact.name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          {contact.isOnline ? 'Online' : 'Offline'}
                        </Typography>
                      </div>
                    </ListItem>
                  ))}
              </div>
            ))}
          </List>
        </Card>
      </div>
    </div>
  );
};

export default Groups;
