import { useEffect, useState } from 'react';
import { sendData } from '../../utils/data-utils';

type Kick = {
    target: string;
    message: string;
    error: string;
};

export default function Kick() {
  const [KickMsg, SetKickMsg] = useState<Kick>();
  
  const sendKick = async (target: string) => {
    console.log("Kicking " + target)
    const url = "https://rcon.random7.net/api/v1/kick/" + target
    const response = await sendData<Kick>(url)
    SetKickMsg(response)
  };

  const Kick = () =>  {
    sendKick("Random777")
  }
  
  return (
    <div>
        <p>Kick Target:</p>
        <p>{KickMsg?.target}</p>
        <p>Kick Message:</p>
        <p>{KickMsg?.message}</p>
        <p>Kick Error:</p>
        <p>{KickMsg?.error}</p>
        <button onClick={Kick}> Kick </button>
    </div>
  )
};