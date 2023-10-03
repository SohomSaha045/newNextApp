"use client";
const { useRouter } = require("next/navigation");

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Login Page</h1>
      <br />
      <br />
      <button onClick={router.back}>Back to Origin</button>
      <br />
    </div>
  );
};
export default Login;
