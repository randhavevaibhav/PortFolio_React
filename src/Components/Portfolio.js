import React from "react";
import { PortFolioList } from "../helpers/PortFolioList";
import PortFolioItem from "./PortFolioItem";
function Portfolio() {
  const rowIndexList = [0, 3]; //Add 6 for 3rd row
  return (
    <div>
      <section className="section" id="portfolio">
        <div className="container mt-3">
          <h1 className="text-center">Portfolio</h1>

          {rowIndexList.map((rowNum) => {
            return (
              <>
                <div className="row">
                  {PortFolioList.slice(rowNum, rowNum + 3).map(
                    (project, idx) => {
                      return (
                        <PortFolioItem
                          id={idx}
                          imgSrc={project.imgSrc}
                          title={project.title}
                          para={project.para}
                          projectLink={project.projectLink}
                        />
                      );
                    }
                  )}
                </div>
                <br />
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
