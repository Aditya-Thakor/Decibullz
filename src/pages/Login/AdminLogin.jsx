import { useState } from "react";
import { useNavigate } from "react-router-dom";
import l from "../../assets/images/index";
export default function AdminLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleLogin = async () => {
    const formData1 = new FormData();
    formData1.append("email", email);
    formData1.append("password", password);

    const result = await fetch("http://localhost:5000/admininfo", {
      method: "post",
      body: formData1,
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });

    if (result.length == 0) {
      alert("Invalid credentail");
    } else {
      navigate("/admin/admindashboard");
      console.log("Login Success");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <div className="h-3/4 w-1/3 flex flex-col gap-5 bg-white rounded-xl shadow-md px-10 py-5">
        <div className="h-14 ">
          <img
            src={l.logo}
            alt="logo"
            className="h-full w-full invert cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="grid gap-3 grid-cols-1">
          <span className="text-2xl font-semibold">Admin Log in</span>
        </div>

        <div className="grid gap-4 grid-cols-1">
          <input
            type="text"
            placeholder="Email"
            className="border p-3 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={` border rounded-lg p-4  text-sm font-bold bg-stone-50 hover:bg-orange-500 hover:text-white `}
            onClick={handleLogin}
          >
            Continue
          </button>
        </div>
        <div className="flex  gap-3 text-blue-600 text-sm cursor-pointer">
          <span className="hover:underline">Privacy Policy</span>
          <span className="hover:underline">Terms of Service</span>
        </div>
      </div>
    </div>
  );
}
