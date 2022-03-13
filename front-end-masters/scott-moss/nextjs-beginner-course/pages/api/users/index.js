import nc from "next-connect";
import cors from "cors";

const handler = nc({
  onNoMatch: (req, res, next) => {
    res.status(404).json({ status: "Sorry Sushi, No Page was Found" });
  },
})
  .use(cors())
  .get((req, res) => {
    res.status(200).json({ status: "You reached the GET route" });
  })
  .post((req, res) => {
    res.status(200).json({ status: "You reached the POST route" });
  });

export default handler;
