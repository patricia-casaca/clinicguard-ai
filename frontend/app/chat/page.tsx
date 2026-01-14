// "use client";

// import { useState } from "react";

// interface Message {
//   role: "user" | "ai";
//   text: string;
// }

// interface Chat {
//   id: number;
//   name: string;
//   messages: Message[];
// }

// export default function ChatPage() {
//   const [chats, setChats] = useState<Chat[]>([]);
//   const [activeChatId, setActiveChatId] = useState<number | null>(null);
//   const [input, setInput] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [modalChatId, setModalChatId] = useState<number | null>(null);
//   const [modalValue, setModalValue] = useState("");

//   const activeChat = chats.find((c) => c.id === activeChatId);

//   // Send message
//   const handleSend = () => {
//     if (!input.trim()) return;

//     if (activeChatId === null) {
//       // First message goes to a new chat with default name
//       const newChat: Chat = {
//         id: Date.now(),
//         name: "New Chat",
//         messages: [{ role: "user", text: input }],
//       };
//       setChats([newChat, ...chats]);
//       setActiveChatId(newChat.id);
//     } else {
//       setChats(
//         chats.map((chat) =>
//           chat.id === activeChatId
//             ? {
//                 ...chat,
//                 messages: [...chat.messages, { role: "user", text: input }],
//               }
//             : chat
//         )
//       );
//     }

//     setInput("");

//     // Simulate AI response
//     setTimeout(() => {
//       setChats((prev) =>
//         prev.map((chat) =>
//           chat.id === (activeChatId ?? prev[0].id)
//             ? {
//                 ...chat,
//                 messages: [
//                   ...chat.messages,
//                   { role: "ai", text: "This is a sample AI response." },
//                 ],
//               }
//             : chat
//         )
//       );
//     }, 800);
//   };

//   // Create new chat with modal
//   const createNewChat = () => {
//     setModalChatId(null);
//     setModalValue("");
//     setShowModal(true);
//   };

//   const deleteChat = (id: number) => {
//     if (!confirm("Are you sure you want to delete this chat?")) return;
//     setChats(chats.filter((c) => c.id !== id));
//     if (activeChatId === id) setActiveChatId(null);
//   };

//   // Open modal to rename chat
//   const renameChat = (id: number) => {
//     const chat = chats.find((c) => c.id === id);
//     if (!chat) return;
//     setModalChatId(id);
//     setModalValue(chat.name);
//     setShowModal(true);
//   };

//   // Handle modal submission
//   const handleModalSubmit = () => {
//     if (!modalValue.trim()) return;
//     if (modalChatId === null) {
//       // New chat
//       const newChat: Chat = {
//         id: Date.now(),
//         name: modalValue.trim(),
//         messages: [],
//       };
//       setChats([newChat, ...chats]);
//       setActiveChatId(newChat.id);
//     } else {
//       // Rename existing chat
//       setChats(
//         chats.map((c) =>
//           c.id === modalChatId ? { ...c, name: modalValue.trim() } : c
//         )
//       );
//     }
//     setShowModal(false);
//     setModalValue("");
//     setModalChatId(null);
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col lg:flex-row relative">
//       {/* Sidebar */}
//       <aside className="bg-gray-100 w-full lg:w-64 p-4 flex-shrink-0">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="font-semibold text-lg">Chats</h2>
//           <button
//             onClick={createNewChat}
//             className="bg-[#3B82A0] text-white px-3 py-1 rounded hover:bg-[#256B85] transition"
//           >
//             + New
//           </button>
//         </div>

//         <div className="flex flex-col gap-2">
//           {chats.length === 0 && (
//             <div className="text-gray-500 text-sm">
//               No chats yet. Click "+ New" or start typing to create one.
//             </div>
//           )}
//           {chats.map((chat) => (
//             <div
//               key={chat.id}
//               className={`flex justify-between items-center px-3 py-2 rounded hover:bg-gray-200 transition cursor-pointer ${
//                 chat.id === activeChatId ? "bg-gray-200 font-semibold" : ""
//               }`}
//             >
//               <div
//                 className="flex-1 truncate"
//                 onClick={() => setActiveChatId(chat.id)}
//               >
//                 {chat.name}
//               </div>
//               <div className="flex items-center gap-2">
//                 <button onClick={() => renameChat(chat.id)} title="Rename Chat">
//                   ✐
//                 </button>
//                 <button onClick={() => deleteChat(chat.id)} title="Delete Chat">
//                   🗑️
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </aside>

//       {/* Main Chat Area */}
//       <main className="flex-1 flex flex-col relative">
//         {/* Chat Messages */}
//         <div
//           className={`overflow-y-auto p-6 space-y-4 flex-1 flex flex-col ${
//             !activeChat || activeChat.messages.length === 0
//               ? "justify-center items-center"
//               : ""
//           }`}
//         >
//           {!activeChat || activeChat.messages.length === 0 ? (
//             <div className="text-center text-gray-400">
//               Start typing to start a conversation.
//             </div>
//           ) : (
//             activeChat.messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`max-w-lg p-3 rounded-xl shadow-sm ${
//                   msg.role === "user"
//                     ? "ml-auto bg-[#3B82A0] text-white rounded-br-none"
//                     : "bg-gray-100 text-gray-900 rounded-bl-none"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))
//           )}
//         </div>

//         {/* Input */}
//         <div className="border-t border-gray-200 p-4 flex gap-2 items-center sticky bottom-0 bg-white">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             placeholder="Type your question..."
//             className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B82A0]"
//           />
//           <button
//             onClick={handleSend}
//             className="bg-[#3B82A0] text-white px-4 py-2 rounded hover:bg-[#256B85] transition"
//           >
//             Send
//           </button>
//         </div>
//       </main>

