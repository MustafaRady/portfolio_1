import './sidebar.css';
import ProfileImage from "../assets/profile-pic.png"
import Github from "../assets/socialMedia/github.png"
import Facebook from "../assets/socialMedia/facebook.png"
import Whatsapp from "../assets/socialMedia/whatsapp.png"
import Instagram from "../assets/socialMedia/instagram.png"
import LinkedIn from "../assets/socialMedia/linkedin.png"
import Add from "../assets/add.png"
import cv from "../assets/cv.pdf"



export default function Sidebar(){

    const information=[
        {
            name:"Age",
            value:24
        },
        {
            name:"Residence",
            value:"Beirut-Lebanon"
        },
        {
            name:"Nationality",
            value:"Lebanese"
        }

    ]

    const languages=[
        {
            name:"English",
            value:"80"
        },
        {
            name:"Arabic",
            value:"100"
        }
    ]

    const programmingSkills=[
        { name: "PHP", value: 60 },
        { name: "JavaScript", value: 90 },
        { name: "Typescript", value: 85 },
        { name: "HTML", value: 90 },
        { name: "C#", value: 65 },
        { name: "CSS", value: 90 },
        { name: "Java", value: 90 },
      ]

    const extraSkills=[
        "OOP , Design Patterns , SOLID Principles",
        "RESTful APIs , Node.js , Express.js",
        "Responsive Designs , Testing & Debugging ",
    ]

    const whatsappNumber = '+96176771908';

    return (
        <>
        <div className='sidebarContainer '>
            <div className=' imageContainer rounded-full'>
                <img className='' src={ProfileImage} alt='' />
            </div>
            <div className='headingContainer'>
                <div className='name'>
                    Moustafa Radi
                </div>
                <div className='info'>
                    Full-Stack Developer 
                </div>
                <div className='info'>
                    Software Developer
                </div>
                <div className='socialMediaContainer'>
                    <div>
                        <a href="https://github.com/MustafaRady">
                            <img src={Github} alt='' /> 
                        </a>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/moustafa.rady.549'>
                            <img src={Facebook} alt=''/>
                        </a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/moustafa-radi-92737225a'>
                            <img src={LinkedIn} alt=''/>
                        </a>
                                        
                    </div>
                    <div>
                        <a href='https://www.instagram.com/moustafa_radi_/'>
                            <img src={Instagram} alt=''/>
                        </a>
                    </div>
                    <div >
                        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                            <img src={Whatsapp} alt="Contact me on WhatsApp" />
                        </a>
                    </div>
                </div>
                
            </div>

            <hr></hr>

            <div className='infoContainer'>
                {information.map((info , index)=>{
                    return (

                        <div className='infoGroup' key={index}>
                            <div className='infoName'>
                                {info.name} :
                            </div>
                            <div className='infoValue'>
                                {info.value}
                            </div>
                        </div>
                    )
                })}
                
            </div>
            <hr></hr>
            {/* Languages*/}

            <div className='languagesContainer'>
                <div className='languagesHeading'>
                    Languages
                </div>

                {languages.map((language , index)=>{
                    return (
                        <div className='languagesGroup' key={index}>
                            <div className='language-valueGroup'>
                                <div className='languageName'>
                                    {language.name}
                                </div>
                                <div className='languageValue'>
                                    {language.value} %
                                </div>
                            </div>
                            <div className='languageBar'>
                                <div class="skill-bar">
                                    <div class="skill-level" style={{width:language.value+"%"}} ></div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
                
            </div>

            <hr></hr>

            {/* Skills */}

            <div className='skillsContainer'>
                <div className='skillsHeading'>
                    Programming Skills 
                </div>
                {programmingSkills.map((skill , index)=>{
                    return (
                        <div className='skillsGroup' key={index}>
                            <div className='skill-valueGroup'>
                            <div className='skillName'>
                                {skill.name}
                            </div>
                            <div className='skillValue'>
                                {skill.value} %
                            </div>
                            </div>
                            <div className='skillBar'>
                            <div class="skill-bar">
                                <div class="skill-level" style={{width:skill.value+'%'}} ></div>
                            </div>
                            </div>  
                        </div>
                    )
                })}
                
                
            </div>

            <hr></hr>
                {/* ExtraSkills*/}
                <div className='extraSkillsContainer'>

                    <div className='skillsHeading'>
                        Extra Skills 
                    </div>

                    {extraSkills.map((skill , index)=>{
                        return (
                            <div className='extraSkillGroup' key={index}>
                                <div className='skillLogo'>
                                    <img src={Add}/>
                                </div>
                                <div className='skillName' >
                                    {skill}
                                </div>
                            </div>
                        )

                    })}
                    
                </div>

                <hr></hr>
                {/* DownloadCV */}
                <div className="downloadCv">
                    <a href={cv} download>
                        <div className="downloadCvButton">
                            Download CV
                        </div>
                    </a>
                </div>
        </div>
        
        </>
    );
}