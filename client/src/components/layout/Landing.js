import React from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import joshPic from "../../img/josh.jpg";
import davidPic from "../../img/david.jpg";
import nebiuPic from "../../img/nebiu.jpg";
import vernonPic from "../../img/vernon.jpg";
import laptop from "../../img/laptop.svg";
import graphic from "../../img/graphic.png";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="content">
    

      <div className="content">
        
        <div className="page_summary">
          <div className="image">
            <img className="laptop_image" src={laptop} alt="Laptop With Code" />
          </div>
          <div id="intro">
          <p>Develop as an apprentice, in your own way!</p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
          <p className="main_header">
            Everything you need to become a successful Apprentice
          </p>
          <p className="headers">
            Challenge yourself with quizzes and find useful resources that are
            tailored to you!
          </p>
        </div>
        <div className="display">
          <div className="row">
            <div className="column">
              <h4>What?</h4>
              <p>
                For Apprentices By Apprentices... We want to allow users to
                share resources that were helpful to them, and also have the
                freedom to share their own work and knowledge to gain
                credibility or to simply help others.
              </p>
            </div>
            <div className="column">
              <h4>Why?</h4>
              <p>
                We aspire to share our knowledge and experience to upcoming
                apprentices to ensure they have the same or even better
                experience that we had.
              </p>
            </div>
            <div className="column">
              <img className="collab_img" src={graphic} alt="Collaboration" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={joshPic} alt="Josh" className="us" />
              <div className="container">
                <h4>Josh Paige</h4>
                <p className="title">Amazon SDE Apprentice</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={nebiuPic} alt="Nebiu" className="us" />
              <div className="container">
                <h4>Nebiu Tadele</h4>
                <p className="title">Amazon SDE Apprentice</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={vernonPic} alt="Vernon" className="us" />
              <div className="container">
                <h4>Vernon Stephens</h4>
                <p className="title">Amazon SDE Apprentice</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={davidPic} alt="David" className="us" />
              <div className="container">
                <h4>David Ledesma</h4>
                <p className="title">Amazon SDE Apprentice</p>
              </div>
            </div>
          </div>
        </div>
        <div className="connect">
          <h3>Connect With Previous Apprentices</h3>
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
