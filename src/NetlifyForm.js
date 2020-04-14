import React from "react";
import styled from "styled-components";

import Colors from "./style/colors";
import { SectionHeading } from "./Section";

// URIをエンコードする関数
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class NetlifyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      content: "",
      submitted: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({
          submitted: true
        });
      })
      .catch(error => alert(error));

    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit} action="/">
          {/* <input type="hidden" name="form-name" value="inqform" /> */}
          <SectionHeading>お問い合わせ</SectionHeading>
          <label htmlFor="email">メールアドレス:</label>
          <Input
            type="email"
            value={this.state["email"]}
            name="email"
            id="email"
            placeholder="メールアドレス"
            required
            onChange={this.handleInputChange}
          />
          <label htmlFor="name">お名前:</label>
          <Input
            type="text"
            value={this.state["name"]}
            name="name"
            id="name"
            placeholder="お名前"
            required
            onChange={this.handleInputChange}
          />
          <label htmlFor="content">お問い合わせ内容:</label>
          <Input
            as="textarea"
            name="content"
            id="content"
            rows="6"
            placeholder="お問い合わせ内容"
            required
            onChange={this.handleInputChange}
            value={this.state["content"]}
          />
          <Submit
            type="submit"
            name=""
            id="submit"
            value={this.state.submitted ? "送信済み" : "送信"}
            style={
              this.state.submitted
                ? { opacity: 0.8, boxShadow: "none" }
                : { opacity: 1.0 }
            }
          />
        </Form>
      </React.Fragment>
    );
  }
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1.6rem;
`;

const Input = styled.input`
  font-size: 1.6rem;
  border: 2px solid #eee;
  border-radius: 5px;
  margin-bottom: 12px;
  padding: 8px;
`;

const Submit = styled.input`
  align-self: center;
  width: 200px;
  color: #333;
  background-color: ${Colors.materialTeal300};
  font-size: 1.6rem;
  padding: 8px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(30, 30, 30, 0.5);
`;

export default NetlifyForm;
