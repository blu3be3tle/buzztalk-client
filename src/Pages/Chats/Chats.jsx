import Chatbox from './Chatbox';
import List from './List';

const Chats = () => {
  return (
    <div className="flex">
      <List />
      <Chatbox />
    </div>
  );
};

export default Chats;
