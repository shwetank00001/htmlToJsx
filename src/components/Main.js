import React from 'react';
import logo from '../assets/img/new_user_app.png'
import topLogo from '../assets/img/logo-white.png'
import download from '../assets/img/icon/android.png'
import { Icon } from '@iconify/react';

const Main = () => {
  return (
<>
  {/* ======= Header ======= */}
  <header
    id="header"
    className="fixed-top d-flex align-items-center header-transparent"
  >
    <div className="container d-flex align-items-center justify-content-between">
      <div className="logo">
        <a href="index.html">
          <img src={topLogo} alt="" className="img-fluid" />
        </a>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="about-us.html">
              About Us
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="offer.html">
              Offers &amp; Deals
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="shopping.html">
              Shopping
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="business.html">
              For Business
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="contct_us.html">
              Contact Us
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* ======= Hero Section ======= */}
  <section id="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
          <div className='zoom-out' data-aos="zoom-out">
            <h1>
              <center>India's Most Futuristic App</center>
            </h1>
            <h2>
              Recharge &amp; Bills Payment, Travel Tickets Booking, Invest in
              Stocks &amp; mutual funds, and do a lot more.
            </h2>
            <div className="text-center text-lg-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.egpaid.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-get-started scrollto"
              >
                <img src={download} width="15%" /> Download
                App
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 order-1 order-lg-2 hero-img"
          data-aos="zoom-out"
          data-aos-delay={280}
        >
          <img
            src={logo}
            className="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </div>
    <svg
      className="hero-waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="wave-path"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        ></path>
      </defs>
      <g className="wave1">
        <use
          xlinkHref="#wave-path"
          x={50}
          y={3}
          fill="rgba(255,255,255, .1)"
        ></use>
      </g>
      <g className="wave2">
        <use
          xlinkHref="#wave-path"
          x={50}
          y={0}
          fill="rgba(255,255,255, .2)"
        ></use>
      </g>
      <g className="wave3">
        <use xlinkHref="#wave-path" x={50} y={9} fill="#fff"></use>
      </g>
    </svg>
  </section>
  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"
            data-aos="fade-right"
          >
            <a
              href="https://youtu.be/2H_mlAmLmAs"
              className="glightbox play-btn mb-4"
            />
          </div>
          <div
            className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
            data-aos="fade-left"
          >
            <h3>Eg Paid App Simple, Fast &amp; Secure</h3>
            <p>
              One app for all things. Recharge, Bill Payment's Send Money, Cash
              Withdrawal, Buy Gold, Invest and lot More. Never ever miss a
              Payment. Introducing Auto Pay &amp; Reminders. Skip the line with
              EgPaid App in your Pocket, Earn Incredible Rewards everytime you
              pay using EgPaid App
            </p>
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
              <div className="icon">
                <i className="bx bxs-hand-up" />
              </div>
              <h4 className="title">
                <a href="">One Click Payment</a>
              </h4>
              <p className="description">
                One click Pay your Utility Bills Like (Credit Card, Electricity,
                Education Fee and more.) Recharge Your Mobile, &amp; DTH and lot
                more.. <b>Simple, Fast, Hassle Free &amp; Secure</b>{" "}
              </p>
            </div>
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
              <div className="icon">
                <Icon icon="ant-design:stock-outlined" />
              </div>
              <h4 className="title">
                <a href="">Pay anyone Directly Bank Account.</a>
              </h4>
              <p className="description">
                Pay anyone, anywhere. Make contactless and secure payments
                online using EgPaid Wallet. Also, send and receive money from
                anyone.
              </p>
            </div>
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
              <div className="icon">
                <i className="bx bx-trending-up" />
              </div>
              <h4 className="title">
                <a href="">Earn Daily Interest Upto 12%</a>
              </h4>
              <p className="description">
                No lock-in period, Withdraw anytime! No Fee,Invest with
                RBI-regulated NBFC partners, Earn up to 12% Interest on your
                investment, Receive daily earnings and see your wealth grow
                everyday, Add money using easy modes such as UPI, Credit And
                Debit Card and Net Banking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End About Section */}
    {/* ======= Features Section ======= */}
    <section id="features" className="features">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Recharges &amp; Payment</p>
        </div>
        <div className="row" data-aos="fade-left">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={50}>
              <img src="assets/img/icon/mobile.png" width="15%" />
              <h3>
                <a href="#">Prepaid &amp; Postpaid</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
              <img src="assets/img/icon/dth.png" width="15%" />
              <h3>
                <a href="#">DTH Recharge</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={150}>
              <img src="assets/img/icon/fastag.png" width="15%" />
              <h3>
                <a href="#">FASTag</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
              <img src="assets/img/icon/bulb.png" width="15%" />
              <h3>
                <a href="#">Electricity Bill</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={250}>
              <img src="assets/img/icon/insurance.png" width="15%" />
              <h3>
                <a href="#">Insurance Premium</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
              <img src="assets/img/icon/wifi.png" width="15%" />
              <h3>
                <a href="#">Broadband</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={350}>
              <img src="assets/img/icon/gas.png" width="15%" />
              <h3>
                <a href="#">Pipeline Gas</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={400}>
              <img src="assets/img/icon/lpg.png" width="15%" />
              <h3>
                <a href="#">LPG Booking</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={450}>
              <img src="assets/img/icon/tv.png" width="15%" />
              <h3>
                <a href="#">Cable Tv</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={500}>
              <img src="assets/img/icon/water-tap.png" width="15%" />
              <h3>
                <a href="#">Water Bill</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={550}>
              <img src="assets/img/icon/cc.png" width="15%" />
              <h3>
                <a href="#">Credit Card Bill</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={600}>
              <img src="assets/img/icon/loan.png" width="15%" />
              <h3>
                <a href="#">Loan Repayment</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={650}>
              <img src="assets/img/icon/goverment.png" width="15%" />
              <h3>
                <a href="#">Municipal Taxes</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={700}>
              <img src="assets/img/icon/ll.png" width="15%" />
              <h3>
                <a href="#">Landline</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={750}>
              <img src="assets/img/icon/traffic-light.png" width="15%" />
              <h3>
                <a href="#">Traffic Challan</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={800}>
              <img src="assets/img/icon/student.png" width="15%" />
              <h3>
                <a href="#">Education Fee</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={850}>
              <img src="assets/img/icon/subscription.png" width="15%" />
              <h3>
                <a href="">Subscription</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={900}>
              <img src="assets/img/icon/metro.png" width="15%" />
              <h3>
                <a href="">Metro Card</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={950}>
              <img src="assets/img/icon/housing.png" width="15%" />
              <h3>
                <a href="">Housing Payment</a>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={1000}>
              <img src="assets/img/icon/apartment.png" width="15%" />
              <h3>
                <a href="">Apartment Bills</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Features Section */}
    {/* ======= Details Section ======= */}
    <section id="details" className="details">
      <div className="container">
        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img
              src="assets/img/utility-bill-payment.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-8 pt-4" data-aos="fade-up">
            <h3>Pay Your Bill's Hassle Free Simple, Fast &amp; Secure</h3>
            <p className="fst-italic">
              Pay Your Bill's Zero Convenience Fee, and Guaranteed <b>Reward</b>{" "}
              for your Every Payment. Pay utility bills for 1000+ Billers in
              India Using EgPaid’s Platform. All Under one Roof
            </p>
            <ul>
              <img src="assets/img/icon/click.png" width="5%" />
              <b>One Click Payment</b>
              <p className="description">
                Pay Your Bill's on a single click, EgPaid App is Simple, Fast
                &amp; Secure and Hassle Free
              </p>
              <img src="assets/img/icon/reminder.png" width="5%" />{" "}
              <b>Get Payment Reminders</b>
              <p className="description">
                We will notify you about the Upcoming Payments on the EgPaid
                App.
              </p>
              <img src="assets/img/icon/rupee.png" width="5%" />
              <b>Automatic Payments</b>&gt;
              <p className="description">
                Set an Instruction on your EgPaid App &amp; we will make sure
                you are Paidup on time.
              </p>
            </ul>
            <p>
              Skip the line with EgPaid App in your pocket!{" "}
              <img src="assets/img/icon/reward.gif" width="5%" />
              Guaranteed Rewards For Every Payments
            </p>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img src="assets/img/dmt1.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
            <h3>The Most Reliable Payment App in the Country.</h3>
            <p className="fst-italic">
              With the EgPaid App, Transfer Funds or Pay anyone without a worry
              in the world. It is convenient with built-in safety features &amp;
              easy access to your account balance &amp; payment history.
            </p>
            <p>
              <i className="bi bi-check" />
              Transfer money instantly to any bank account in India
            </p>
            <p>
              <i className="bi bi-check" />
              Transfer Money Directly to a Friend or Family's Bank Account
            </p>
            <p>
              <i className="bi bi-check" />
              Check Passbook Balance &amp; History
            </p>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img src="assets/img/atm.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-5" data-aos="fade-up">
            <h3>Cash Withdrawal</h3>
            <p>
              <b>Cash Withdraw at Your Home,</b> Is Not Dream, Is True, Just
              Book a Appointment in your Eg Paid App Our agent will come to your
              home verify your details and pay the cash.{" "}
              <b>Hassle Free Cash Withdrawal</b> Within 2 minutes. Very Easy and
              Simple.
            </p>
            <p>
              Zero Percent Risk 100% Secure, So why is it late? Book an
              appointment today. Get rid of lines at banks and ATMs
            </p>
            <p>
              Withdraw Limit 3 Per Day Maximum Rs. 10,000.00/- Per Withdraw,
              Booking Available Morning 7A.M to Evening 11:30P.M. and Zero
              Convenience Fee,
            </p>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img
              src="assets/img/low-cost-insurance-opt.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
            <h3>Insurance</h3>
            <p className="fst-italic">
              A Smart, Simple &amp; Secure Platform to Compare and Buy Insurance
            </p>
            <h7 style={{ color: "rgba(4, 21, 145, 0.959)" }}>
              <img src="assets/img/icon/life.png" width="3%" /> Life Insurance
            </h7>
            <h7 style={{ color: "rgba(4, 21, 145, 0.959)" }}>
              <img src="assets/img/icon/health.png" width="3%" /> Health
              Insurance
            </h7>
            <h7 style={{ color: "rgba(4, 21, 145, 0.959)" }}>
              <img src="assets/img/icon/car.png" width="3%" /> Vehicle Insurance
            </h7>
            <h7 style={{ color: "rgba(4, 21, 145, 0.959)" }}>
              <img src="assets/img/icon/travel.png" width="3%" /> Travel
              Insurance
            </h7>
            <p style={{ color: "rgba(4, 21, 145, 0.959)" }}>
              Low cost and easy claim process makes our insurance policies the
              best choice for you.
            </p>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img
              src="assets/img/travelImage.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-8 pt-5" data-aos="fade-up">
            <h3>Travel Ticket Booking</h3>
            <p>
              A Smart, Simple &amp; Secure Platform You can book Travels ticket
              by choosing online secured payment options at any time.{" "}
              <b>Zero Convenience Fee</b> Every traveller is eligible to ongoing
              offers and cash backs.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* End Details Section */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <a href="index.html" className="logo">
                <img
                  src="assets/img/logo-white.png"
                  width="40%"
                  alt=""
                  className="img-fluid"
                />
              </a>
              <p className="pb-3">
                <em />
              </p>
              <p>
                VIP Park, A-9 VIP Park Prafulla Kanan <br />
                Kolkata West Bengal 700101, <br />
                INDIA <br />
                <br />
                <strong>Contact No:</strong> +91 9830 299 198
                <br />
                <strong>Email:</strong> care@egpaid.in
                <br />
              </p>
              <div className="social-links mt-3">
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook" />
                </a>
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter" />
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>General</h4>
            <ul>
              <li>
                <i className="bx bxs-hand-right" />{" "}
                <a href="index.html">Home</a>
              </li>
              <li>
                <i className="bx bxs-hand-right" />{" "}
                <a href="about-us.html">About us</a>
              </li>
              <li>
                <i className="bx bxs-hand-right" />{" "}
                <a href="terms_and_condition.html">Terms &amp; Condition</a>
              </li>
              <li>
                <i className="bx bxs-hand-right" />{" "}
                <a href="privacy-policy.html">Privacy Policy</a>
              </li>
              <li>
                <i className="bx bxs-hand-right" />{" "}
                <a href="grievance.html">Grievance</a>
              </li>
              <li>
                <i className="bx bxs-hand-right" />{" "}
                <a href="contct_us.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bxs-hand-right" />{" "}
                <a href="utility.html">Utility Payment</a>
              </li>
              <li>
                <i className="bx bxs-hand-right" />{" "}
                <a href="money-trnsfer.html">Money Transfer</a>
              </li>
              <li>
                <i className="bx bxs-hand-right" />{" "}
                <a href="insurance.html">Insurance</a>
              </li>
              <li>
                <i className="bx bxs-hand-right" />{" "}
                <a href="cash-withdrawal.html">Cash Withdrawal</a>
              </li>
              <li>
                <i className="bx bxs-hand-right" />{" "}
                <a href="investment.html">Investment</a>
              </li>
              <li>
                <i className="bx bxs-hand-right" />{" "}
                <a href="travel.html">Travel Booking</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>Ezyone Digital Systems Private Limited</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        <strong>
          Made In <img src="assets/img/icon/india.png" width="2%" /> INDIA
        </strong>
      </div>
    </div>
  </footer>
  {/* End Footer */}
  {/*Start of Tawk.to Script*/}
  {/*End of Tawk.to Script*/}
  <a
    href="#"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* <div id="preloader" /> */}
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</>

  )
}

export default Main