import { useState } from "react";

import CloudPricing from "components/pricing/cloud";
import SelfHostedPricing from "components/pricing/self";

function ToggleDeployment() {
  const [cloud, setCloud] = useState(true);
  const title = cloud? "Mercury Cloud" : "Self-Hosted"

  return (
    <div className="pb-1 mb-1">
        
      <center>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={(e) => setCloud(!cloud)}
            checked={cloud}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none 
            peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
            rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
          peer-checked:after:border-white after:content-[''] 
            after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border 
            after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"
          ></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Choose Cloud or Self-Hosted</span>
        </label>
        <div className="p-4 mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {cloud && "Mercury Cloud"} {!cloud && "Self-Hosted"}
        </div>

      </center>

      {cloud && CloudPricing}
      {!cloud && SelfHostedPricing}
        
    </div>
  );
}

export default function Plans() {
  return (
    <section className="">
      <div className="px-4 mx-auto max-w-screen-xl lg:pt-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Mercury Pricing</h1>
          <p className=" font-light text-gray-500 sm:text-xl dark:text-gray-400 pt-4" >
            The easiest way to deploy notebooks online is to use Mercury Cloud.
          </p>
        </div>
      </div>
      <ToggleDeployment />
    </section>
  )
}