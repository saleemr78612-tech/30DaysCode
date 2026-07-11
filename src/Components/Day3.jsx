
import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaSyncAlt,
  FaCopy,
} from "react-icons/fa";

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(user.email);
    alert("Email copied!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="h-14 w-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={user.picture.large}
            alt={user.name.first}
            className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-lg hover:scale-105 duration-300"
          />
        </div>

        {/* Name */}
        <div className="text-center mt-5">
          <h1 className="text-3xl font-bold">
            {user.name.first} {user.name.last}
          </h1>

          <p className="text-slate-300 mt-1">
            @{user.login.username}
          </p>
        </div>

        {/* User Info */}
        <div className="mt-8 space-y-4">

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-400" />
            <p className="flex-1">{user.email}</p>

            <button
              onClick={copyEmail}
              className="hover:text-blue-400"
            >
              <FaCopy />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-green-400" />
            <p>{user.phone}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaBirthdayCake className="text-pink-400" />
            <p>{user.dob.age} Years Old</p>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-red-400" />
            <p>
              {user.location.city},{" "}
              {user.location.country}
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={fetchUser}
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 duration-300"
        >
          <FaSyncAlt />
          Generate New User
        </button>
      </div>
    </div>
  );
}

export default RandomUser;