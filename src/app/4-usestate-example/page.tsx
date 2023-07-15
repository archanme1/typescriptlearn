"use client";
import React, { useState } from "react";

type UserType = {
  name: string;
  sessionId: number;
};

const UseStateExample = () => {
  const [username, setUserName] = useState("");
  // const [user, setUser] = useState<UserType | null>(null);
  const [user, setUser] = useState<UserType>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleCLick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({ name: username, sessionId: Math.random() });
  };

  return (
    <div className="useStateExample">
      {user ? (
        `${user.name} welcome brother`
      ) : (
        <form>
          <input type="text" placeholder="Username" onChange={handleChange} />
          <button onClick={handleCLick}>Login</button>
        </form>
      )}
    </div>
  );
};

export default UseStateExample;
