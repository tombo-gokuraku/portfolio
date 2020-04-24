import React from "react";
import styled from "styled-components";

import Colors from "../style/colors";
import { SectionHeading } from "./Section";

class GoogleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "entry.872297108": "",
      "entry.814221295": "",
      "entry.733628667": "",
      submitted: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    this.setState({
      submitted: true,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Form
          name="inqform"
          id="inqform"
          action="https://docs.google.com/forms/d/e/1FAIpQLSdx4N9cWfy-Ny2d6mub4hR1crMSZXDL9TnYrxnM9S4slkG5sA/formResponse?"
          onSubmit={this.handleSubmit}
          target="hidden_iframe"
        >
          <SectionHeading>お問い合わせ</SectionHeading>
          <label htmlFor="entry.872297108">メールアドレス:</label>
          <Input
            type="email"
            value={this.state["entry.872297108"]}
            name="entry.872297108"
            id="entry.872297108"
            placeholder="メールアドレス"
            required
            onChange={this.handleInputChange}
          />
          <label htmlFor="entry.814221295">お名前:</label>
          <Input
            type="text"
            value={this.state["entry.814221295"]}
            name="entry.814221295"
            id="entry.814221295"
            placeholder="お名前"
            required
            onChange={this.handleInputChange}
          />
          <label htmlFor="entry.733628667">お問い合わせ内容:</label>
          <Input
            as="textarea"
            name="entry.733628667"
            id="entry.733628667"
            rows="6"
            placeholder="お問い合わせ内容"
            required
            onChange={this.handleInputChange}
            value={this.state["entry.733628667"]}
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
        {/* <!-- リダイレクトをブロックする --> */}
        <iframe
          title="hidden_iframe"
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: "none" }}
        ></iframe>
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

export default GoogleForm;
