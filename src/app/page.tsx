import Image from "next/image";

//Create a TailwindCss Loader
// const Wraper: (childern: React.ReactNode) => void;
export default function Home() {
  const Wraper = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return <div className="w-[8rem h-[8rem]">{children}</div>;
  };

  return (
    <main className="text-center mt-5">
      <h1 className="text-5xl font-bold underline">Tailwind css Loader</h1>
      <div className="flex justify-center mt-2 px-2 py-10">
        <div className="w-full h-[40rem] border-2 border-blue-500 bottom-2 text-white flex items-center justify-center">
          {/* First Loader */}
          {/*  you can change parent to every one */}
          <Wraper>
            <div className=" w-16 h-16 relative">
              <div className=" w-10 h-10 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
          </Wraper>
          {/* Second Loader */}
          <div className="w-[8rem] h-[8rem]">
            <div className="flex space-x-2">
              <div className=" w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
              <div className=" w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
              <div className=" w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
          </div>
          {/* Third Loader */}
          <div className="w-[8rem] h-[8rem]">
            <div className="w-16 h-16 border-4 border-blue-500 border-opacity-50 rounded-full animate-ping"></div>
          </div>
          {/* fourth Loader */}
          <div className="w-[8rem] h-[8rem]">
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
          {/* fifth Button Loader */}
          <div className="w-[8rem] h-[8rem]">
            <button
              className=" disabled:opacity-50 transition inline-flex items-center justify-center space-x-1.5 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:z-10 shrink-0 border-blue-700/50 text-white bg-blue-600  hover:bg-blue-700
             px-3 py-1.5 text-sm font-medium rounded-md
            "
            >
              {/* where is button wait a while */}
              <div aria-label="Loading..." role="status">
                <svg
                  viewBox="0 0 256 256"
                  className="stroke-white w-6 h-6 animate-spin"
                >
                  <line
                    x1="128"
                    y1="32"
                    x2="128"
                    y2="64"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="195.9"
                    y1="60.1"
                    x2="173.3"
                    y2="82.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="224"
                    y1="128"
                    x2="192"
                    y2="128"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="195.9"
                    y1="195.9"
                    x2="173.3"
                    y2="173.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="128"
                    y1="224"
                    x2="128"
                    y2="192"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="195.9"
                    x2="82.7"
                    y2="173.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="32"
                    y1="128"
                    x2="64"
                    y2="128"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="60.1"
                    x2="82.7"
                    y2="82.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                </svg>
              </div>
              <span>Loading...</span>
            </button>
          </div>
          {/* sixth Button Loader */}
          <div className="w-[8rem] h-[8rem]">
            <button
              className=" disabled:opacity-50 transition inline-flex items-center justify-center space-x-1.5 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:z-10 shrink-0 border-blue-700/50 text-white bg-blue-600  hover:bg-blue-700
             px-3 py-1.5 text-sm font-medium rounded-md
            "
            >
              <div aria-label="Loading..." role="status">
                {/* // width and height is same  */}
                <svg
                  className="animate-spin w-6 h-6 fill-white"
                  viewBox="3 3 18 18"
                >
                  <path
                    className="opacity-20"
                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                  ></path>
                  <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                </svg>
              </div>
              <span>Loading...</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
