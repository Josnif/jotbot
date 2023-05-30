'use client';
import ReactMarkdown from 'react-markdown';

import { useSession } from '@/utils';
import { useState } from 'react'

const Chat = () => {
    const { apiKey } = useSession();
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const [userMessage, setUserMessage] = useState('');
    const [messages, setMessages] = useState([
        {
          role: "system",
          content:
            "You are Jotbot, a helpful AI developed by Joseph and powered by state-of-the-art machine learning models.",
        },
    ]);

    const sendRequest = async () => {
        if (apiKey.length == 0) {
            const updatedMessages = [
                ...messages,
                {
                    role: "Jotbot",
                    content: "Enter your OpenAI API key to continue"
                }
            ];
            setMessages(updatedMessages)
            return;
        }
        const updatedMessages = [
            ...messages,
            {
                role: "user",
                content: userMessage
            }
        ];
        setMessages(updatedMessages);
        setUserMessage("");

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: updatedMessages
                })
            })
            
            const resJson = await response.json();
            console.log(resJson);
    
            const updatedMessagesJson = [
                ...updatedMessages, resJson.choices[0].messages.content
            ];
            setMessages(updatedMessagesJson)
        } catch (error) {
            console.log(error);
            window.alert("Error:" + error.message);
        }
    }

    return (
        <>
            {/* Message History */}
            <div className="flex-1 overflow-y-scroll">
                <div className="mx-auto w-full max-w-screen-md p-4 ">
                    {messages
                    .filter((msg) => msg.role !== "system")
                    .map((msg, idx) => (
                        <div key={idx} className="mt-3">
                            <div className="font-bold">
                                {msg.role === "user" ? "You" : "Jotbot"}
                            </div>
                            {/* <div className="text-lg">{msg.content}</div> */}
                            <div className="prose-lg">
                                <ReactMarkdown>{msg.content}</ReactMarkdown>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Message Input */}
            <div className="mx-auto w-full max-w-screen-md px-4 pt-0 pb-2 flex">
                <textarea
                    className="border rounded-md text-lg p-2 flex-1"
                    rows={1}
                    placeholder="Ask me anything..."
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                />
                <button
                    onClick={sendRequest}
                    className="border rounded-md bg-blue-500 hover:bg-blue-600 text-white px-4 ml-2"
                >
                    Send
                </button>
            </div>
        </>
    )
}

export default Chat