import profile_img_3 from "../assets/profile_img_3.png";
import profile_img_2 from "../assets/profile_img_2.png";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
const testimonials = [
  {
    text: "I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    name: "Richard Nelson",
    title: "Web Developer",
    image: profile_img_3,
    alt: "Portrait of Richard Nelson",
  },
  {
    text: "I've been using bg.removal for nearly 6 months, I had a fantastic experience. The quality is top-notch. I recommend others to try this app.",
    name: "Donald Jackman",
    title: "UI Designer",
    image: profile_img_2,
    alt: "Portrait of Donald Jackman",
  },
];

const Testimonial = () => {
  const navigate = useNavigate();

  const goTobg = () => {
    navigate('/Logic')
  }
  return (
    <div className="flex flex-col items-center py-12 mt-[5rem] px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
        Customer Testimonials
      </h1>
      <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md w-full md:w-80"
          >
            <div className="text-2xl text-gray-400 mb-4">“</div>
            <p className="text-gray-600 mb-4">{testimonial.text}</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-[4rem] place-items-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">
          See the magic. Try now
        </h1>
        <button className="bg-slate-800 hover:bg-slate-50 hover:text-black transition text-slate-50 font-medium py-2 px-6 rounded-full flex items-center justify-center" onClick={goTobg}>
        <Upload />
          Upload your image
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
