import { useRef, useState } from "react";
import {
  Camera,
  User,
  Mail,
  ShieldCheck,
  Save,
} from "lucide-react";

export default function Profile() {
  const fileRef = useRef(null);

  const [image, setImage] = useState(null);

  const [name, setName] = useState("Priyanka");

  const [email, setEmail] = useState(
    "priyanka@example.com"
  );

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <main className="min-h-screen bg-[#fffafa]">

      {/* ================= HEADER ================= */}

      <section className="bg-gradient-to-br from-rose-50 via-white to-pink-50">

        <div className="max-w-5xl mx-auto px-5 py-12">

          <p className="text-rose-500 font-bold text-sm uppercase tracking-wider">
            ACCOUNT SETTINGS
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            My Profile
          </h1>

          <p className="text-gray-500 mt-3">
            Manage your personal information and profile picture.
          </p>

        </div>

      </section>


      {/* ================= PROFILE CARD ================= */}

      <section className="max-w-5xl mx-auto px-5 py-10">

        <div className="
          bg-white
          border
          border-rose-100
          rounded-3xl
          shadow-sm
          overflow-hidden
        ">

          {/* ================= PROFILE TOP ================= */}

          <div className="
            bg-gradient-to-r
            from-rose-500
            to-pink-500
            h-32
          " />

          <div className="px-6 md:px-10 pb-10">

            {/* ================= IMAGE ================= */}

            <div className="flex flex-col items-center -mt-16">

              <div className="relative">

                <div className="
                  w-32
                  h-32
                  rounded-full
                  bg-white
                  p-1.5
                  shadow-xl
                ">

                  <img
                    src={
                      image ||
                      "https://i.pravatar.cc/150?img=47"
                    }
                    alt="Profile"
                    className="
                      w-full
                      h-full
                      rounded-full
                      object-cover
                    "
                  />

                </div>


                {/* CAMERA BUTTON */}

                <button
                  type="button"
                  onClick={() =>
                    fileRef.current.click()
                  }
                  className="
                    absolute
                    right-1
                    bottom-1
                    w-11
                    h-11
                    rounded-full
                    bg-rose-500
                    text-white
                    flex
                    items-center
                    justify-center
                    border-4
                    border-white
                    shadow-md
                    hover:bg-rose-600
                    hover:scale-105
                    transition
                  "
                  title="Change profile picture"
                >

                  <Camera size={18} />

                </button>


                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImage}
                />

              </div>


              <h2 className="
                text-2xl
                font-bold
                text-gray-900
                mt-5
              ">
                {name}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {email}
              </p>

            </div>


            {/* ================= DIVIDER ================= */}

            <div className="border-t border-gray-100 my-10" />


            {/* ================= PERSONAL INFORMATION ================= */}

            <div>

              <div className="flex items-center gap-3 mb-6">

                <div className="
                  w-10
                  h-10
                  rounded-xl
                  bg-rose-50
                  flex
                  items-center
                  justify-center
                ">

                  <User
                    size={19}
                    className="text-rose-500"
                  />

                </div>

                <div>

                  <h3 className="font-bold text-gray-900">
                    Personal Information
                  </h3>

                  <p className="text-sm text-gray-500">
                    Update your account details
                  </p>

                </div>

              </div>


              <div className="grid md:grid-cols-2 gap-6">

                {/* NAME */}

                <div>

                  <label className="
                    text-sm
                    font-semibold
                    text-gray-700
                  ">
                    Full Name
                  </label>

                  <div className="relative mt-2">

                    <User
                      size={18}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                      "
                    />

                    <input
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      placeholder="Enter your name"
                      className="
                        w-full
                        pl-11
                        pr-4
                        py-3.5
                        rounded-xl
                        border
                        border-gray-200
                        bg-gray-50
                        text-gray-900
                        outline-none
                        placeholder:text-gray-400
                        focus:bg-white
                        focus:border-rose-400
                        focus:ring-4
                        focus:ring-rose-50
                        transition
                      "
                    />

                  </div>

                </div>


                {/* EMAIL */}

                <div>

                  <label className="
                    text-sm
                    font-semibold
                    text-gray-700
                  ">
                    Email Address
                  </label>

                  <div className="relative mt-2">

                    <Mail
                      size={18}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                      "
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      placeholder="Enter your email"
                      className="
                        w-full
                        pl-11
                        pr-4
                        py-3.5
                        rounded-xl
                        border
                        border-gray-200
                        bg-gray-50
                        text-gray-900
                        outline-none
                        placeholder:text-gray-400
                        focus:bg-white
                        focus:border-rose-400
                        focus:ring-4
                        focus:ring-rose-50
                        transition
                      "
                    />

                  </div>

                </div>

              </div>

            </div>


            {/* ================= ACCOUNT SECURITY ================= */}

            <div className="
              mt-8
              p-5
              rounded-2xl
              bg-rose-50
              border
              border-rose-100
              flex
              gap-4
              items-start
            ">

              <div className="
                w-10
                h-10
                shrink-0
                rounded-xl
                bg-white
                flex
                items-center
                justify-center
              ">

                <ShieldCheck
                  size={20}
                  className="text-rose-500"
                />

              </div>

              <div>

                <h3 className="font-bold text-gray-900">
                  Your information is secure
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Your personal information is kept safe
                  and is only used to manage your account.
                </p>

              </div>

            </div>


            {/* ================= SAVE BUTTON ================= */}

            <div className="
              flex
              justify-end
              mt-8
            ">

              <button
                type="button"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-xl
                  bg-rose-500
                  hover:bg-rose-600
                  text-white
                  font-semibold
                  shadow-lg
                  shadow-rose-100
                  hover:shadow-xl
                  transition
                "
              >

                <Save size={18} />

                Save Changes

              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
