import Nav3 from "/src/components/Navbar/Nav3";
import icon from "/src/assets/images/index.js";
import { useState } from "react";
export default function Support() {
  const [ishvr, sethvr] = useState(null);
  const order = [
    {
      img: icon.trackOrder,
      tag: "Track Order",
    },
    {
      img: icon.trackOrder,
      tag: "Return Order",
    },
    {
      img: icon.trackOrder,
      tag: "Cancel Order",
    },
    {
      img: icon.trackOrder,
      tag: "Report Order",
    },
  ];
  return (
    <div className="h-auto">
      {/* <Nav3 /> */}
      <div className="h-screen mt-40">
        <div className="h-full flex flex-col gap-20 items-center justify-center">
          <div className="flex gap-30">
            <div className=" w-50 flex flex-col items-center gap-6">
              <span className="">
                {/* chatIcon */}
                <svg
                  role="presentation"
                  fill="none"
                  focusable="false"
                  stroke-width="1.4"
                  width="75"
                  height="75"
                  class="hidden sm:block icon icon-picto-chat"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.292 9.603a6.734 6.734 0 0 0-8.765 1.597 6.805 6.805 0 0 0 .02 8.48 6.73 6.73 0 0 0 7.777 2.058l3.55.594a.644.644 0 0 0 .717-.837l-.9-2.701a6.82 6.82 0 0 0-2.4-9.19h.001Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12.165 1.635A8.978 8.978 0 0 0 5.921 2.78v-.002a9.09 9.09 0 0 0-3.199 12.257l-1.2 3.6a.857.857 0 0 0 .955 1.118l4.733-.794a8.975 8.975 0 0 0 3.277.647 6.807 6.807 0 0 1-1.265-5.673 6.806 6.806 0 0 1 1.305-2.732 6.734 6.734 0 0 1 8.765-1.597h-.002c.083.05.164.102.244.155a9.077 9.077 0 0 0-1.929-4.85 8.978 8.978 0 0 0-5.44-3.273Z"
                    fill="currentColor"
                    fill-opacity="0"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">CHAT</span>
                <span className="text-center">
                  Click the chat icon to start a chat.
                </span>
              </div>
            </div>
            <div className="w-50 flex flex-col items-center gap-6">
              <span>
                {/* Email */}
                <svg
                  role="presentation"
                  fill="none"
                  focusable="false"
                  stroke-width="1.4"
                  width="75"
                  height="75"
                  class="hidden sm:block icon icon-picto-envelope"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M1.77 18.063a3.586 3.586 0 0 0 3.174 3.11c2.278.24 4.637.49 7.056.49 2.417 0 4.778-.252 7.056-.49a3.584 3.584 0 0 0 3.175-3.11c.243-1.96.483-3.987.483-6.063 0-2.074-.24-4.102-.483-6.063a3.586 3.586 0 0 0-3.175-3.112c-2.278-.236-4.639-.487-7.056-.487s-4.778.252-7.056.49a3.583 3.583 0 0 0-3.175 3.11c-.243 1.96-.483 3.988-.483 6.062 0 2.074.24 4.102.483 6.063Z"
                    fill="currentColor"
                    fill-opacity="0"
                    stroke="currentColor"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="m1.817 5.493 8.06 6.356a3.428 3.428 0 0 0 4.245 0l8.06-6.356"
                    stroke="currentColor"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">EMAIL</span>
                <span>support@decibullz.com</span>
              </div>
            </div>
          </div>
          <div className="h-auto lg:h-full w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-20 px-10 lg:px-0">
            {order.map((ord, ind) => (
              <div
                className="h-20 lg:h-36 w-full lg:w-40 flex flex-row lg:flex-col items-center justify-start gap-10 lg:gap-0 lg:justify-around border rounded-lg lg:rounded-xl  border-gray-200 px-5 lg:px-0"
                onMouseEnter={() => {
                  sethvr(ind);
                }}
                onMouseLeave={() => {
                  sethvr(null);
                }}
              >
                <img src={ord.img} alt="to"  />
                <p className="font-semibold relative  ">
                  <span>{ord.tag}</span>
                  <span
                    className={` h-[2px] rounded-lg bg-black block  ${
                      ishvr === ind
                        ? "w-full  duration-300 ease-in-out "
                        : "w-0 duration-300 ease-out"
                    } `}
                  ></span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
