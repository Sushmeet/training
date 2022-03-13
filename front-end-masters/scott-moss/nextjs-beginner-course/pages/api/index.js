const handler = (req, res) => {
  res
    .status(200)
    .setHeader("name", "jomba")
    .setHeader("Content-Type", "application/json")
    .end(JSON.stringify({ message: "Hello API welcomes" }));
};

export default handler;
