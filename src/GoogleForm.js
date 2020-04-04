import React from "react";

class GoogleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", content: "" };
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {}

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
            value=""
            name="entry.872297108"
            id="entry.872297108"
            placeholder="メールアドレス"
            required
          />
          <label for="entry.814221295">お名前:</label>
          <input
            type="text"
            value=""
            name="entry.814221295"
            id="entry.814221295"
            placeholder="お名前"
            required
          />
          <label for="entry.733628667">お問い合わせ内容:</label>
          <textarea
            name="entry.733628667"
            id="entry.733628667"
            rows="6"
            placeholder="お問い合わせ内容"
            required
          ></textarea>
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
