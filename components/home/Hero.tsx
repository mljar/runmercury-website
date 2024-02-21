import Image from "next/image";

import mercuryHq from "public/images/mercury-hq.png";

export default function Hero() {
  return (
    <>
      <div className=" " style={{ padding: "30px" }}></div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <div>
          <Image src={mercuryHq} alt="Turn Notebook to Web App" loading="eager" 
                style={{margin: "0px", borderRadius: "0px", position: "inherit" }} />
        </div>
          <div style={{marginTop: "auto", marginBottom: "auto"}}>
            <h1 className="my-4 lg:text-6xl text-4xl font-extrabold text-gray-900 dark:text-white leading-normal"> Python Notebooks <br/> to Web Apps </h1>
            <p className="my-4 mb-8 font-light text-gray-500 text-2xl dark:text-gray-400 
            leading-normal"> Turn your Python Notebook into a Web App with the <i>open-source</i> <b>Mercury</b> framework. 
              Share your results with non-technical users.</p>
            <a href="https://cloud.runmercury.com" target="_blank"
              className="text-white bg-primary-600 hover:bg-primary-700 
                          focus:ring-4 focus:ring-primary-200 font-medium rounded-lg 
                          text-xl px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Sign up for Cloud</a> 
            <span className="m-2"></span>
            <br className="sm:hidden block"/>
            <br className="sm:hidden block"/>
            {/*<a href="https://github.com/mljar/mercury" className="font-medium 
                    hover:bg-primary-700 hover:text-white bg-primary
                    text-xl px-5 py-2.5 rounded-lg 
                    border hover:border-0" target="_blank">{githubIcon} Star on GitHub</a>*/}
            <a href="/docs/" className="font-medium 
                      hover:bg-primary-700 hover:text-white bg-primary
                      text-xl px-5 py-2.5 rounded-lg 
                      border hover:border-0" >Learn more</a>
        </div>

      </div>

      <div className="" style={{ padding: "50px" }}></div>
    </>
  )
}
