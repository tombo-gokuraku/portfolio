import React from "react";

class GoogleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "entry.872297108": "",
      "entry.814221295": "",
      "entry.733628667": ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target, name, value);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <React.Fragment>
        <form
          name="inqform"
          id="inqform"
          action="https://docs.google.com/forms/d/e/1FAIpQLSdx4N9cWfy-Ny2d6mub4hR1crMSZXDL9TnYrxnM9S4slkG5sA/formResponse?"
          onsubmit="submitted=true;"
          target="hidden_iframe"
        >
          <h3 class="section__heading">お問い合わせ</h3>
          <label for="entry.872297108">メールアドレス:</label>
          <input
            type="email"
            value={this.state["entry.872297108"]}
            name="entry.872297108"
            id="entry.872297108"
            placeholder="メールアドレス"
            required
            onChange={this.handleInputChange}
          />
          <label for="entry.814221295">お名前:</label>
          <input
            type="text"
            value={this.state["entry.814221295"]}
            name="entry.814221295"
            id="entry.814221295"
            placeholder="お名前"
            required
            onChange={this.handleInputChange}
          />
          <label for="entry.733628667">お問い合わせ内容:</label>
          <textarea
            name="entry.733628667"
            id="entry.733628667"
            rows="6"
            placeholder="お問い合わせ内容"
            required
            onChange={this.handleInputChange}
            value={this.state["entry.733628667"]}
          />
          <input type="submit" name="" id="submit" value="送信" />
        </form>
        {/* <!-- リダイレクトをブロックする --> */}
        <iframe
          title="hidden_iframe"
          name="hidden_iframe"
          id="hidden_iframe"
          onload="if(submitted) {}"
        ></iframe>
        {/* <script type="text/javascript" charset="utf-8"> */}
        {/*   let submitted = false; */}
        {/*   let inqform = document.getElementById("inqform"); */}
        {/*   inqform.addEventListener("submit", (event) => { */}
        {/*     let submitted_notifyer = document.createElement("p"); {" "} */}
        {/*  */}
        {/*     submitted_notifyer.className = "section__text"; */}
        {/*     submitted_notifyer.innerText = "送信しました。"; */}
        {/*     inqform.appendChild(submitted_notifyer); */}
        {/*   }); */}
        {/* </script> */}
      </React.Fragment>
    );
  }
}

export default GoogleForm;
