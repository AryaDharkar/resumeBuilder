import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      nav("/");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [nav]);

  return (
    <>
      <div className="text-xl flex flex-col h-screen justify-start items-center">
        <h1>Error 404</h1>
        <p>We are making your resume but not here</p>
        <p className="text-center">
          You are being redirected to the home page in {counter}
        </p>
      </div>
    </>
  );
};
export default NotFound;
