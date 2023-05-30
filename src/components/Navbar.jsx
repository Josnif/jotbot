'use client';

import { useSession } from "@/utils";

const Navbar = () => {
    const { apiKey, setApiKey } = useSession();
    return (
        <nav className="bg-white shadow w-full">
            <div className="px-4 h-14 flex justify-between items-center">
                <div className="text-xl font-bold">Jotbot</div>
                <div>
                    <input
                    type="password"
                    className="border rounded p-1"
                    placeholder="Enter API key.."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar