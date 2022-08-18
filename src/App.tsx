import React from 'react';

// Components
import { Sidebar } from './components/Sidebar';
import { PostsResult } from './components/PostsResult';
import { StatusColors } from './components/StatusColors';
import { TopBar } from './components/TopBar';
import { Drawer } from './components/Drawer';
import { AccountImage } from './components/AccountImage';

const App = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <TopBar />
      <Drawer />
      <div className='p-4 md:p-12 md:ml-72'>
        <div className='flex items-center justify-between gap-x-2'>
          <StatusColors />
          <AccountImage />
        </div>
        <PostsResult />
      </div>
    </React.Fragment>
  );
};

export default App;
