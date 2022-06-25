const tick = () => {
  return new Date().toLocaleTimeString();
};

export const Time = () => {
  return (
    <>
      <h1>Wohoooo!!!!!</h1>
      <h2>It is {setInterval(tick, 1000)} </h2>
    </>
  );
};
