import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="above-footer">
        <div>
          <th>About</th>
          <td>About Us</td>
          <td>Contact</td>
          <td>Privacy Policy</td>
          <td>Terms of Use</td>
        </div>
        <div>
          <th>Contact</th>
          <td>Nanda Art@example.com</td>
          <td>(603) 555-0123</td>
          <td>
            8502 Preston Rd. <br /> Inglewood, Maine <br /> 98380
          </td>
        </div>
        <div>
          <th>Social Media</th>
          <td>INSTAGRAM</td>
          <td>FACEBOOK</td>
        </div>
      </div>
      <span>© 2023 Nanda Art</span>
    </div>
  );
};
