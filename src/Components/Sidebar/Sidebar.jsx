import React from 'react';
import { CgUserList } from 'react-icons/cg';
import { GrGroup } from 'react-icons/gr';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { RiHome5Line, RiSettings2Line } from 'react-icons/ri';
import { MdOutlineDarkMode } from 'react-icons/md';

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import Profile from '../../Pages/Profile/Profile';
import Settings from '../../Pages/Settings/Settings';
import Groups from '../../Pages/Groups/Groups';

const Sidebar = () => {
  const data = [
    {
      value: 'dashboard',
      icon: RiHome5Line,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      value: 'chats',
      icon: IoChatboxEllipsesOutline,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      value: 'profile',
      icon: CgUserList,
      desc: <Profile />,
    },
    {
      value: 'group',
      icon: GrGroup,
      desc: <Groups />,
    },
    {
      value: 'settings',
      icon: RiSettings2Line,
      desc: <Settings />,
    },
  ];
  return (
    <>
      <Tabs
        className="w-[35%] bg-Cpurple/20 border-r-2 text-center shadow-xl"
        value="dashboard"
        orientation="vertical"
      >
        <TabsHeader className="w-24 h-screen top-0 p-0 bg-gray-200 z-10">
          {data.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              className=" bg-gray-200 border-r-2 text-center"
            >
              <div className="flex items-center gap-2">
                <div className="tooltip tooltip-right" data-tip={value}>
                  {React.createElement(icon, {
                    className: 'text-[25px]',
                  })}
                </div>
              </div>
            </Tab>
          ))}
          <div className="flex items-center justify-center text-[25px] py-6">
            <MdOutlineDarkMode />
          </div>
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="p-0 ms-0 ">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
};

export default Sidebar;
