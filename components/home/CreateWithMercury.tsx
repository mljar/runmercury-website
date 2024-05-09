export default function CreateWithMercury() {
  return (
    <div
      className="bg-primary-50 dark:bg-gray-800"
      style={{
        width: "100%",
        paddingTop: "70px",
        paddingBottom: "70px",
        borderRadius: "30px",
      }}
    >
      <center>
        <h2 className=" lg:text-6xl text-4xl font-extrabold text-gray-900 dark:text-white leading-normal">
          Create with{" "}
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
        </h2>
        <p
          className="mt-4 font-light text-gray-500 text-2xl dark:text-gray-300 
        leading-normal"
        >
          You don't need to know frontend frameworks,{" "}
          <s>HTML, CSS or JavaScript</s>.
        </p>
        <p
          className="mt-4 mb-12 font-light text-gray-500 text-2xl dark:text-gray-300 
        leading-normal"
        >
          All in pure <u className="font-extrabold">Python</u> without leaving
          Jupyter Notebook.
        </p>

        <h2 className="my-8 lg:text-6xl text-4xl font-extrabold text-gray-900 dark:text-white leading-normal">
          The simplest framework
        </h2>

        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div
            className="text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            style={{
              border: "1px solid #eee",
              margin: "30px",
              padding: "30px",
              borderRadius: "30px",
              boxShadow:
                "0 8px 16px rgb(0 0 0 / 8%), 0 1px 2px rgb(0 0 0 / 4%), 0 0 0 1px rgb(0 0 0 / 3%)",
              transition: "box-shadow 0.3s ease",
            }}
          >
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
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
              <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
            </svg>

            <h2 className="my-4 lg:text-4xl text-2xl font-extrabold text-gray-900 dark:text-white leading-normal">
              {" "}
              No callbacks!
            </h2>
            <p className="my-4 mb-8 font-light text-gray-500 dark:text-gray-300 text-xl leading-normal">
              Mercury automatically re-executes cells below updated widget. You
              don't need to write callbacks to handle widget update.
            </p>

            <a
              href="/docs/how-does-it-work/"
              target="_blank"
              className="text-white bg-primary-600 hover:bg-primary-700
                          focus:ring-4 focus:ring-primary-200 font-medium rounded-lg
                          px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              How does it work?
            </a>
          </div>

          <div
            className="text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            style={{
              border: "1px solid #eee",
              margin: "30px",
              padding: "30px",
              borderRadius: "30px",
              boxShadow:
                "0 8px 16px rgb(0 0 0 / 8%), 0 1px 2px rgb(0 0 0 / 4%), 0 0 0 1px rgb(0 0 0 / 3%)",
              transition: "box-shadow 0.3s ease",
            }}
          >
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
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
              <path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
              <path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
              <path d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
            </svg>

            <h2 className="my-4 lg:text-4xl text-2xl font-extrabold text-gray-900 dark:text-white leading-normal">
              Don't worry about layout
            </h2>
            <p
              className="my-4 mb-8 font-light text-gray-500 dark:text-gray-300 text-xl
                  leading-normal"
            >
              Widgets are in the sidebar and outputs will appear in the same
              order as in the notebook.
            </p>

            <a
              href="/docs/"
              className="text-white bg-primary-600 hover:bg-primary-700
                                focus:ring-4 focus:ring-primary-200 font-medium rounded-lg
                                px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Check docs
            </a>
          </div>
        </div>
      </center>
    </div>
  );
}
