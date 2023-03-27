import React from "react";
export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      password: "",
      list: [
        { name: "abc", phone: "111" },
        { name: "gss", phone: "222" },
        { name: "sa", phone: "666" },
      ],
    };
  }
  submit() {
    console.warn(this.state);
  }
  render() {
    {
      console.log(this.state.list);
    }
    return (
      <div>
        {this.state.list.map((item) => {
          return <div>{item.name}</div>;
        })}
        <h1>FORM</h1>
        <input
          type="text"
          name="user"
          onChange={(e) => {
            this.setState({ user: e.target.value });
          }}
        />
        <br></br>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        ></input>
        <button
          onClick={() => {
            this.submit();
          }}
        >
          SUBMIT
        </button>
      </div>
    );
  }
}
