import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    refContainer.current.focus();
  });
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <br />
        <div className="container">
          <div className="form-row">
            <div className="form-group col">
              <label></label>
              <input type="text" className="form-control" ref={refContainer} />
            </div>
            <div className="form-group col">
              <br />
              <button type="submit" className="btn btn-primary btn-lg">
                Submit Form
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UseRefBasics;
