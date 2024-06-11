import React from 'react';
import { skillsData } from "../../data/skills";

const Skills = () => {
    return (
        <section className="py-5 sm:py-10 mt-2 sm:mt-4">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Skills
                </p>
            </div>

            <div className="mt-5 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {skillsData.map((category) => (
                    <div key={category.id} className="skill-category bg-primary-light dark:bg-ternary-dark p-5 rounded-xl shadow-md">
                        <h3 className="font-general-regular text-xl text-center mb-4 text-secondary-dark dark:text-ternary-light">
                            {category.title}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {category.data.map((skill) => (
                                <div key={skill.id} className="flex flex-col items-center bg-secondary-light dark:bg-secondary-dark p-4 rounded-md text-primary-dark dark:text-ternary-light">
                                    {skill.icon && <span className="mb-2 text-4xl">
                                        {skill.icon}
                                    </span>}
                                    <span className="text-sm text-center">{skill.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
