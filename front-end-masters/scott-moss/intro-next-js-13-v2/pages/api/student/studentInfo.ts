import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  job: string;
};

export default function StudentInfo(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json({ name: "john snow", job: "student" });
  }
}