//       {/* Modal for naming chat */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
//           <div className="bg-white rounded-xl p-6 w-full max-w-sm">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">
//               {modalChatId === null ? "New Chat Name" : "Rename Chat"}
//             </h3>
//             <input
//               type="text"
//               value={modalValue}
//               onChange={(e) => setModalValue(e.target.value)}
//               placeholder="Enter chat name..."
//               className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#3B82A0]"
//             />
//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleModalSubmit}
//                 className="px-4 py-2 rounded bg-[#3B82A0] text-white hover:bg-[#256B85] transition"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";

interface Message {
  role: "user" | "ai";
  text: string;
}

interface Chat {
  id: number;
  name: string;
  messages: Message[];
}

export default function ChatPage() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const [input, setInput] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"rename" | "delete" | "new">(
    "new"
  );
  const [modalChatId, setModalChatId] = useState<number | null>(null);
  const [modalValue, setModalValue] = useState("");

  const activeChat = chats.find((c) => c.id === activeChatId);

  // Send message
  const handleSend = () => {
    if (!input.trim()) return;

    if (activeChatId === null) {
      const newChat: Chat = {
        id: Date.now(),
        name: "New Chat",
        messages: [{ role: "user", text: input }],
      };
      setChats([newChat, ...chats]);
      setActiveChatId(newChat.id);
    } else {
      setChats(
        chats.map((chat) =>
          chat.id === activeChatId
            ? {
                ...chat,
                messages: [...chat.messages, { role: "user", text: input }],
              }
            : chat
        )
      );
    }

    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === (activeChatId ?? prev[0].id)
            ? {
                ...chat,
                messages: [
                  ...chat.messages,
                  { role: "ai", text: "This is a sample AI response." },
                ],
              }
            : chat
        )
      );
    }, 800);
  };

  // Modal handling
  const openRenameModal = (id: number) => {
    const chat = chats.find((c) => c.id === id);
    if (!chat) return;
    setModalType("rename");
    setModalChatId(id);
    setModalValue(chat.name);
    setShowModal(true);
  };

  const openDeleteModal = (id: number) => {
    setModalType("delete");
    setModalChatId(id);
    setShowModal(true);
  };

  const openNewChatModal = () => {
    setModalType("new");
    setModalChatId(null);
    setModalValue("");
    setShowModal(true);
  };

  const handleModalSubmit = () => {
    if (modalType === "rename" && modalChatId !== null && modalValue.trim()) {
      setChats(
        chats.map((c) =>
          c.id === modalChatId ? { ...c, name: modalValue.trim() } : c
        )
      );
    } else if (modalType === "new" && modalValue.trim()) {
      const newChat: Chat = {
        id: Date.now(),
        name: modalValue.trim(),
        messages: [],
      };
      setChats([newChat, ...chats]);
      setActiveChatId(newChat.id);
    } else if (modalType === "delete" && modalChatId !== null) {
      setChats(chats.filter((c) => c.id !== modalChatId));
      if (activeChatId === modalChatId) setActiveChatId(null);
    }

    setShowModal(false);
    setModalValue("");
    setModalChatId(null);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row relative">
      {/* Sidebar */}
      <aside className="bg-gray-100 w-full lg:w-64 p-4 flex-shrink-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold text-lg">Chats</h2>
          <button
            onClick={openNewChatModal}
            className="bg-[#3B82A0] text-white px-3 py-1 rounded hover:bg-[#256B85] transition"
          >
            + New
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {chats.length === 0 && (
            <div className="text-gray-500 text-sm">
              No chats yet. Click "+ New" or start typing to create one.
            </div>
          )}
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`flex justify-between items-center px-3 py-2 rounded hover:bg-gray-200 transition cursor-pointer ${
                chat.id === activeChatId ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              <div
                className="flex-1 truncate"
                onClick={() => setActiveChatId(chat.id)}
              >
                {chat.name}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openRenameModal(chat.id)}
                  title="Rename Chat"
                >
                  ✐
                </button>
                <button
                  onClick={() => openDeleteModal(chat.id)}
                  title="Delete Chat"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative">
        {/* Chat Messages */}
        <div
          className={`overflow-y-auto p-6 space-y-4 flex-1 flex flex-col ${
            !activeChat || activeChat.messages.length === 0
              ? "justify-center items-center"
              : ""
          }`}
        >
          {!activeChat || activeChat.messages.length === 0 ? (
            <div className="text-center text-gray-400">
              Start typing to start a conversation.
            </div>
          ) : (
            activeChat.messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-lg p-3 rounded-xl shadow-sm ${
                  msg.role === "user"
                    ? "ml-auto bg-[#3B82A0] text-white rounded-br-none"
                    : "bg-gray-100 text-gray-900 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            ))
          )}
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 p-4 flex gap-2 items-center sticky bottom-0 bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your question..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B82A0]"
          />
          <button
            onClick={handleSend}
            className="bg-[#3B82A0] text-white px-4 py-2 rounded hover:bg-[#256B85] transition"
          >
            Send
          </button>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            {modalType === "delete" ? (
              <>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Delete Chat?
                </h3>
                <p className="text-gray-600 mb-4">
                  Are you sure you want to delete this chat? This action cannot
                  be undone.
                </p>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleModalSubmit}
                    className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {modalType === "new" ? "New Chat Name" : "Rename Chat"}
                </h3>
                <input
                  type="text"
                  value={modalValue}
                  onChange={(e) => setModalValue(e.target.value)}
                  placeholder="Enter chat name..."
                  className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#3B82A0]"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleModalSubmit}
                    className="px-4 py-2 rounded bg-[#3B82A0] text-white hover:bg-[#256B85] transition"
                  >
                    Save
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
