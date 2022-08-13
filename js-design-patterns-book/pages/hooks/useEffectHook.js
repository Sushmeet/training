import { useEffect, useState } from "react";

const Hook = () => {
  // lets add a useState hook to track the state of localTime
  const [localeTime, setLocaleTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setLocaleTime(new Date()), 2000);
    return () => clearTimeout(timer);
  }, [localeTime]);

  return (
    <>
      <h1>This is time page</h1>
      <h2>Local time is: {localeTime.toLocaleTimeString()}</h2>
    </>
  );
};

export default Hook;
