
import { useRef, useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const formRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    formRef.current.reset();
  };

  return (
    <main className="min-h-screen bg-[#fffafa]">


      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">

        <div className="absolute -top-24 -right-24 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />

        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 py-16 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-100 shadow-sm">

            <MessageCircle
              size={17}
              className="text-rose-500"
            />

            <span className="text-sm font-semibold text-rose-500">
              GET IN TOUCH
            </span>

          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-5">
            We'd Love to Hear From You
          </h1>

          <p className="max-w-2xl mx-auto text-gray-500 mt-4 text-base md:text-lg leading-7">
            Have a question about your order, products, or shopping
            experience? Send us a message and our team will be happy to help.
          </p>

        </div>

      </section>


      <section className="max-w-7xl mx-auto px-5 py-12">

        <div className="grid lg:grid-cols-5 gap-8">


          <div className="lg:col-span-2">

            <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-3xl p-8 md:p-10 text-white shadow-xl shadow-rose-100">

              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">

                <MessageCircle size={27} />

              </div>

              <h2 className="text-3xl font-extrabold mt-7">
                Let's Talk
              </h2>

              <p className="text-rose-50 mt-3 leading-7">
                We're always happy to hear from you. Whether you need help
                with an order or simply have a question, our support team
                is here for you.
              </p>

              <div className="space-y-5 mt-10">

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/15 flex items-center justify-center">

                    <Mail size={19} />

                  </div>

                  <div>

                    <p className="text-xs text-rose-100 uppercase tracking-wider">
                      Email
                    </p>

                    <p className="font-semibold mt-1">
                      support@shopnest.com
                    </p>

                  </div>

                </div>


                {/* Phone */}

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/15 flex items-center justify-center">

                    <Phone size={19} />

                  </div>

                  <div>

                    <p className="text-xs text-rose-100 uppercase tracking-wider">
                      Phone
                    </p>

                    <p className="font-semibold mt-1">
                      +91 98765 43210
                    </p>

                  </div>

                </div>


                {/* Location */}

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/15 flex items-center justify-center">

                    <MapPin size={19} />

                  </div>

                  <div>

                    <p className="text-xs text-rose-100 uppercase tracking-wider">
                      Location
                    </p>

                    <p className="font-semibold mt-1">
                      Tamil Nadu, India
                    </p>

                  </div>

                </div>


                {/* Working Hours */}

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white/15 flex items-center justify-center">

                    <Clock size={19} />

                  </div>

                  <div>

                    <p className="text-xs text-rose-100 uppercase tracking-wider">
                      Working Hours
                    </p>

                    <p className="font-semibold mt-1">
                      Mon - Sat, 9:00 AM - 6:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          <div className="lg:col-span-3">

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-rose-100 shadow-sm p-7 md:p-10"
            >

              {/* Form Header */}

              <div className="mb-8">

                <p className="text-rose-500 text-sm font-bold uppercase tracking-wider">
                  Send a Message
                </p>

                <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                  How Can We Help?
                </h2>

                <p className="text-gray-500 mt-2">
                  Fill in the details below and we'll get back to you soon.
                </p>

              </div>


              {/* Success Message */}

              {submitted && (

                <div className="mb-6 flex items-start gap-3 bg-green-50 border border-green-100 text-green-700 p-4 rounded-2xl">

                  <CheckCircle
                    size={21}
                    className="mt-0.5 shrink-0"
                  />

                  <div>

                    <p className="font-semibold">
                      Message sent successfully!
                    </p>

                    <p className="text-sm text-green-600 mt-1">
                      Thank you for contacting ShopNest. We'll get back to
                      you soon.
                    </p>

                  </div>

                </div>

              )}


              {/* Name + Email */}

              <div className="grid md:grid-cols-2 gap-5">

                {/* Name */}

                <div>

                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="
                      w-full
                      h-13
                      px-4
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      text-gray-900
                      placeholder:text-gray-400
                      outline-none
                      transition
                      focus:bg-white
                      focus:border-rose-400
                      focus:ring-4
                      focus:ring-rose-100
                    "
                  />

                </div>


                {/* Email */}

                <div>

                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="
                      w-full
                      h-13
                      px-4
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      text-gray-900
                      placeholder:text-gray-400
                      outline-none
                      transition
                      focus:bg-white
                      focus:border-rose-400
                      focus:ring-4
                      focus:ring-rose-100
                    "
                  />

                </div>

              </div>


              {/* Subject */}

              <div className="mt-5">

                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  required
                  type="text"
                  placeholder="What would you like to ask?"
                  className="
                    w-full
                    h-13
                    px-4
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    text-gray-900
                    placeholder:text-gray-400
                    outline-none
                    transition
                    focus:bg-white
                    focus:border-rose-400
                    focus:ring-4
                    focus:ring-rose-100
                  "
                />

              </div>


              {/* Message */}

              <div className="mt-5">

                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Write your message here..."
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    text-gray-900
                    placeholder:text-gray-400
                    outline-none
                    resize-none
                    transition
                    focus:bg-white
                    focus:border-rose-400
                    focus:ring-4
                    focus:ring-rose-100
                  "
                />

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="
                  mt-6
                  w-full
                  h-13
                  rounded-xl
                  bg-rose-500
                  hover:bg-rose-600
                  text-white
                  font-bold
                  flex
                  items-center
                  justify-center
                  gap-2
                  shadow-lg
                  shadow-rose-200
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

                <Send size={18} />

                Send Message

              </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                We usually respond within 24 hours.
              </p>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

