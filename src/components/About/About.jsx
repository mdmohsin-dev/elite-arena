import AboutCard from "./AboutCard";

const About = () => {
    return (
        <div className="lg:pt-36 md:pt-24 pt-20 max-w-350 mx-auto px-6">
            <h3 className="text-center text-[#4A5565] font-exo md:text-6xl text-4xl font-bold">About us</h3>
            <p className="text-xl font-medium text-[#364153] text-center lg:w-1/2 mx-auto pt-4">Welcome to Elite Arena, where passion meets performance. As the premier sports hub, we strive to foster talent, wellness, and community.</p>
            <AboutCard></AboutCard>
        </div>
    );
};

export default About;