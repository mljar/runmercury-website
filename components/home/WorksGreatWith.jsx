import Image from "next/image";

import matplotlibLogo from "public/images/logos/matplotlib.svg";
import plotlyLogo from "public/images/logos/plotly.png";
import altairLogo from "public/images/logos/vega-altair.png";
import vizzuLogo from "public/images/logos/vizzu.png";
import seabornLogo from "public/images/logos/seaborn.svg";
import pandasLogo from "public/images/logos/pandas.png";
import numpyLogo from "public/images/logos/numpy.png";
import scikitlearnLogo from "public/images/logos/scikitlearn.png";
import opencvLogo from "public/images/logos/opencv.png";
import tensorflowLogo from "public/images/logos/tensorflow.png";
import pytorchLogo from "public/images/logos/pytorch.png";
import sympyLogo from "public/images/logos/sympy.png";

export default function WorksGreatWith() {
  return (
    <>
      <div className="" style={{
        padding: "100px",
        borderRadius: "30px"
      }}>
      <center>
          <h2 className=" lg:text-6xl text-4xl font-extrabold text-gray-900 dark:text-white leading-normal">Works great with</h2>
      </center>

      <div className="lg:grid lg:grid-cols-4 lg:gap-1 py-4">

      {" "}

      <div
        className="text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-200 dark:text-white"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <center>
          <Image
            src={matplotlibLogo}
            alt="Matplotlib"
            loading="eager"
            className="align-middle"
            style={{ maxHeight: "500px", width: "auto" }}
          />
        </center>
      </div>
      <div
        className="text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-200 dark:text-white"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <center>
          <Image
            src={plotlyLogo}
            alt="Plotly"
            loading="eager"
            style={{
              margin: "0px",
              maxHeight: "500px",
              width: "auto",
              margin: "auto",
            }}
          />
        </center>
      </div>

      {" "}

      <div
        className="text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-200 dark:text-white"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <center>
          <Image
            src={altairLogo}
            alt="Altair Viz"
            loading="eager"
            style={{
              margin: "0px",
              maxHeight: "500px",
              width: "auto",
              margin: "auto",
            }}
          />
        </center>
      </div>

      {" "}

      <div
        className="text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-200 dark:text-white"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <center>
          <Image
            src={vizzuLogo}
            alt="IpyVizzu"
            loading="eager"
            style={{
              margin: "0px",
              maxHeight: "500px",
              width: "auto",
              margin: "auto",
            }}
          />
        </center>
      </div>

      {" "}

      <div
        className="text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-200 dark:text-white"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <center>
          <Image
            src={seabornLogo}
            alt="Seaborn"
            loading="eager"
            style={{
              margin: "0px",
              maxHeight: "500px",
              width: "auto",
              margin: "auto",
            }}
          />
        </center>
      </div>

      {" "}

      <div
        className="text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-200 dark:text-white"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <center>
          <Image
            src={pandasLogo}
            alt="Pandas"
            loading="eager"
            style={{
              margin: "0px",
              maxHeight: "500px",
              width: "auto",
              margin: "auto",
            }}
          />
        </center>
      </div>

      {" "}

      <div
        className="text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-200 dark:text-white"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <center>
          <Image
            src={numpyLogo}
            alt="Numpy"
            loading="eager"
            style={{
              margin: "0px",
              maxHeight: "500px",
              width: "auto",
              margin: "auto",
            }}
          />
        </center>
      </div>

          <div

      className="text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-200 dark:text-white"
      style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px"
          }}

      >

        <center>
          <Image src={scikitlearnLogo} alt="Scikit-Learn" loading="eager" style={{margin: "0px", maxHeight: "500px", width: "auto", margin: "auto" }} />
        </center>
        </div>

          <div

      className="text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-200 dark:text-white"
      style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px"
          }}

      >

        <center>
          <Image src={opencvLogo} alt="OpenCv" loading="eager" style={{margin: "0px", maxHeight: "500px", width: "auto", margin: "auto" }} />
        </center>
        </div>

          <div

      className="text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-200 dark:text-white"
      style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
          }}

      >

        <center>
          <Image src={tensorflowLogo} alt="Tensorflow" loading="eager" style={{margin: "0px", maxHeight: "500px", width: "auto", margin: "auto" }} />
        </center>
        </div>

            <div

      className="text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-200 dark:text-white"
      style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
          }}

      >

        <center>
          <Image src={pytorchLogo} alt="PyTorch" loading="eager" style={{margin: "0px", maxHeight: "500px", width: "auto", margin: "auto" }} />
        </center>
        </div>

            <div

      className="text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-200 dark:text-white"
      style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px"
          }}

      >

        <center>
          <Image src={sympyLogo} alt="Sympy" loading="eager" style={{margin: "0px", maxHeight: "500px", width: "auto", margin: "auto" }} />
        </center>
        </div>

      </div>
      <p className="my-4 font-light text-gray-500 text-2xl dark:text-gray-400
          leading-normal" style={{paddingBottom: "20px", paddingTop: "20px", margin: "0px", textAlign: "center"}}>  Basically every Python package! </p>
      </div>

      <div className="" style={{ padding: "30px" }}></div>
    </>
  )
}
