import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';

const ChatHeader = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className={styles.chatSidebar}>
      <h2>Open chat</h2>
      <div>
        <h4 className={styles.chatHeader}>Active users</h4>
        <div className={styles.users}>
          {users.map((user) => (
            <div key={user.socketID}>{user.userName}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
