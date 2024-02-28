import { Features, Feature } from "components/features";

export default function AmazingFeatures() {
  return (
    <>
      <div className="">
        <center>
          <h2 className="my-8 lg:text-6xl text-4xl font-extrabold text-gray-900 dark:text-white leading-normal">
            Amazing features!
          </h2>
        </center>
      </div>

      <div className="features-container bg-pink-100 dark:bg-black" style={{padding: "30px", borderRadius: "30px"}}>
          
          <div className="content-container">
          
            <Features>

              <Feature index={0}  centered className="card-with-border" href="/docs/show-hide-code-notebook/">
                <div className="h-full flex flex-col justify-between">

                  <center>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 3l18 18"></path>
                      <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
                      <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"></path>
                    </svg>
                  </center>

                  <h3 style={{marginTop: "20px"}}>Hide or show code</h3>
                  <p className="mb-8 font-light text-gray-700 lg:text-2xl text-xl dark:text-gray-400
                  leading-normal" style={{marginTop: "10px"}}>You decide if you want to show or hide code in the app</p>
                </div>
              </Feature>


              <Feature index={1}  centered className="card-with-border" href="/docs/export-pdf-html/">
                <div className="h-full flex flex-col justify-between">

                  <center>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-analytics" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                      <path d="M9 17l0 -5"></path>
                      <path d="M12 17l0 -1"></path>
                      <path d="M15 17l0 -3"></path>
                    </svg>
                  </center>

                  <h3 style={{marginTop: "20px"}}>Export PDF / HTML</h3>
                  <p className="mb-8 font-light text-gray-700 lg:text-2xl text-xl dark:text-gray-400
                  leading-normal" style={{marginTop: "10px"}}>Easily export the executed notebook as a PDF or HTML</p>
                </div>
              </Feature>


              <Feature index={2}  centered className="card-with-border" href="/docs/authentication/">
                <div className="h-full flex flex-col justify-between">

                  <center>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock-open" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
                      <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M8 11v-5a4 4 0 0 1 8 0"></path>
                    </svg>
                  </center>

                  <h3 style={{marginTop: "20px"}}>Authentication</h3>
                  <p className="mb-8 font-light text-gray-700 lg:text-2xl text-xl dark:text-gray-400
                  leading-normal" style={{marginTop: "10px"}}>Decide with whom to share your notebooks</p>
                </div>
              </Feature>

              <Feature index={3}  centered className="card-with-border" href="/docs/multiple-notebooks/">
                <div className="h-full flex flex-col justify-between">

                  <center>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-files" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M15 3v4a1 1 0 0 0 1 1h4"></path>
                      <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"></path>
                      <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
                    </svg>
                  </center>

                  <h3 style={{marginTop: "20px"}}>Multiple apps</h3>
                  <p className="mb-8 font-light text-gray-700 lg:text-2xl text-xl dark:text-gray-400
                  leading-normal" style={{marginTop: "10px"}}>You can share as many notebooks as you want</p>
                </div>
              </Feature>

              <Feature index={4}  centered className="card-with-border" href="/docs/jupyter-notebook-embedding/">
                <div className="h-full flex flex-col justify-between">

                  <center>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-browser-plus" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path>
                      <path d="M4 8h16"></path>
                      <path d="M8 4v4"></path>
                      <path d="M10 14h4"></path>
                      <path d="M12 12v4"></path>
                    </svg>
                  </center>

                  <h3 style={{marginTop: "20px"}}>Embedding</h3>
                  <p className="mb-8 font-light text-gray-700 lg:text-2xl text-xl dark:text-gray-400
                  leading-normal" style={{marginTop: "10px"}}>Run notebook with Mercury and embed it on any website</p>
                </div>
              </Feature>

              <Feature index={5}  centered className="card-with-border" href="/docs/output-files/">
                <div className="h-full flex flex-col justify-between">

                  <center>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                      <path d="M7 11l5 5l5 -5"></path>
                      <path d="M12 4l0 12"></path>
                    </svg>
                  </center>

                  <h3 style={{marginTop: "20px"}}>Output files</h3>
                  <p className="mb-8 font-light text-gray-700 lg:text-2xl text-xl dark:text-gray-400
                  leading-normal" style={{marginTop: "10px"}}>Produce files in notebook and make them downloadable </p>
                </div>
              </Feature>

            </Features>
          </div>

      </div>

      <div className="" style={{ padding: "50px" }}></div>
    </>
  )
}
