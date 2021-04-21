import { useAuth } from "@contexts/auth";
import {
  MessageList,
  ChatList,
  Input,
  Button,
  Popup,
} from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import getFullName from "../../../util/fullName";
import strapi from "@api/strapi";
import React, { useState, useEffect } from "react";

import useSWR from "swr";

export default function Chatrooms() {
  const { user, loading } = useAuth();
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // console.log(user);
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
          console.log(data);
          const messages = data.messages;
          // Set Messages

          chatItem.messages = messages.map((message) => {
            return {
              position: message.sender === user.id ? "right" : "left",
              avatar:
                message.sender === user.id
                  ? user.profilePicture.url
                  : recipient.profilePicture.url,
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
  return (
    <div>
      <ChatList
        className="chat-list"
        dataSource={conversations}
        onClick={(chatItem) => {
          setMessages(chatItem.messages);
        }}
      />
      <MessageList
        className="message-list"
        lockable={true}
        toBottomHeight={"100%"}
        dataSource={messages}
      />
      <Input
        placeholder="Type here..."
        multiline={true}
        rightButtons={
          <Button
            color="white"
            backgroundColor="black"
            text="Send"
            onClick={() => {
              console.log("Clicked");
            }}
          />
        }
      />
    </div>
  );
}
