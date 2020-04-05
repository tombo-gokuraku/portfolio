import React from "react";

class GoogleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "entry.872297108": "",
      "entry.814221295": "",
      "entry.733628667": "",
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
    this.setState({
      submitted: true
    });
  }

  render() {
    return (
      <React.Fragment>
        <form
          name="inqform"
          id="inqform"
          action="https://docs.google.com/forms/d/e/1FAIpQLSdx4N9cWfy-Ny2d6mub4hR1crMSZXDL9TnYrxnM9S4slkG5sA/formResponse?"
          onSubmit={this.handleSubmit}
          target="hidden_iframe"
          className="form"
        >
          <h3 className="section__heading">お問い合わせ</h3>
          <label htmlFor="entry.872297108">メールアドレス:</label>
          <input
            type="email"
            value={this.state["entry.872297108"]}
            name="entry.872297108"
            id="entry.872297108"
            placeholder="メールアドレス"
            required
            onChange={this.handleInputChange}
            className="form__input"
          />
          <label htmlFor="entry.814221295">お名前:</label>
          <input
            type="text"
            value={this.state["entry.814221295"]}
            name="entry.814221295"
            id="entry.814221295"
            placeholder="お名前"
            required
            onChange={this.handleInputChange}
            className="form__input"
          />
          <label htmlFor="entry.733628667">お問い合わせ内容:</label>
          <textarea
            name="entry.733628667"
            id="entry.733628667"
            rows="6"
            placeholder="お問い合わせ内容"
            required
            onChange={this.handleInputChange}
            value={this.state["entry.733628667"]}
            className="form__input"
          />
          <input
            type="submit"
            name=""
            id="submit"
            value={this.state.submitted ? "送信済み" : "送信"}
            style={
              this.state.submitted
                ? { opacity: 0.8, boxShadow: "none" }
                : { opacity: 1.0 }
            }
            className="form__submit"
          />
        </form>
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

export default GoogleForm;
