import { useContext, useEffect, useRef, useState } from "react";
import { Itemscontext } from "../../Context/Itemscontext";
import React from "react";

const Message = () => {
  // useContext hook
  const { message, dispatch } = useContext(Itemscontext);

  // show Sate
  const [show, setShow] = useState(true);

  // useRef hook
  const timer = useRef(null);

  // useEffect
  useEffect(() => {
    setShow(true);
    timer.current = setInterval(() => {
      setShow(false);
      dispatch({ type: "REMOVE_MESSAGE" });
    }, 1000);

    return () => clearInterval(timer.current);
  }, [message]);

  // ==============================
  // return
  // ==============================
  if (message) {
    return (
      <>
        {show && (
          <div
            className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
            role="alert"
          >
            <p className="font-bold">{message}</p>
          </div>
        )}
      </>
    );
  }
};

export default Message;
