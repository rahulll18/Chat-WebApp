import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchchats = async () => {
    const { data } = await axios.get("/api/chats");

    setChats(data);
  };
  useEffect(() => {
    fetchchats();
  }, []);

  return (
    <div>
      {chats.map((chats) => (
        // <div key={chats._id}>{chats.chatName}</div>
        <div>{chats.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
