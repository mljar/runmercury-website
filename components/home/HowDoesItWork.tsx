import Image from "next/image";
import notebookPic from "public/images/notebook-pic.png";
import addWidgetsPng from "public/images/add-widgets.png";
import mercuryAppPng from "public/images/mercury-web-app.png";

export default function HowDoesItWork() {
  return (
    <>
      <div
        style={{
          padding: "50px",
          marginTop: "50px",
          marginBottom: "50px",
          borderRadius: "30px",
        }}
      >
        <center>
          <h2 className="lg:text-6xl text-4xl font-extrabold text-gray-900 dark:text-white leading-normal">
            How does it work?{" "}
          </h2>
        </center>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          
            <div style={{marginTop: "auto", marginBottom: "auto"}}> 
                <div className="w-20 h-20 rounded-full border-2 flex justify-center items-center">
                  <p  className="my-4 lg:text-4xl text-2xl text-gray-500 dark:text-gray-400 ">1</p>
                </div>
                <h2 className="my-4 lg:text-4xl text-2xl font-extrabold text-gray-900 dark:text-white leading-normal"> Start with Python Notebook </h2>
                <p className="my-4 font-light text-gray-500 text-2xl dark:text-gray-400 
                leading-normal"> Python Notebook is a great tool to connect Markdown, Python code and outputs into meaningful documents.</p>

                <p className="my-4 font-light text-gray-500 text-2xl dark:text-gray-400
                leading-normal"> However, sharing notebooks with others might be challenging!</p>

          </div>

        <div style={{marginTop: "auto", marginBottom: "auto"}}>
            <Image src={notebookPic} alt="Python Notebook" loading="eager" 
                  style={{maxHeight: "500px", width: "auto", margin: "auto" }} />
          </div>
      </div>

      <div className="" style={{ padding: "50px" }}></div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          
            <div>
                <div style={{padding: "0px"}} className='sm:block hidden'/>
                <div className="w-20 h-20 rounded-full border-2 flex justify-center items-center">
                  <p  className="my-4 lg:text-4xl text-2xl text-gray-500 dark:text-gray-400 ">2</p>
                </div>
                <h2 className="my-4 lg:text-4xl text-2xl font-extrabold text-gray-900 dark:text-white leading-normal"> Make it interactive </h2>
                <p className="my-4 mb-8 font-light text-gray-500 text-2xl dark:text-gray-400 
                leading-normal"> Add widgets to you Python Notebook and make it interactive.</p>

              <p className="my-2 mb-2 font-light text-gray-500 text-2xl dark:text-gray-400
                leading-normal"> Install Mercury framework</p>

            <div className="text-2xl
            leading-8">
            ```python
            pip install mercury
            ```
            </div>

            <p className="my-4 mb-2 font-light text-gray-500 text-2xl dark:text-gray-400
                leading-normal"> Import Mercury and use widgets during development</p>

            <div className="text-2xl
            leading-8">
            ```python
            import mercury as mr

            text_input = mr.Text(label="What is your name?")
            ```
            </div>

            <p className="my-8 mb-4 font-light text-gray-500 text-2xl dark:text-gray-400
                leading-normal"> Check available widgets in docs</p>
            <a href="/docs/input-widgets/"
                  className="my-4 text-white bg-primary-600 hover:bg-primary-700
                              focus:ring-4 focus:ring-primary-200 font-medium rounded-lg
                              text-xl px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Input Widgets</a>
                <span className="m-2"></span>
                <br className="sm:hidden block"/>
                <br className="sm:hidden block"/>
                <a href="/docs/output-widgets/"
                  className="my-4 text-white bg-primary-600 hover:bg-primary-700
                              focus:ring-4 focus:ring-primary-200 font-medium rounded-lg
                              text-xl px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Output Widgets</a>
                <br className="sm:hidden block"/>
                <br className="sm:hidden block"/>

          </div>
          <div style={{marginTop: "auto", marginBottom: "auto"}}>
            <Image src={addWidgetsPng} alt="Add widgets" loading="eager"
                  style={{maxHeight: "500px", width: "auto", margin: "auto" }} />
          </div>

      </div>

      <div className="" style={{ padding: "50px" }}></div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          
            <div style={{marginTop: "auto", marginBottom: "auto"}}>
                <div style={{padding: "0px"}} className='sm:block hidden'/>
                <div className="w-20 h-20 rounded-full border-2 flex justify-center items-center">
                  <p  className="my-4 lg:text-4xl text-2xl text-gray-500 dark:text-gray-400 ">3</p>
                </div>
                <h2 className="my-4 lg:text-4xl text-2xl font-extrabold text-gray-900 dark:text-white leading-normal"> Run as Web App </h2>
                <p className="my-4 font-light text-gray-500 text-2xl dark:text-gray-400 
                leading-normal"> Start Mercury Server and serve your notebook as Web App</p>

            <div className="text-2xl
            leading-8">
            ```python
            mercury run
            ```
            </div>

            <p className="my-4 mb-2 font-light text-gray-500 text-2xl dark:text-gray-400
                leading-normal"> Users can execute your code but they can't edit it!</p>



          </div>
          <div style={{marginTop: "auto", marginBottom: "auto"}}>
            <Image src={mercuryAppPng} alt="Mercury App" loading="eager"
                  style={{maxHeight: "600px", width: "auto", margin: "auto" }} />
          </div>

      </div>

      <div className="" style={{ padding: "80px" }}></div>
    </>
  )
}
