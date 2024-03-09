import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className="relative dark:bg-zinc-900 dark:text-white">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
