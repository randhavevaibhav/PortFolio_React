import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import {Work} from "@material-ui/icons";
import '../Styles/Experience.css';

function Experience() {
  return (
    <>
   <section id="experience">
   <div className="experience">
       <h1 className="text-center" >Experience</h1>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          id="timelineElement"
          date="2014 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">S.S.M.V</h3>
          <p>10th</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          id="timelineElement"
          date="2015 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">S.S.V.M</h3>
          <p>12th</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          id="timelineElement"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Dr.D.Y.Patil School of Engineering</h3>
          <p>B.E.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          id="timelineElement"
          date="Nov 2021 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">Actimize Developer</h3>
          <p>total years of experience: 2 years at <b>TCS</b> in web development</p>
        </VerticalTimelineElement>





      </VerticalTimeline>
    </div>
   </section>
     
    </>
   
  );
}

export default Experience;
