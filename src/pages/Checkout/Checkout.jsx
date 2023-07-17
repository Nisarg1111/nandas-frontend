import { Link } from "react-router-dom";
import "./Checkout.scss";
import { PiCaretRight } from "react-icons/pi";
import ArtImg1 from "../../assets/arts/art (4).png";
import ArtImg2 from "../../assets/arts/art (7).png";

export const Checkout = () => {
  const arts = [ArtImg1, ArtImg2];
  return (
    <div className="main-container">
      <div className="routes">
        <Link to={"/"} className="underline-none">
          Home
        </Link>
        <PiCaretRight className="icon" />
        <Link to={"/shop"} className="underline-none">
          Shop
        </Link>
        <PiCaretRight className="icon" />
        <Link to={"/product-details"} className="underline-none">
          Structural Landscape
        </Link>
        <PiCaretRight className="icon" />
        <Link className="underline-none">Checkout</Link>
      </div>
      <div className="checkout-grid">
        <div className="form-side">
          <h1>Delivery Information</h1>
          <form>
            <div className="inputs">
              <div className="input-box">
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
              <div className="input-box">
                <label htmlFor="">Mobile Number</label>
                <input type="tel" />
              </div>
              <div className="input-box">
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>
              <div className="input-box">
                <label htmlFor="">City</label>
                <input type="text" />
              </div>
              <div className="input-box">
                <label htmlFor="">State</label>
                <input type="text" />
              </div>
              <div className="input-box">
                <label htmlFor="">Zip</label>
                <input type="tel" />
              </div>
              <div className="input-box">
                <label htmlFor="">Address</label>
                <input type="text" />
              </div>
            </div>
            <button className="btn-primary">save</button>
          </form>
        </div>
        <div className="summary">
          <h1>Order Summary</h1>
          <div className="order-details">
            {arts.map((product) => {
              return (
                <div className="item">
                  <div className="details">
                    <img src={product} alt="product-img" />
                    <div className="info">
                      <div className="grid">
                        <div className="">
                          <span>Structural Landscape</span>
                          <p>Gregg Rosen</p>
                        </div>
                        <div>
                          <select name="quantity" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                        <div>
                          <span>₹1,85,323</span>
                          <p>₹6045/month with EMI</p>
                        </div>
                      </div>
                      <div className="remove">Remove</div>
                    </div>
                  </div>
                  <hr />
                  <div className="art-protection">
                    <h3>Protect your Art</h3>
                    <h4>₹6900.00</h4>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore vel similique quasi illo nulla mollitia, eos odio.
                      <span className="link">Learn More</span>
                    </p>
                    <span className="remove">Remove</span>
                  </div>
                </div>
              );
            })}
            <hr />
            <div className="flex-between">
              <span>Sub Total</span>
              <span>₹1,85,323</span>
            </div>
            <div className="flex-between">
              <span>Shipping</span>
              <span>-----</span>
            </div>
            <div className="flex-between">
              <span>Insurance Policy</span>
              <span>₹6045</span>
            </div>
            <hr />
            <div className="flex-between">
              <div>
                <h4>Total</h4>
                <span>Monthly Payment</span>
              </div>
              <div>
                <h4>₹3,76,691</h4>
                <span>₹6045/month with EMI</span>
              </div>
            </div>
            <span className="link">Explore EMI Option</span>
            <button className="btn-primary">Pay ₹1,85,323</button>
          </div>
        </div>
      </div>
    </div>
  );
};
