const AboutCard = () => {
    return (
        <div className="mt-10">
            <div className="flex flex-col lg:flex-row items-center justify-between xl:gap-14 lg:gap-8 gap-6">
                <div className="md:p-10 p-6 rounded-xl bg-linear-to-br from-pink-400/30 via-white/10 to-fuchsia-400/30 border border-white/20">
                    <h3 className="text-3xl text-black font-exo font-bold">Our History</h3>
                    <p className="font-inter text-gray-600 pt-4">Established in 2010, Elite Arena started as a small local sports center. Over the years, we’ve grown into a full-scale sports club with world-class courts, experienced coaches, and a thriving community. Our commitment to excellence has earned us a reputation as a leader in club sports development.</p>
                </div>
                <div className="md:p-10 p-6 rounded-xl bg-linear-to-br from-pink-400/30 via-white/10 to-fuchsia-400/30 border border-white/20">
                    <h3 className="text-3xl text-black font-exo font-bold">Our Mission</h3>
                    <p className="font-inter text-gray-600 pt-4">Established in 2010, Elite Arena started as a small local sports center. Over the years, we’ve grown into a full-scale sports club with world-class courts, experienced coaches, and a thriving community. Our commitment to excellence has earned us a reputation as a leader in club sports development.</p>
                </div>
            </div>
            <div className="max-w-200 mx-auto xl:mt-14 lg:mt-8 mt-6 md:p-10 p-6 rounded-xl bg-linear-to-br from-pink-400/30 via-white/10 to-fuchsia-400/30 border border-white/20">
                <h3 className="text-3xl text-black font-exo font-bold">Our Vision</h3>
                <p className="font-inter text-gray-600 pt-4">Established in 2010, Elite Arena started as a small local sports center. Over the years, we’ve grown into a full-scale sports club with world-class courts, experienced coaches, and a thriving community. Our commitment to excellence has earned us a reputation as a leader in club sports development.</p>
            </div>
        </div>
    );
};

export default AboutCard;