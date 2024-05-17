import tickIcon from "../icons/tick";

export default (
  <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 lg:px-16">
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-4xl font-semibold">Starter</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        Start for free today! No credit card required
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">$0</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            Setup only <span className="font-semibold">1 Mercury Site</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">Public</span> notebooks
          </span>
        </li>

        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            Invite <span className="font-semibold">unlimited users</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            Upload up to <span className="font-semibold">2 files</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            Max file size <span className="font-semibold">5MB</span>
          </span>
        </li>
        {/* <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">5 hours </span>of worker / monthly
          </span>
        </li> */}
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <a
              className="nx-text-white nx-underline nx-decoration-from-font [text-underline-position:from-font]"
              href="/docs/users-management/"
            >
              Users management{" "}
            </a>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <a
              className="nx-text-white nx-underline nx-decoration-from-font [text-underline-position:from-font]"
              href="/docs/users-usage-analytics/"
            >
              Users analytics{" "}
            </a>
          </span>
        </li>
      </ul>
      <a
        href="https://cloud.runmercury.com/register"
        target="_blank"
        className="text-white bg-blue-600 hover:bg-blue-700   focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
      >
        Sign up
      </a>
    </div>

    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-4xl font-semibold">Pro</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        Best option for professionals with deadlines
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">$49</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            Setup up to <span className="font-semibold">3 Mercury Sites</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">Public</span> or{" "}
            <span className="font-semibold">Private</span> notebooks
          </span>
        </li>

        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            Invite <span className="font-semibold">unlimited users</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            Upload up to <span className="font-semibold">25 files</span> per
            Site
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            Max file size <span className="font-semibold">50MB</span>
          </span>
        </li>
        {/* <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">100 hours </span>of worker / monthly
          </span>
        </li> */}
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <a
              className="nx-text-white nx-underline nx-decoration-from-font [text-underline-position:from-font]"
              href="/docs/style/"
            >
              Style customization{" "}
            </a>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <a
              className="nx-text-white nx-underline nx-decoration-from-font [text-underline-position:from-font]"
              href="/docs/users-management/"
            >
              Users management{" "}
            </a>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <a
              className="nx-text-white nx-underline nx-decoration-from-font [text-underline-position:from-font]"
              href="/docs/users-usage-analytics/"
            >
              Users analytics{" "}
            </a>
          </span>
        </li>
        {/* <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Custom domains (coming soon)</span>
        </li> */}
      </ul>
      <a
        href="https://cloud.runmercury.com/register"
        target="_blank"
        className="text-white bg-blue-600 hover:bg-blue-700   focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
      >
        Sign up
      </a>
    </div>

    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-4xl font-semibold">Business</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        Data teams that need to share more notebooks{" "}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">$149</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            Setup up to <span className="font-semibold">10 Mercury Sites</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">Public</span> or{" "}
            <span className="font-semibold">Private</span> notebooks
          </span>
        </li>

        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            Invite <span className="font-semibold">unlimited users</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            Upload up to <span className="font-semibold">50 files</span> per
            Site
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            Max file size <span className="font-semibold">100MB</span>
          </span>
        </li>
        {/* <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">250 hours </span>of worker / monthly
          </span>
        </li> */}
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <a
              className="nx-text-white nx-underline nx-decoration-from-font [text-underline-position:from-font]"
              href="/docs/style/"
            >
              Style customization{" "}
            </a>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <a
              className="nx-text-white nx-underline nx-decoration-from-font [text-underline-position:from-font]"
              href="/docs/users-management/"
            >
              Users management{" "}
            </a>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <a
              className="nx-text-white nx-underline nx-decoration-from-font [text-underline-position:from-font]"
              href="/docs/users-usage-analytics/"
            >
              Users analytics{" "}
            </a>
          </span>
        </li>
        {/* <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Custom domains (coming soon)</span>
        </li> */}
      </ul>
      <a
        href="https://cloud.runmercury.com/register"
        target="_blank"
        className="text-white bg-blue-600 hover:bg-blue-700   focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
      >
        Sign up
      </a>
    </div>
  </div>
);
