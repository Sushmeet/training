export default function UserInfo(req, res) {
  res.status(200).json({ userId: 123, userName: "sushi" });
}
