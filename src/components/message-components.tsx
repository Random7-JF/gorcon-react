import { useState, useEffect } from "react";
import { getData } from "../../utils/data-utils";

type Message = {
  message: string;
  version: string;
};

export default function Message() {
  const [Message, SetMessage] = useState<Message>();

  const fetchMsg = async () => {
    console.log("Fetching");
    const msg = await getData<Message>("http://localhost:8080/api/v1/");
    SetMessage(msg);
  };

  useEffect(() => {
    fetchMsg();
  }, []);

  return (
    <div className="message">
      <p>Message: {Message?.message} </p>
      <div>
        <button onClick={fetchMsg}> Refresh</button>
      </div>
    </div>
  );
}
