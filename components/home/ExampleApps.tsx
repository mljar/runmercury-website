export default function ExampleApps() {
  return (
    <>
      <div 
        className="bg-primary-50 dark:bg-gray-800"
        style={{
          width: "100%",
          paddingTop: "80px",
          paddingBottom: "80px",
          borderRadius: "30px"
        }}
      >
        <center>
          <h2 className=" lg:text-6xl text-4xl font-extrabold text-gray-900 dark:text-white leading-normal">
            Example Apps
          </h2>
          <p
            className="my-4 mb-8 font-light text-gray-500 text-2xl dark:text-gray-300 
          leading-normal"
            style={{ paddingBottom: "20px", paddingTop: "40px", margin: "0px" }}
          >
            Check example Apps created in Python notebook with Mercury
          </p>
              <a href="/examples/"
                  target="_blank"
                  className="text-white bg-blue-600 hover:bg-blue-700  
                              focus:ring-4 focus:ring-primary-200 font-medium rounded-lg
                              px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">More examples</a>


      <div className="lg:grid lg:grid-cols-3 " style={{paddingTop: "50px"}}>

      <div
        className="text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          style={{
            border: "1px solid #eee",
            margin: "10px",
            padding: "20px",
            paddingBottom: "40px",
            borderRadius: "30px",
            boxShadow:
              "0 8px 16px rgb(0 0 0 / 8%), 0 1px 2px rgb(0 0 0 / 4%), 0 0 0 1px rgb(0 0 0 / 3%)",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <img src="images/examples/examples-static-notebook.png" alt="Example static notebook"></img>

                <p className="my-4 mb-8 font-light text-gray-500 dark:text-gray-300 text-xl
                leading-normal"> Share notebooks as static websites</p>

        <a href="https://use-cases.runmercury.com/app/static-notebook-2" target="_blank" 
                  className="text-white bg-blue-600 hover:bg-blue-700  
                              focus:ring-4 focus:ring-primary-200 font-medium rounded-lg
                              px-5 py-2.5 text-center dark:text-white mx-4  dark:focus:ring-primary-900">Live app</a>
          <a href="https://github.com/mljar/mercury-examples/blob/main/static-notebook-2.ipynb" target="_blank" 
                  className="hover:bg-blue-600   hover:text-white bg-primary
                        px-5 py-2.5 rounded-lg 
                        border hover:border-0">Check code</a>

        </div>

        <div
        className="text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          style={{
            border: "1px solid #eee",
            margin: "10px",
            padding: "20px",
            paddingBottom: "40px",
            borderRadius: "30px",
            boxShadow:
              "0 8px 16px rgb(0 0 0 / 8%), 0 1px 2px rgb(0 0 0 / 4%), 0 0 0 1px rgb(0 0 0 / 3%)",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <img src="images/examples/examples-ticker-app.png" alt="Python Notebook with financial data application"></img>

                <p className="my-4 mb-8 font-light text-gray-500 dark:text-gray-300 text-xl
                leading-normal">Ticker report created in Python notebook</p>

          
          <a href="https://use-cases.runmercury.com/app/ticker-report" target="_blank" 
                  className="text-white bg-blue-600 hover:bg-blue-700  
                              focus:ring-4 focus:ring-primary-200 font-medium rounded-lg
                              px-5 py-2.5 text-center dark:text-white mx-4  dark:focus:ring-primary-900">Live app</a>
          <a href="https://github.com/mljar/mercury-examples/blob/main/use-cases/ticker-app/ticker-report.ipynb" target="_blank" 
                  className="hover:bg-blue-600   hover:text-white bg-primary
                        px-5 py-2.5 rounded-lg 
                        border hover:border-0">Check code</a>

        </div>
        
        
        <div
        className=" text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          style={{
            border: "1px solid #eee",
            margin: "10px",
            padding: "20px",
            paddingBottom: "40px",
            borderRadius: "30px",
            boxShadow:
              "0 8px 16px rgb(0 0 0 / 8%), 0 1px 2px rgb(0 0 0 / 4%), 0 0 0 1px rgb(0 0 0 / 3%)",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <img src="images/examples/examples-altair-dashboard.png" alt="Python Notebook with dashboard created with altair viz"></img>

                <p className="my-4 mb-8 font-light text-gray-500 dark:text-gray-300 text-xl
                leading-normal">Interactive dashboard built with Altair</p>


          <a href="https://use-cases.runmercury.com/app/report" target="_blank" 
                  className="text-white bg-blue-600 hover:bg-blue-700  
                              focus:ring-4 focus:ring-primary-200 font-medium rounded-lg
                              px-5 py-2.5 text-center dark:text-white mx-4  dark:focus:ring-primary-900">Live app</a>
          <a href="https://github.com/mljar/mercury-examples/blob/main/use-cases/report/report.ipynb" target="_blank" 
                  className="hover:bg-blue-600   hover:text-white bg-primary
                        px-5 py-2.5 rounded-lg 
                        border hover:border-0">Check code</a>

        </div>
        
      </div>

        </center>
      </div>

      <div className="" style={{ padding: "20px" }}></div>
    </>
  )
}
