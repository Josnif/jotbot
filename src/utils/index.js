"use client";

import { useContext } from "react";

import { ChatContext } from "@/providers/chat-provider";

const useSession = () => {
    return useContext(ChatContext);
}

export {
    useSession,

}