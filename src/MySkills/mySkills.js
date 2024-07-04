import "./mySkills.css"; // Assuming you have a CSS file for styling

export default function MySkills() {
    const mySkills = [
        {
            key: "Programming Skills",
            value: [
                "HTML",
                "CSS",
                "JavaScript",
                "C Programming Language",
                "C#",
                "Java",
                "Python",
                "PHP",
                "SQL",
                "TypeScript"
            ]
        },
        {
            key: "Frameworks and Libraries",
            value: [
                "Angular",
                "React",
                "React Native",
                "Tailwind CSS",
                "Laravel",
                "Spring Boot",
                "Bootstrap",
                "Redux",
                "ASP.NET"
            ]
        },
        {
            key: "Development Methodologies and Practices",
            value: [
                "OOP (Object-Oriented Programming)",
                "Design Patterns",
                "Responsive Designs",
                "API Integration",
                "Testing and Debugging",
                "Agile Methodologies / Scrum"
            ]
        },
        {
            key: "Tools and Platforms",
            value: [
                "MySQL",
                "Node Package Manager",
                "Node.js",
                "Android Studio",
                "Git/GitHub"
            ]
        }
    ];

    return (
        <>
            <div className="mySkillsContainer" id="Skills">
                <div className="mySkillsTitle_1">
                    Skills 
                </div>
                {mySkills.map(skill => (
                    <div className="mySkillsGroup" key={skill.key}>
                        <div className="mySkillsTitle">
                            <div>
                                {skill.key}
                            </div>    
                            
                        </div>
                        <div className="mySkillsDetails">
                            {skill.value.map((value, index) => (
                                <div key={index} className="mySkillsItem">
                                    {value}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <hr></hr>
            </div>
        </>
    );
}
