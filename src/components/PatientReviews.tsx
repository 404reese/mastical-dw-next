// components/PatientReviews.tsx
import React from 'react';

const PatientReviews: React.FC = () => {
  return (
    <div className="bg-teal-600 text-white p-6 shadow-md mt-6 lg:mt-0 lg:ml-6">
      <h3 className="text-xl font-bold mb-4">&quot;Patient Reviews&quot;</h3>
      <p className="mb-4">
        I always leave with a &quot;smile&quot; to share with my &quot;family&quot; and friends. All dentists and staff are caring, friendly, and efficient. They make sure you&quot;re comfortable with everything that has to be done. I no longer have anxiety going to the dentist!
      </p>
      <p className="font-bold">&quot;LINDA K.&quot;</p>
      <h3 className="text-xl font-bold mt-6 mb-4">&quot;Hours&quot;</h3>
      <ul>
        <li>Monday 10:00 a.m. - 7:00 p.m.</li>
        <li>Tuesday 10:00 a.m. - 7:00 p.m.</li>
        <li>Wednesday 10:00 a.m. - 7:00 p.m.</li>
        <li>Thursday 10:00 a.m. - 7:00 p.m.</li>
        <li>Friday 9:00 a.m. - 5:00 p.m.</li>
        <li>Saturday 9:00 a.m. - 2:00 p.m.</li>
        <li>Sunday Closed</li>
      </ul>
      <p className="mt-2">&quot;*Open only on the first and third Saturdays of the month.&quot;</p>
      <h3 className="text-xl font-bold mt-6 mb-4">&quot;Have questions?&quot;</h3>
      <form>
        <input className="w-full p-2 mb-2 text-gray-800" placeholder="First Name" type="text" />
        <input className="w-full p-2 mb-2 text-gray-800" placeholder="Last Name" type="text" />
        <input className="w-full p-2 mb-2 text-gray-800" placeholder="Email" type="email" />
        <textarea className="w-full p-2 mb-2 text-gray-800" placeholder="Message"></textarea>
        <button className="w-full bg-white text-teal-600 py-2 mt-2" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default PatientReviews;

