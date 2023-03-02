import React, { useEffect, useState, useRef } from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatBody from '../components/ChatBody';
import ChatFooter from '../components/ChatFooter';
import styles from './ChatManagement.module.scss';

const ChatManagement = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState('');
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    socket.on('typingResponse', (data) => setTypingStatus(data));
  }, [socket]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={styles.Chat}>
      <ChatHeader socket={socket} />
      <div className={styles.chatMain}>
        <ChatBody
          messages={messages}
          typingStatus={typingStatus}
          lastMessageRef={lastMessageRef}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatManagement;
