import "../styles/homepage.css";

function EmailBanner(props) {
  const emailContent = props.emailContent;

  return (
    <>
      {emailContent.map((email) => (
        <div className="email-banner-container" key={email.id}>
          <h1 className="email-content">{email.content}</h1>
          <div className="email-input-container">
            <input
              type="email"
              className="email-input"
              id="homepage-email-input"
              placeholder="Enter Your Email"
            />
            <button className="banner-btn" type="submit">
              {email.btn}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
export default EmailBanner;
