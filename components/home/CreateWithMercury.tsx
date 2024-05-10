const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-github inline pb-1"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
    <path d="M19 16h-12a2 2 0 0 0 -2 2" />
    <path d="M9 8h6" />
  </svg>
);

const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-github inline pb-1"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 8l-4 4l4 4" />
    <path d="M17 8l4 4l-4 4" />
    <path d="M14 4l-4 16" />
  </svg>
);

export default function CreateWithMercury() {
  return (
    <div className="mx-auto max-w-7xl ">
      <div
        className="bg-primary-50 dark:bg-gray-800 rounded-2xl"
        style={{
          width: "100%",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <center>
          {/* <h2 className=" text-3xl md:text-4xl lg:text-5xl  font-extrabold text-gray-900 dark:text-white leading-normal">
            create with{" "}
            <img
              src="/images/mercury-black-logo.svg"
              style={{ height: "96px" }}
              className="dark:hidden"
              alt="Mercury Dark Logo"
            ></img>
            <img
              src="/images/mercury-white-logo.svg"
              style={{ height: "96px" }}
              className="hidden dark:block"
              alt="Mercury Logo"
            ></img>
          </h2> */}
          <h2 className=" lg:text-6xl text-4xl font-extrabold text-gray-900 dark:text-white leading-normal">
            Build web apps with Python only
          </h2>
          <p
            className="mt-4 font-light text-gray-500 text-2xl dark:text-gray-300 
        leading-normal"
          >
            You don't need to know frontend frameworks,{" "}
            <s>HTML, CSS or JavaScript</s>.
          </p>
          <p
            className="mt-4 mb-8 font-light text-gray-500 text-2xl dark:text-gray-300 
        leading-normal"
          >
            Create web applications in pure{" "}
            <u className="font-extrabold">Python</u> without leaving Jupyter
            Notebook.
          </p>

          <a
            href="/docs/"
            className="text-white bg-blue-600 hover:bg-blue-700  
                          focus:ring-4 focus:ring-primary-200 font-medium rounded-lg 
                          text-xl px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          >
            <BookIcon /> Documentation
          </a>
          <span className="m-2"></span>
          <br className="lg:hidden block" />
          <br className="lg:hidden block" />

          <a
            href="/docs/how-does-it-work/"
            className="font-medium  bg-white
                      hover:bg-blue-600   hover:text-white bg-primary
                      text-xl px-5 py-2.5 rounded-lg 
                      border "
          >
            <CodeIcon /> How does it work?
          </a>

          <div className="lg:grid lg:grid-cols-2 lg:gap-0 lg:pt-8">
            <div
              className="text-gray-900 bg-white rounded-2xl border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white p-4 m-4"
              style={{
                boxShadow:
                  "0 8px 16px rgb(0 0 0 / 8%), 0 1px 2px rgb(0 0 0 / 4%), 0 0 0 1px rgb(0 0 0 / 3%)",
              }}
            >
              <h2 className="my-4 lg:text-4xl text-2xl font-extrabold text-gray-900 dark:text-white leading-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
                  <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
                </svg>{" "}
                No callbacks!
              </h2>
              <p className="my-4 mb-8 font-light text-gray-500 dark:text-gray-300 text-xl leading-normal">
                Mercury automatically re-executes cells below updated widget.
                You don't need to write callbacks to handle widget update.
              </p>
            </div>

            <div
              className="text-gray-900 bg-white rounded-2xl border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white p-4 m-4"
              style={{
                boxShadow:
                  "0 8px 16px rgb(0 0 0 / 8%), 0 1px 2px rgb(0 0 0 / 4%), 0 0 0 1px rgb(0 0 0 / 3%)",
              }}
            >
              <h2 className="my-4 lg:text-4xl text-2xl font-extrabold text-gray-900 dark:text-white leading-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                  <path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                  <path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                  <path d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                </svg>{" "}
                Perfect layout
              </h2>
              <p
                className="my-4 mb-8 font-light text-gray-500 dark:text-gray-300 text-xl
                  leading-normal"
              >
                Widgets are in the sidebar and outputs will appear in the same
                order as in the notebook.
              </p>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
