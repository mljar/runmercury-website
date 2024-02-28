

export default function Deployment() {
  return (
    <div className="bg-primary-100 dark:bg-gray-800" style={{
      paddingTop: "100px",
      paddingBottom: "100px",
      borderRadius: "30px"
    }}>
    <center>
        <h2 className=" lg:text-6xl text-4xl font-extrabold text-gray-900 dark:text-white leading-normal">Deployment</h2>
        <p className="my-4 font-light text-gray-500 text-2xl dark:text-gray-400 
        leading-normal" style={{paddingBottom: "20px", paddingTop: "20px", margin: "0px"}}>  Easily put your notebooks over Internet </p>
        </center>

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
        <center>
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
          <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878"></path>
        </svg>

        <h2 className="my-4 lg:text-4xl text-2xl font-extrabold text-gray-900 dark:text-white leading-normal"> Mercury Cloud</h2>
              <p className="my-4 mb-8 font-light text-gray-500 dark:text-gray-300 text-xl
              leading-normal"> Deployment as easy as file upload. Set custom domain and use secure connection.</p>

        <a href="https://cloud.runmercury.com"
                target="_blank"
                className="text-white bg-primary-600 hover:bg-primary-700
                            focus:ring-4 focus:ring-primary-200 font-medium rounded-lg
                            px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Sign up</a>

        </center>

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
      <center>
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
          <path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8"></path>
          <path d="M7 20h4"></path>
          <path d="M9 16v4"></path>
          <path d="M20 21l2 -2l-2 -2"></path>
          <path d="M17 17l-2 2l2 2"></path>
        </svg>

        <h2 className="my-4 lg:text-4xl text-2xl font-extrabold text-gray-900 dark:text-white leading-normal"> Self host</h2>
              <p className="my-4 mb-8 font-light text-gray-500 dark:text-gray-300 text-xl
              leading-normal">Configure your own server and deploy notebooks on your own infrastructure.</p>


        <a href="/docs/"
                className="text-white bg-primary-600 hover:bg-primary-700
                            focus:ring-4 focus:ring-primary-200 font-medium rounded-lg
                            px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Deployment docs</a>

      </center>
      </div>
    </div>

    </div>
  )
}
