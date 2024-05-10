
import tickIcon from "../icons/tick";

export default (
  <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 lg:px-16">
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-4xl font-semibold">Free</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        Deploy Mercury and share notebooks on your servers
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">$0</span>
        <span className="text-gray-500 dark:text-gray-400"></span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Deployment on <span className="font-semibold">single</span> machine</span>
        </li>

        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">Unlimited Sites</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">Unlimited users</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">Unlimited files</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Custom domains</span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Community support</span>
        </li>

      </ul>

      <a
        href="/docs/"
        target="_blank"
        className="text-white bg-blue-600 hover:bg-blue-700   focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
      >
        Check docs
      </a>
    </div>

    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-4xl font-semibold">Commercial</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        Customize Mercury and serve notebook on your servers
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">$1,000</span>
        <span className="text-gray-500 dark:text-gray-400">/year</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Deployment on <span className="font-semibold">single</span> machine</span>
        </li>

        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">Unlimited Sites</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">Unlimited users</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">Unlimited files</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Custom domains</span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Email support</span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Style customization</span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Private forks</span>
        </li>

      </ul>

      
      <a
        href="/support/contact/"
        className="text-white bg-blue-600 hover:bg-blue-700   focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
      >
        Contact us
      </a>
    </div>

    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-4xl font-semibold">Enterprise</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        Use multi-server deployment for large organizations
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">$10,000</span>
        <span className="text-gray-500 dark:text-gray-400">/year</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Deployment on <span className="font-semibold">multiple</span> machines</span>
        </li>

        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">Unlimited Sites</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">Unlimited users</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>
            <span className="font-semibold">Unlimited files</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Custom domains</span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Email support</span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Style customization</span>
        </li>
        <li className="flex items-center space-x-3">
          {tickIcon}
          <span>Private forks</span>
        </li>

      </ul>

      <a
        href="/support/contact/"
        className="text-white bg-blue-600 hover:bg-blue-700   focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
      >
        Contact us
      </a>
    </div>

  </div>
);
