import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBInputGroup,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { axiosInstance } from "../interceptors/auth.interceptor";
import { setuid } from "process";

export default function RechargePage() {
  const [redirectToCheckout, setRedirectToCheckout] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState("");

  const [price, setPrice] = useState(""); // State to hold the price
  const [email, setEmail] = useState(""); // State to hold the email
  const [uid, setUid] = useState("");

  useEffect(() => {
    const accessToken: string | null = localStorage.getItem("accessToken");

    if (accessToken) {
      const { id, email } = jwtDecode(accessToken);
      setUid(id);
      setEmail(email);
    }
  }, []);

  const handleRecharge = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/payment/stripe",
        {
          price: Number(price),
          description: "Balance Recharge",
          user_id: uid,
          urlSuccess: "http://localhost:3000/payment/success",
          urlCancel: "http://localhost:3000/payment/cancel",
          email: email,
        }
      );

      const data = response.data;
      console.log(data);
      if (data.url) {
        setCheckoutUrl(data.url);
        setRedirectToCheckout(true);
      } else {
        console.error("No URL in response");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (redirectToCheckout) {
    window.location.href = checkoutUrl;
  }

  return (
    <>
      <div className="mx-auto mt-5" style={{ maxWidth: "900px" }}>
        <MDBRow>
          <MDBCol md="8" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Billing details
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <form>
                  <MDBInputGroup noWrap textBefore="Email">
                    <input
                      className="form-control"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="test@example.com"
                    />
                  </MDBInputGroup>
                  <br />
                  <MDBInputGroup noWrap textBefore="Balance">
                    <input
                      className="form-control"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Enter amount"
                    />
                  </MDBInputGroup>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush="true">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Price
                    <span>
                      {price ? `$${parseFloat(price).toFixed(2)}` : ""}
                    </span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      {price ? `$${parseFloat(price).toFixed(2)}` : ""}
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>
                <MDBBtn
                  size="lg"
                  className="recharge-btn"
                  block
                  onClick={handleRecharge}
                >
                  Recharge Balance
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}
