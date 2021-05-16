import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName != "" && email != "") {
      const person = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        email: email,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("Please input fields");
    }
  };

  return (
    <article className="container" style={{ marginTop: "4em" }}>
      <br />
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-6">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="form-control"
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-6">
            <label htmlFor="firstName">Email:</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-6">
            <br />
            <button type="submit" className="btn btn-lg btn-success">
              Add Person
            </button>
          </div>
        </div>
      </form>
      <div>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default ControlledInputs;
