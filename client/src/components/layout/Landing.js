import React from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import joshPic from "../../img/josh.jpg";
import davidPic from "../../img/david.jpg";
import nebiuPic from "../../img/nebiu.jpg";
import vernonPic from "../../img/vernon.jpg";
import clayPic from "../../img/clay.png";
import nellyPic from "../../img/nelly.jpg";
import percellPic from "../../img/percell.jpg";
import laptop from "../../img/laptop.svg";
import graphic from "../../img/graphic.png";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="content">
    <br></br>
    <br></br>

    <div className="content">
        <div className="intro">
          <p>Develop as an apprentice, in your own way!</p>
          
        </div>
        <div className="page_summary">
          <div className="image">
            <img className="laptop_image" src={graphic} alt="Laptop With Code" />
          </div>
          <p className="main_header">
            Everything you need to become a successful Apprentice
          </p>
          <p className="headers">
            Challenge yourself with quizzes, access useful resources like articles
            or websites that are tailored to you, and get in contact previous
            apprentices!
          </p>
        </div>
        <div className="display">
          <div className="row">
            <div className="reasons">
              <h4>What?</h4>
              <p>
                For Apprentices By Apprentices... We want to allow users to share
                resources that were helpful to them, and also have the freedom to
                share their own work and knowledge to gain credibility or to
                simply help others.
              </p>
            </div>
            <div className="reasons">
              <h4>Why?</h4>
              <p>
                We aspire to share our knowledge and experience to upcoming
                apprentices to ensure they have the same or even better experience
                that we had.
              </p>
            </div>
            <div className="reasons">
              <img className="collab_img" src={laptop} alt="Collaboration" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="meet">Why Use FABA?</h3>
          <div className="grid-container">
            <div>Create Posts 📝 </div>
            <div>Communicate With Peers 💬 </div>
            <div>Access To Resources ⌕ </div>
            <div>Read Articles 🗏 </div>
            <div>Learn Best Practices 💭 </div>
            <div>Gain Credibility 👥 </div>
          </div>
        </div>
        <div className="meet"><h3>Meet The Team</h3></div>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={joshPic} alt="Josh" style={{width: '100%'}} />
              <div className="container">
                <h4>Josh Paige</h4>
                <p className="title">Amazon SDE Apprentice</p>
                <a href="https://www.linkedin.com/in/joshpaig/"><i className="fa fa-linkedin" /></a>
                <a href="https://github.com/joshTLG"><i className="fa fa-github" /></a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={nebiuPic} alt="Nebiu" style={{width: '100%'}} />
              <div className="container">
                <h4>Nebiu Tadele</h4>
                <p className="title">Amazon SDE Apprentice</p>
                <a href="https://www.linkedin.com/in/nebiu/"><i className="fa fa-linkedin" /></a>
                <a href="https://github.com/nebiutadele"><i className="fa fa-github" /></a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={vernonPic} alt="Vernon" style={{width: '100%'}} />
              <div className="container">
                <h4>Vernon Stephens</h4>
                <p className="title">Amazon SDE Apprentice</p>
                <a href="https://www.linkedin.com/in/vernon-stephens-784a5618b/"><i className="fa fa-linkedin" /></a>
                <a href="https://github.com/Blackxican93"><i className="fa fa-github" /></a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={davidPic} alt="David" style={{width: '100%'}} />
              <div className="container">
                <h4>David Ledesma</h4>
                <p className="title">Amazon SDE Apprentice</p>
                <a href="https://www.linkedin.com/in/david-ledesma-7323971b7/"><i className="fa fa-linkedin" /></a>
                <a href="https://github.com/dledesm97"><i className="fa fa-github" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
          <br></br>
          <br></br>
        <div>
          <h3 className="community">Trust The Community!</h3>
          <div className="testimonial">
            <img src={percellPic} alt="Percell" style={{width: '90px'}} />
            <p>Percell Gaskins -<span>NFL Football Player</span></p>
            <p>Nelly Sugu saved us from a web disaster! So Grateful for FABA
              👏</p>
          </div>
          <div className="testimonial">
            <img src={nellyPic} alt="Percell" style={{width: '90px'}} />
            <p>Nelly Sugu -<span>NBA Basketball Player</span></p>
            <p>I approve of FABA ♥</p>
          </div>
          <div className="testimonial">
            <img src={clayPic} alt="Percell" style={{width: '90px'}} />
            <p>Clay Rawlins -<span>NBA Basketball Player</span></p>
            <p>FABA has me feeling dangerous 🔥 </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
