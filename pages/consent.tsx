import React, { useEffect, useState } from "react";

import { setCookie, hasCookie } from "cookies-next";

function Consent() {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });
  };

  if (consent === true) {
    return null;
  }

  return (
    <div
      className={`max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-4 bottom-0
                rounded-lg  shadow-2xl flex gap-4 flex-wrap
                 md:flex-nowrap text-center md:text-left items-center 
                  justify-center md:justify-between z-50 shadow-blue-600 dark:bg-black ${
                    consent ? "hidden" : ""
                  }`}
    >
      <p className="text-md">
        This site uses cookies. If you continue browsing our website, you accept
        these cookies.
      </p>
      <div className="flex align-middle justify-between">
        <a
          className=" 
          hover:bg-blue-600   hover:text-white bg-primary
          text-md px-5 py-2.5 rounded-lg 
          border mx-2"
          href="/privacy-policy/"
        >
          Info
        </a>
        <button
          onClick={() => {
            acceptCookie();
          }}
          className="text-white bg-blue-600 hover:bg-blue-700   
          focus:ring-4 focus:ring-primary-200 rounded-lg 
          text-md px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default Consent;
