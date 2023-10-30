import React from 'react';

function PortFolioItem({id,imgSrc,title,para,projectLink}) {
    return (
        <>
        <div className="col-lg-4 mt-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={imgSrc}
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div className="card-body">
                  <h4 className="card-title">{title}</h4>
                  <p className="card-text">
                   {para}
                  </p>
                  <div className="text-center">
                    <a href={projectLink} className="btn btn-success">
                      Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}

export default PortFolioItem;