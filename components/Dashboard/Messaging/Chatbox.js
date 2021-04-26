import { useAuth } from "@contexts/auth";
import {
  MessageList,
  ChatList,
  Input,
  Button,
  Popup,
} from "react-chat-elements";

import getFullName from "../../../util/fullName";
import strapi from "@api/strapi";
import React, { useState, useEffect } from "react";
import styles from "./Chatbox.module.css";

export default function Chatrooms() {
  const { user, loading, updateUser } = useAuth();
  const [conversations, setConversations] = useState([]);
  const [myMessage, setMyMessage] = useState("");
  const [currentChatroomId, setCurrentChatroomId] = useState("");

  const sendMessage = async () => {
    try {
      const message = await strapi.post("messages", {
        chatroom: currentChatroomId,
        content: myMessage,
      });
      setMyMessage("");
      updateUser();
    } catch (e) {}
  };

  useEffect(() => {
    if (user && !loading) {
      // Fetch extra details about chatrooms
      const conversationPromises = user.chatrooms.map((chatroomId) => {
        return strapi.get(`chatrooms/${chatroomId}`);
      });
      // Filter all chatrooms and messages
      Promise.all(conversationPromises).then((data) => {
        const formattedConvos = data.map(({ data }) => {
          const recipient = data.participants.find((participant) => {
            return user.id !== participant.id;
          });
          // Setup Chatitem object
          const chatItem = {};
          chatItem.id = data.id;
          chatItem.title =
            !recipient.firstName && !recipient.lastName
              ? recipient.username
              : getFullName(recipient);
          chatItem.alt =
            !recipient.firstName && !recipient.lastName
              ? recipient.username
              : getFullName(recipient);
          chatItem.avatar = recipient.profilePicture
            ? recipient.profilePicture.url
            : null;
          const messages = data.messages;
          // Set Messages

          const myAvatar = user.profilePicture ? user.profilePicture.url : null;
          chatItem.messages = messages.map((message) => {
            return {
              position: message.sender === user.id ? "right" : "left",
              // avatar:
              //   message.sender === user.id
              //     ? myAvatar
              //     : recipient.profilePicture.url,
              date: new Date(message.createdAt),
              type: "text",
              text: message.content,
            };
          });

          if (messages.length !== 0) {
            const recentMessage = messages[messages.length - 1];
            chatItem.date = new Date(recentMessage.createdAt);
            chatItem.subtitle = recentMessage.content;
          }
          return chatItem;
        });
        setConversations(formattedConvos);
      });
    }
  }, [loading, user]);
  const chatroom = conversations.find(
    (chatItem) => currentChatroomId === chatItem.id
  );

  return (
    <div className={styles.container}>
      <div>
        <ChatList
          className="chat-list"
          dataSource={conversations}
          onClick={(chatItem) => {
            setCurrentChatroomId(chatItem.id);
          }}
        />
      </div>
      <div className={styles.messagingWindow}>
        <MessageList
          className="message-list"
          lockable={true}
          toBottomHeight={"100%"}
          dataSource={chatroom ? chatroom.messages : []}
        />
        <Input
          className="typeInput"
          placeholder="Type here..."
          multiline={true}
          ref={(e) => {
            if (e) e.input.value = myMessage;
          }}
          onChange={(e) => {
            setMyMessage(e.target.value);
          }}
          rightButtons={
            <Button
              color="white"
              className="sendBtn"
              backgroundColor="var(--horizon)"
              text="Send"
              onClick={() => {
                sendMessage();
              }}
            />
          }
        />
      </div>
    </div>
  );
}
