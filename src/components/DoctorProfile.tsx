import Image from 'next/image';

const DoctorProfile = () => {
  return (
    <div className="w-full lg:w-1/2 p-4 shadow-md bg-white">
      <div className="flex items-center mb-4">
        <Image
          alt="Dr. Jayashree Thorat"
          className="h-24 w-24 rounded-full mr-6"
          height={100}
          src="/doctor.jpg"
          width={100}
        />
        <div>
          <h3 className="text-2xl font-bold">Jayashree Thorat, DDS</h3>
          <p>
            Dr. Jayashree Thorat acquired Langhorne Family Smiles in 2022. She graduated from dental school in India in 1999 and received a dental degree from the University of Minnesota School of Dentistry in 2020. She continues to pursue her education on a regular basis and has completed a live surgical placement implant course at the California Implant Institute. She is an active member of the American Academy of Cosmetic Dentistry and provides total dental care under one roof, including root canal therapy, surgical extractions, wisdom teeth removal, Invisalign&#174; treatment, and Zoom in-office teeth whitening.
          </p>
          <p className="mt-4">
            She and her husband have two daughters. Their older daughter has graduated from Columbia College, and their youngest daughter is in high school. She enjoys running, hiking, biking, and is currently training for a half marathon. Dentistry has been Dr. Thorat&rsquo;s passion for over 20 years now, and she looks forward to serving the community with the utmost care and compassion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
