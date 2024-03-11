const users = [
  {
    name: "Rise",
    email: "rise@example.com",
    imgUrl: "/images/Profile.png",
    password: "12345",
    role: "admin",
  },
  {
    name: "Addis",
    email: "addis@example.com",
    imgUrl: "/images/user.png",
    password: "12345",
    role: "user",
  },
];

export default function handler(req, res) {
  const { password, email } = req.body;

  if (!password || !email) {
    res.json({ status: 400, message: "Missing required fields", error: true });
  }

  const user = users.find((user) => user.email === email);

  if (!user) {
    res.json({
      status: 404,
      message: "User not found, please signup and login",
      error: true,
    });
  }

  if (user.password !== password) {
    res.json({ status: 401, message: "Invalid credentials", error: true });
  }

  res.json({
    status: 200,
    message: "Logged in  successfully",
    user: {
      name: user.name,
      email: user.email,
      imgUrl: user.imgUrl,
      role: user.role,
    },
    error: false,
  });
}
