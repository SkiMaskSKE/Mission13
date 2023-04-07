import React from 'react';

function TopBanner() {
  return (
    <>
      <div className="row text-center">
        <div className="col-5">
          <img
            src="./1.jpg"
            className="img-fluid rounded float-right"
            alt="Joe Hilton"
          />
        </div>

        <div className="col align-self-center text-start">
          <h1>Joe Hilton's Movie Collection</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
