import Image from "next/image";

import mercuryHq from "public/images/mercury-hq.png";

const GithubIcon = () => (
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
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
);

export default function Hero() {
  return (
    <>
      <div className=" " style={{ padding: "30px" }}></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="md:grid md:grid-cols-2 md:gap-2">
          <div>
            <Image
              src={mercuryHq}
              alt="Turn Jupyter Notebook to Web App"
              loading="eager"
              style={{ margin: "0px" }}
            />
          </div>
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            <h1 className="my-4 text-3xl md:text-4xl lg:text-5xl  font-extrabold text-gray-900 dark:text-white leading-normal">
              {" "}
              Python Notebooks <br /> to Web Apps{" "}
            </h1>
            <p
              className="my-4 mb-8 font-light text-gray-500 text-xl lg:text-2xl dark:text-gray-400 
            leading-normal"
            >
              {" "}
              Turn your Python Notebook into a Web App with the{" "}
              <i>open-source</i> <b>Mercury</b> framework. Share your results
              with non-technical users.
            </p>
            <a
              href="https://cloud.runmercury.com"
              target="_blank"
              className="text-white bg-blue-600 hover:bg-blue-700  
                          focus:ring-4 focus:ring-primary-200 font-medium rounded-lg 
                          text-xl px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Sign up for Cloud
            </a>
            <span className="m-2"></span>
            <br className="lg:hidden block" />
            <br className="lg:hidden block" />
            {/*<a href="https://github.com/mljar/mercury" className="font-medium 
                    hover:bg-blue-600   hover:text-white bg-primary
                    text-xl px-5 py-2.5 rounded-lg 
                    border hover:border-0" target="_blank">{githubIcon} Star on GitHub</a>*/}
            <a
              href="https://github.com/mljar/mercury"
              className="font-medium 
                      hover:bg-blue-600   hover:text-white bg-primary
                      text-xl px-5 py-2.5 rounded-lg 
                      border hover:border-0"
            >
              <GithubIcon /> Check our GitHub
            </a>
          </div>
        </div>

        <div className="" style={{ padding: "50px" }}></div>
      </div>
    </>
  );
}
