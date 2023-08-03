import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="above-footer">
        <div>
          <span>About</span>
          <span>About Us</span>
          <span>Contact</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
        <div>
          <span>Contact</span>
          <span>Nanda Art@example.com</span>
          <span>(603) 555-0123</span>
          <span>
            8502 Preston Rd. <br /> Inglewood, Maine <br /> 98380
          </span>
        </div>
        <div>
          <span>Social Media</span>
          <span>INSTAGRAM</span>
          <span>FACEBOOK</span>
        </div>
      </div>
      <span>© 2023 Nanda Art</span>
    </div>
  );
};
