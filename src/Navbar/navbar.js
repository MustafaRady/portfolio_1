import "./navbar.css";
import Home from "../assets/navbar/home.png";
import Skills from "../assets/navbar/creative-thinking.png";
import Services from "../assets/navbar/customer-service.png";
import Education from "../assets/navbar/education.png";
import Experience from "../assets/navbar/user-experience.png";
import Contact from "../assets/navbar/call.png";
export default function Navbar() {
    const icons = [
        { src: Home, label: "Home" },
        { src: Skills, label: "Skills" },
        { src: Services, label: "Services" },
        { src: Education, label: "Education" },
        { src: Experience, label: "Experience" },
        { src: Contact, label: "Contact" },
    ];


    const scrollDown = (id)=>{
        const section = document.getElementById(id);
            section.scrollIntoView({behavior:"smooth"})
            return ; 
    }

    return (
        <> 
            <div className="navbarContainer">
                
                {icons.map((icon, index) => (
                    <div className="iconContainer" key={index} onClick={()=>scrollDown(icon.label)}>
                        <img src={icon.src} alt={icon.label} />
                        <div className="tooltip">{icon.label}</div>
                    </div>
                ))}
            </div>
        </>
    );
}
