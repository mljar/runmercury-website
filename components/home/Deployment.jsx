

export default function Deployment() {
  // bg-primary-100 dark:bg-gray-800
  return (

    <div className="mx-auto max-w-7xl" style={{
      paddingTop: "100px",
      paddingBottom: "100px",
      borderRadius: "30px"
    }}>
      <center>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-normal">One click deployment</h2>
        <p className="my-4 font-light text-gray-500 text-2xl dark:text-gray-400 
        leading-normal" style={{ paddingBottom: "20px", paddingTop: "20px", margin: "0px" }}> Sharing notebooks with Mercury is very easy. <br /> The easiest way is to use Mercury Cloud or you can setup your own server. </p>
      </center>

      <div className="lg:grid lg:grid-cols-2">

        <div
          className="text-gray-900 bg-white rounded-3xl border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white my-2 md:m-4 p-4 pb-8"
          style={{

            boxShadow:
              "0 8px 16px rgb(0 0 0 / 8%), 0 1px 2px rgb(0 0 0 / 4%), 0 0 0 1px rgb(0 0 0 / 3%)",

          }}
        >
          <center>


            <h2 className="my-4 lg:text-4xl text-2xl font-extrabold text-gray-900 dark:text-white leading-normal"> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mb-1"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878"></path>
            </svg> Mercury Cloud</h2>
            <p className="my-4 mb-8 font-light text-gray-500 dark:text-gray-300 text-xl
              leading-normal">Mercury Cloud is a service managed by us. You can setup your own website with unique domain address in few seconds. Notebooks deployment is done with one click.</p>

            <a href="https://cloud.runmercury.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl bg-blue-600 hover:bg-blue-700  
                            focus:ring-4 focus:ring-primary-200 font-medium rounded-lg
                            px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Create website</a>

          </center>

        </div>
        <div
          className="text-gray-900 bg-white rounded-3xl border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white md:m-4 p-4 pb-8"
          style={{

            boxShadow:
              "0 8px 16px rgb(0 0 0 / 8%), 0 1px 2px rgb(0 0 0 / 4%), 0 0 0 1px rgb(0 0 0 / 3%)",

          }}
        >
          <center>


            <h2 className="my-4 lg:text-4xl text-2xl font-extrabold text-gray-900 dark:text-white leading-normal"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mb-1"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8"></path>
              <path d="M7 20h4"></path>
              <path d="M9 16v4"></path>
              <path d="M20 21l2 -2l-2 -2"></path>
              <path d="M17 17l-2 2l2 2"></path>
            </svg> Self host</h2>
            <p className="my-4 mb-8 font-light text-gray-500 dark:text-gray-300 text-xl
              leading-normal">You can configure your own server and deploy notebooks on your own infrastructure.
              We provide instructions on how to run your own server with docker-compose.
            </p>


            <a href="/docs/"
              className="text-white text-xl bg-blue-600 hover:bg-blue-700  
                            focus:ring-4 focus:ring-primary-200 font-medium rounded-lg
                            px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Documentation</a>

          </center>
        </div>
      </div>

    </div>
  )
}
