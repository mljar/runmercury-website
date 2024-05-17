import { Features, Feature } from "components/features";

export default function YouCanBuild() {
  return (
    <div className="mx-auto max-w-7xl ">
      <div className="">
        <center>
          <h2 className="my-8 lg:text-6xl text-4xl font-extrabold text-gray-900 dark:text-white leading-normal">
            What you can build?
          </h2>
        </center>
      </div>

      <div
        className="features-container bg-primary-300 dark:bg-black"
        style={{ padding: "30px", borderRadius: "30px" }}
      >
        <div className="content-container">
          <Features>
            <Feature
              index={0}
              centered
              className="card-with-border"
              href="/tutorials/web-app-python-jupyter-notebook/"
              aria="Read more on how to create data-rich web apps with Python"
            >
              <div className="h-full flex flex-col justify-between">
                <a
                  href="/tutorials/web-app-python-jupyter-notebook/"
                  className="hover:underline"
                >
                  <h3 style={{ marginTop: "20px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline mb-1"
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
                      <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                      <path d="M6 8h.01"></path>
                      <path d="M9 8h.01"></path>
                    </svg>{" "}
                    Web Apps
                  </h3>
                </a>
                <p
                  className="mb-8 font-light text-gray-700 lg:text-2xl text-xl dark:text-gray-400
                  leading-normal"
                  style={{ marginTop: "10px" }}
                >
                  Create data-rich web apps with interactive widgets
                </p>
              </div>
            </Feature>

            <Feature
              index={1}
              centered
              className="card-with-border"
              href="/tutorials/report-python-jupyter-notebook/"
              aria="Read more on how to create reports in Python Notebook"
            >
              <div className="h-full flex flex-col justify-between">
                <a
                  href="/tutorials/report-python-jupyter-notebook/"
                  className="hover:underline"
                >
                  <h3 style={{ marginTop: "20px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline mb-1"
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
                      <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"></path>
                      <path d="M18 14v4h4"></path>
                      <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2"></path>
                      <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                      <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                      <path d="M8 11h4"></path>
                      <path d="M8 15h3"></path>
                    </svg>{" "}
                    Reports
                  </h3>
                </a>
                <p
                  className="mb-8 font-light text-gray-700 lg:text-2xl text-xl dark:text-gray-400
                  leading-normal"
                >
                  Build reports with automatic schedule and PDF export
                </p>
              </div>
            </Feature>

            <Feature
              index={2}
              centered
              className="card-with-border"
              href="/tutorials/dashboard-python-jupyter-notebook/"
              aria="Read more on how to share your results from Jupyter Notebook as interactive dashboard"
            >
              <div className="h-full flex flex-col justify-between">
                <a
                  href="/tutorials/dashboard-python-jupyter-notebook/"
                  className="hover:underline"
                >
                  <h3 style={{ marginTop: "20px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline mb-1"
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
                      <path d="M4 4h6v8h-6z"></path>
                      <path d="M4 16h6v4h-6z"></path>
                      <path d="M14 12h6v8h-6z"></path>
                      <path d="M14 4h6v4h-6z"></path>
                    </svg>{" "}
                    Dashboards
                  </h3>
                </a>
                <p
                  className="mb-8 font-light text-gray-700 lg:text-2xl text-xl dark:text-gray-400
                  leading-normal"
                  style={{ marginTop: "10px" }}
                >
                  Visualize your results in interactive dashboards
                </p>
              </div>
            </Feature>

            <Feature
              index={3}
              centered
              className="card-with-border"
              href="/tutorials/website-python-jupyter-notebook/"
              aria="Read more on how to easily turn Python notebooks into static websites"
            >
              <div className="h-full flex flex-col justify-between">
                <a
                  href="/tutorials/website-python-jupyter-notebook/"
                  className="hover:underline"
                >
                  <h3 style={{ marginTop: "20px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline mb-1"
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
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                    </svg>{" "}
                    Websites
                  </h3>
                </a>
                <p
                  className="mb-8 font-light text-gray-700 lg:text-2xl text-xl dark:text-gray-400
                  leading-normal"
                  style={{ marginTop: "10px" }}
                >
                  Easily turn notebooks into beautiful static websites
                </p>
              </div>
            </Feature>

            <Feature
              index={4}
              centered
              className="card-with-border"
              href="/tutorials/presentation-python-jupyter-notebook/"
              aria="Read more on how to create interactive slides from Jupyter Notebook"
            >
              <div className="h-full flex flex-col justify-between">
                <a
                  href="/tutorials/presentation-python-jupyter-notebook/"
                  className="hover:underline"
                >
                  <h3 style={{ marginTop: "20px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline mb-1"
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
                      <path d="M9 12v-4"></path>
                      <path d="M15 12v-2"></path>
                      <path d="M12 12v-1"></path>
                      <path d="M3 4h18"></path>
                      <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"></path>
                      <path d="M12 16v4"></path>
                      <path d="M9 20h6"></path>
                    </svg>{" "}
                    Presentations
                  </h3>
                </a>
                <p
                  className="mb-8 font-light text-gray-700 lg:text-2xl text-xl dark:text-gray-400
                  leading-normal"
                  style={{ marginTop: "10px" }}
                >
                  Interactive slides that are recomputed during the show
                </p>
              </div>
            </Feature>

            <Feature
              index={5}
              centered
              className="card-with-border"
              href="/docs/jupyter-notebook-rest-api/"
              aria="Read more about web apps that you can build with Mercury in Jupyter Notebook"
            >
              <div className="h-full flex flex-col justify-between">
                <a
                  href="/docs/jupyter-notebook-rest-api/"
                  className="hover:underline"
                >
                  <h3 style={{ marginTop: "20px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline mb-1"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 13h5" />
                      <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />
                      <path d="M20 8v8" />
                      <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />{" "}
                    </svg>{" "}
                    REST API
                  </h3> 
                
                </a>
                <p
                  className="mb-8 font-light text-gray-700 lg:text-2xl text-xl dark:text-gray-400
                  leading-normal"
                  style={{ marginTop: "10px" }}
                >
                  Execute notebooks with REST API and return JSON response
                </p>
              </div> 
            </Feature>
          </Features>
        </div>
      </div>

      <div className="" style={{ padding: "50px" }}></div>
    </div>
  );
}
