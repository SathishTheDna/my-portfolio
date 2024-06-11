import profileImage from '../../images/my-pic.png';

const AboutMe = () => {

	return (
        <section className="py-5 sm:py-10 mt-5 sm:mt-10">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    About Me
                </p>
            </div>

            <div className="block sm:flex sm:gap-10 mt-5 sm:mt-10">
                <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                    <img src={profileImage} className="rounded-xl w-96" alt="" />
                </div>

                <div className="font-general-regular w-full sm:w-3/4 text-left">
                    <p
                        className="text-ternary-dark dark:text-ternary-light text-xl leading-loose"
                    >
                    I am a seasoned Unity XR Developer with a wealth of experience in crafting immersive experiences. 
                    
                    Proficient in Unity, C#, and XR technologies, I am driven by a passion for pushing the boundaries of virtual experiences. 
                    
                    I love to learn new technologies, always seeking to expand my skillset. Recognizing the pivotal role of full-stack development and cloud services in creating scalable and impactful XR applications, I actively pursue knowledge in these areas. 
                    
                    With a collaborative mindset and innovative commitment, I deliver end-to-end, fully integrated, interactive experiences. 
                    
                    Grounded in traditional values of integrity, diligence, and excellence, I ensure quality and authenticity in every project.

                    <br/><br/>

                    Apart from my professional pursuits, I am an archer and archery instructor. I actively participate in national and regional championships and have won several medals. 
                    
                    Additionally, I enjoy badminton and table tennis sessions with friends and love exploring nature in Norway.
                    </p>
                </div>
            </div>
        </section>
	);
};

export default AboutMe;
