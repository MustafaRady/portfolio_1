import "./education.css"

export default function Education(){

    return(
        <>
        <div className="educationContainer" id="Education">
            <div className="educationTitle">
                Education
            </div>

            <div className="educationDetails">
                <div className="educationGroup">
                    <div className="educationGroupTitle" style={{backgroundColor: 'rgb(0, 191, 255)' , padding:'2%'}}>
                        Lebanese University
                    </div>
                </div>

                <div className="educationGroup">
                    <div className="educationGroupTitle">
                        Bachelor's Degree in Computer Science
                    </div>
                    <div className="educationGroupDetail">
                        2019-2023
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}