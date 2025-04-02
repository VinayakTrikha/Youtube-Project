import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, makeid } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector((store) => store.chat);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: makeid(30),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-[400px] h-[500px] ml-2 p-2 border border-black bg-slate-50 overflow-scroll flex flex-col-reverse">
        {messages?.map((val, index) => (
          <ChatMessage key={makeid(4)} name={val.name} message={val.message} />
        ))}
      </div>
      <form
        className=" w-[400px] p-2 ml-2 border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: generateName(),
              message: liveMessage,
            })
          );
          setLiveMessage('')
        }}
      >
        <input
          type="text"
          className="px-2 w-96 border border-gray-500"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
