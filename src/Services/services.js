import "./services.css"


export default function Services(){

    const services = [
        {
          name: "Website Development",
          description: "Responsive websites",
          image:require("../assets/services/coding.png")
        },
        {
          name: "Backend Development",
          description: "Server-side logic",
          image:require("../assets/services/programming.png")
        },
        {
          name: "Mobile App Development",
          description: "Mobile apps",
          image:require("../assets/services/mobile-development.png")
        },
        {
          name: "Database Management",
          description: "Database maintenance",
          image:require("../assets/services/data-management.png")
        },
        {
          name: "Version Control and Collaboration",
          description: "Code management",
          image:require("../assets/services/version-control.png")
        },
        {
          name: "Automated Testing and Debugging",
          description: "Automated tests",
          image:require("../assets/services/robotic-process-automation.png")
        }
      ];
      
      
    return (
        <>

            <div className="servicesContainer" id="Services">
                <div className="servicesTitle">
                    My Services
                </div>
                <div className="servicesSubTitle">
                    Delivering quality and efficiency in every project
                </div>

                <div className="servicesList">
                    {services.map((service,index)=>{
                        return (
                            < >
                            <div className="serviceGroup" key={index } >
                                <div className="serviceImage">
                                    <img src={service.image} alt=""/>
                                </div>
                                <div className="serviceTitle">
                                    {service.name}
                                </div>
                                <div className="serviceDetials">
                                    {service.description}
                                </div>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>


        </>
    );
}