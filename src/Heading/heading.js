import "./heading.css"
import Image from "../assets/profile-pic.png"

export default function Heading(){
    const scrollDown = ()=>{
        const section = document.getElementById("Contact");
            section.scrollIntoView({behavior:"smooth"})
            return ; 
    }

    return(
        <>
        <div className="headingContainer_1" id="Home">
            <div className="headingDetails_1">
                <div className="headingTitleGroup">
                    <div id="one">
                        I'm Moustafa Radi
                    </div>
                    <div className="headingGroup_1">
                        <div id="two">
                            Full-Stack 
                        </div>
                        <div id="three">
                            Developer
                        </div>
                    </div>
                    
                </div>

                <div className="headingSubtitle">
                Software developer with expertise in both frontend and backend development. Skilled in React and Java, and adept at creating seamlessuser experiences and integrating powerful APIs. A collaborative team player with strong communication and problem-solving abilities.
                </div>

                <div className="hireMeButton" onClick={()=>{ scrollDown()}}>
                    Hire Me
                </div>
            </div>

            <div className="headingImage_1">
                <img src={Image} alt=""></img>
            </div>
        </div>
        
        </>

    );
}