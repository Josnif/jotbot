'use client';
 
import { createContext, useState } from 'react';
 
export const ChatContext = createContext();
 
export default function ChatProvider({ children }) {
    const [apiKey, setApiKey] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "system",
            content:
                "You are Jobot, a helpful AI developed by Jovian and powered by state-of-the-art machine learning models.",
        },
    ]);



    return (
        <ChatContext.Provider value={
            {apiKey, setApiKey, userMessage, messages, setMessages, setUserMessage}
        }>
            {children}
        </ChatContext.Provider>
    );
}