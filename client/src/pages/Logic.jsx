import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Nabar";
import Footer from "../components/Footer";

const Logic = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const removeBackground = async () => {
    if (!selectedFile) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("image_file", selectedFile);
    formData.append("size", "auto");

    try {
      const response = await axios({
        method: "post",
        url: "https://api.remove.bg/v1.0/removebg",
        data: formData,
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_KEY, // Replace with your API key
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      });

      const imageBlob = response.data;
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setOutputImage(imageObjectURL);
    } catch (error) {
      console.error("Error removing background:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = outputImage; // The URL of the image
    link.download = "background-removed.png"; // The name of the file when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the DOM
  };

  return (
    <div className="">
      <Navbar />
      <div className="min-h-dvh shadow-lg rounded-lg p-6 container mx-auto mt-[6rem] w-full max-w-lg ">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Image Background Remover
          </h1>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4 w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={removeBackground}
            disabled={loading}
            className={`px-6 py-2 rounded-lg text-white font-semibold ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 transition"
            }`}
          >
            {loading ? "Processing..." : "Remove Background"}
          </button>
        </div>

        {outputImage && (
          <div className="mt-8 text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Background Removed:
            </h2>
            <img
              src={outputImage}
              alt="Without background"
              className="mx-auto w-full max-w-xs rounded-lg shadow-md"
            />
            <button
              onClick={downloadImage}
              className="mt-4 px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition"
            >
              Download Image
            </button>
          </div>
        )}
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
export default Logic;
