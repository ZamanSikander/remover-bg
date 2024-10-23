import {Upload, CopyMinus, Download} from "lucide-react"

const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center  p-4 mt-[4rem] md:mt-0">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Steps to remove background image in seconds
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 transform transition duration-300 ease-in-out hover:scale-105">
          <div className="bg-purple-500 text-white p-3 rounded-full">
          <Upload />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Upload image
            </h2>
            <p className="text-gray-500">
              This is a demo text, will replace it later. This is a demo..
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 transform transition duration-300 ease-in-out hover:scale-105">
          <div className="bg-purple-500 text-white p-3 rounded-full">
          <CopyMinus />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Remove background
            </h2>
            <p className="text-gray-500">
              This is a demo text, will replace it later. This is a demo..
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 md:col-span-2 transform transition duration-300 ease-in-out hover:scale-105">
          <div className="bg-purple-500 text-white p-3 rounded-full">
          <Download />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Download image
            </h2>
            <p className="text-gray-500">
              This is a demo text, will replace it later. This is a demo..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
