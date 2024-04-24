import React from 'react';
import Image from 'next/image';

const SkillsCard = ({ skill }) => {
    return (
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                    <Image src={skill.imageSrc} width={64} height={64} alt={skill.altText} />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3>{skill.name}</h3>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;
