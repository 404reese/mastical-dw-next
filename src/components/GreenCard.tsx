import React from "react";

// Type definition for props
interface GreenCardProps {
  reviewText?: string;
  reviewerName?: string;
  officeHours?: { day: string; time: string }[];
  saturdayNote?: string;
}

const GreenCard: React.FC<GreenCardProps> = ({
  reviewText = "I always leave with a 'smile' to share with my 'family' and friends. All dentists and staff are caring, friendly, and efficient. They make sure you're comfortable with everything that has to be done. I no longer have anxiety going to the dentist!", // Default Review Text
  reviewerName = "LINDA K.", // Default Reviewer Name
  officeHours = [
    { day: "Monday", time: "10:00 a.m. - 7:00 p.m." },
    { day: "Tuesday", time: "10:00 a.m. - 7:00 p.m." },
    { day: "Wednesday", time: "10:00 a.m. - 7:00 p.m." },
    { day: "Thursday", time: "10:00 a.m. - 7:00 p.m." },
    { day: "Friday", time: "9:00 a.m. - 5:00 p.m." },
    { day: "Saturday", time: "9:00 a.m. - 2:00 p.m." },
    { day: "Sunday", time: "Closed" },
  ], // Default Office Hours
  saturdayNote = "*Open only on the first and third Saturdays of the month.", // Default Saturday Note
}) => {
  return (
    <div className="lg:w-1/3 bg-teal-600 text-white p-6 shadow-md mt-6 lg:mt-0 lg:ml-6">
      {/* Patient Review Section */}
      <h3 className="text-xl font-bold mb-4">Patient Reviews</h3>
      <p className="mb-4">{reviewText}</p>
      <p className="font-bold">{reviewerName}</p>

      {/* Office Hours Section */}
      <h3 className="text-xl font-bold mt-6 mb-4">Hours</h3>
      <ul>
        {officeHours.map((hour) => (
          <li key={hour.day}>
            {hour.day} {hour.time}
          </li>
        ))}
      </ul>
      {saturdayNote && <p className="mt-2">{saturdayNote}</p>}

      {/* Contact Form Section */}
      <h3 className="text-xl font-bold mt-6 mb-4">Have questions?</h3>
      <form>
        <input
          className="w-full p-2 mb-2 text-gray-800"
          placeholder="First Name"
          type="text"
        />
        <input
          className="w-full p-2 mb-2 text-gray-800"
          placeholder="Last Name"
          type="text"
        />
        <input
          className="w-full p-2 mb-2 text-gray-800"
          placeholder="Email"
          type="email"
        />
        <textarea
          className="w-full p-2 mb-2 text-gray-800"
          placeholder="Message"
        ></textarea>
        <button className="w-full bg-white text-teal-600 py-2 mt-2" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default GreenCard;
