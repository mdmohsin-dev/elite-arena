import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "../../assets/images/user.jpg"

const Profile = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[80vh] mt-10 px-4">
        <div className="w-full max-w-xl bg-linear-to-br from-[#FF02CB] to-black text-black rounded-2xl shadow-xl p-12 flex flex-col items-center">
          <img
            src={user?.photoURL || logo}
            alt="User"
            className="w-48 h-48  rounded-full mb-6"
          />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white pb-2">
            {user.displayName}
          </h2>
          <p className="text-gray-300 text-xl italic font-semibold">{user.email}</p>

          {/* <p className="text-gray-700 dark:text-gray-300 mt-2 text-lg font-hoover uppercase">
            <strong className="normal-case">ElitClub's :</strong>{" "}
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Profile;