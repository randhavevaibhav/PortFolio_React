import React from 'react';

function ServiceItem({id,iClass,title,para}) {
    console.log("id --> "+id);
    console.log("className --> "+iClass);
    return (
        <>
             <div className="col-lg-4 mt-4">
        <div className="card servicesText">
          <div className="card-body">
            <i className={iClass}/>
            <h4 className="card-title mt-3">{title}</h4>
            <p className="card-text mt-3">
             {para}
            </p>
          </div>
        </div>
      </div>
        </>
    );
}

export default ServiceItem;