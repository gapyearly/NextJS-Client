import { useAuth } from "@contexts/auth";
import { MessageList, ChatList, Input, Button } from "react-chat-elements";

import getFullName from "../../../util/fullName";
import strapi from "@api/strapi";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Chatbox.module.css";

export default function Chatrooms() {
  const { user, loading, updateUser } = useAuth();
  const [conversations, setConversations] = useState([]);
  const [myMessage, setMyMessage] = useState("");
  const [currentChatroomId, setCurrentChatroomId] = useState("");
  const [pageLoading, setPageLoading] = useState(true);
  // Input, controlled field
  const input = useRef();
  if (input.current) input.current.input.value = myMessage;
  // Apply styling to currently selected conversation.

  conversations.forEach((chatroom) => {
    if (chatroom.id === currentChatroomId) {
      chatroom.className = "current";
    } else {
      chatroom.className = "";
    }
  });
  // TODO: Optimize Messaging it sux lmao
  const sendMessage = async () => {
    try {
      await strapi.post("messages", {
        chatroom: currentChatroomId,
        content: myMessage,
      });
      setMyMessage("");
      // Reset textarea styling
      input.current.input.style = "";
      updateUser();
    } catch (e) {}
  };

  useEffect(() => {
    if (user && !loading) {
      // Fetch extra details about chatrooms
      const conversationPromises = user.chatrooms.map((chatroomId) => {
        if (chatroomId.id) {
          chatroomId = chatroomId.id;
        }
        return strapi.get(`chatrooms/${chatroomId}`);
      });
      // Filter all chatrooms and messages
      Promise.all(conversationPromises).then((data) => {
        const formattedConvos = data
          .map(({ data }) => {
            const recipient = data.participants.find((participant) => {
              return user.id !== participant.id;
            });
            if (!recipient) return undefined;
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
            let unread = 0;
            chatItem.messages = messages.map((message) => {
              if (!message.read && message.sender !== user.id) {
                unread += 1;
              }
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
            chatItem.unread = unread;

            if (messages.length !== 0) {
              const recentMessage = messages[messages.length - 1];
              chatItem.date = new Date(recentMessage.createdAt);
              chatItem.subtitle = recentMessage.content;
            } else {
              chatItem.date = new Date(data.createdAt);
            }
            return chatItem;
          })
          .filter((convo) => convo);
        formattedConvos.sort((a, b) => {
          return b.date.getTime() - a.date.getTime();
        });

        if (pageLoading) {
          if (formattedConvos.length !== 0) {
            setCurrentChatroomId(formattedConvos[0].id);
          }
          setPageLoading(false);
        }
        setConversations(formattedConvos);
      });
    }
  }, [loading, user]);
  const chatroom = conversations.find(
    (chatItem) => currentChatroomId === chatItem.id
  );
  if (chatroom) {
    strapi.put(`chatrooms/readMessages/${currentChatroomId}`);
    chatroom.unread = 0;
  }

  return (
    <>
      <h2 className={styles.messagingHeader}>My Inbox</h2>

      <div className={styles.container}>
        <ChatList
          className="chat-list"
          dataSource={conversations}
          onClick={async (chatItem) => {
            setCurrentChatroomId(chatItem.id);
          }}
        />

        <div className={styles.messagingWindow}>
          {pageLoading && (
            <>
              <br />
              <h1>Loading . . .</h1>
            </>
          )}
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
            ref={input}
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
    </>
  );
}
