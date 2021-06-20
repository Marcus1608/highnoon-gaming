import React, { Fragment, useState, useEffect, useRef } from 'react';
import './Landing.scss';

import Carousel from './LandingPageSlider/Carousel';
import { teamItems } from './Arrays/TeamItems';

function Landing() {
  // tabs
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // team mapping
  const Team = ({ team }) => {
    const { img, name, role } = team;

    return (
      <>
        <div className="team-content">
          {img}
          <h1>{name}</h1>
          <h2>{role}</h2>
        </div>
      </>
    );
  };

  // back to top
  const [toggleVisibility, setToggleVisibility] = useState(false);

  const btnVisibility = () => {
    if (window.pageYOffset > 950) {
      setToggleVisibility(true);
    } else {
      setToggleVisibility(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', btnVisibility);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // timer
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('August 16, 2021, 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    let cleanup = interval.current;
    return () => {
      clearInterval(cleanup);
    };
  });

  return (
    <>
      {/* scoll to top button */}
      <button
        className={toggleVisibility ? 'scrollTop' : 'scrollTop-hide'}
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-circle-up"></i>
      </button>

      {/* Heroic Section */}
      <div className="heroic_video-bg">
        <video
          src="/highnoon-gaming/vids/video.mp4"
          autoPlay
          muted
          loop
        ></video>

        <h1>Highnoon Gaming</h1>
        <h2>Barbados gaming & esports organization, coming soon</h2>
      </div>

      {/* Latest News Section / Tabs*/}
      <div className="tab-container">
        {/* tab heading */}
        <h1 className="tab-heading">Latest News</h1>

        <div className="tab-box">
          {/* tab buttons */}
          <div className="tab-box__left">
            <section
              className={
                toggleState === 1
                  ? 'tab-button tab-button__active'
                  : 'tab-button'
              }
              onClick={() => toggleTab(1)}
            >
              <h1>title 1</h1>
            </section>
            <section
              className={
                toggleState === 2
                  ? 'tab-button tab-button__active'
                  : 'tab-button'
              }
              onClick={() => toggleTab(2)}
            >
              <h1>title 2</h1>
            </section>
            <section
              className={
                toggleState === 3
                  ? 'tab-button tab-button__active'
                  : 'tab-button'
              }
              onClick={() => toggleTab(3)}
            >
              <h1>title 3</h1>
            </section>
            <section
              className={
                toggleState === 4
                  ? 'tab-button tab-button__active'
                  : 'tab-button'
              }
              onClick={() => toggleTab(4)}
            >
              <h1>title 4</h1>
            </section>
          </div>

          {/* tab content */}
          <div className="tab-box__right">
            <section
              className={
                toggleState === 1
                  ? 'tab-content tab-content__active'
                  : 'tab-content'
              }
            >
              <img src="" alt="" /> <h1>Content 1</h1>
              <p>Some content goes here somewhere</p>
            </section>

            <section
              className={
                toggleState === 2
                  ? 'tab-content tab-content__active'
                  : 'tab-content'
              }
            >
              <img src="" alt="" /> <h1>Content 2</h1>
              <p>Some content goes here somewhere</p>
            </section>

            <section
              className={
                toggleState === 3
                  ? 'tab-content tab-content__active'
                  : 'tab-content'
              }
            >
              <img src="" alt="" /> <h1>Content 3</h1>
              <p>Some content goes here somewhere</p>
            </section>

            <section
              className={
                toggleState === 4
                  ? 'tab-content tab-content__active'
                  : 'tab-content'
              }
            >
              <img src="" alt="" /> <h1>Content 4</h1>
              <p>Some content goes here somewhere</p>
            </section>
          </div>
        </div>
      </div>

      {/* Upcoming Event Section */}
      <div className="event-container">
        <h1>Next Event</h1>
        <div className="event-timer">
          <section>
            <p className="days">{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>

          <section>
            <p className="hours">{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>

          <section>
            <p className="minutes">{timerMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>

          <section>
            <p className="seconds">{timerSeconds}</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </div>
        <div className="event-info">
          <h1 className="event-info__header">Fight Night</h1>
        </div>
      </div>

      {/* Slider Section */}
      <Fragment>
        <Carousel />
      </Fragment>

      {/* Our Team Section */}
      <div className="team-container">
        <h1>Our Team</h1>

        <div className="team-container__content-box">
          {teamItems.map((team) => (
            <Team key={team.img} team={team} />
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-container">
        <h1>Contact Us</h1>

        <div className="content-box">
          <span>General Inquiries</span>

          {/* ul */}
          <ul>
            <li>
              <h2>Location:</h2>
              <p>Sargeant's Village Tenantry Rd, Bridgetown, Barbados</p>
            </li>
            <li>
              <h2>Email:</h2>
              <p>
                <a href="mailto:highnoon.gaming246@gmail.com">
                  highnoon.gaming246@gmail.com
                </a>
              </p>
            </li>
            <li>
              <h2>Phone:</h2>
              <p>
                xxx-xxx-xxxx <br />
                xxx-xxx-xxxx
              </p>
            </li>
          </ul>
        </div>

        {/* image */}
        <div className="contact-container__right"></div>
      </div>

      {/* About Section */}
      <div className="about-container">
        <h1>Highnoon Gaming</h1>
        <p>
          We at Highnoon Gaming seek to promote the spirit of eSport by hosting
          events and tournaments. We are your premier source for video game
          action and news within the Barbados Fighting Game Community{' '}
        </p>

        <span class="material-icons controller">sports_esports</span>
      </div>

      {/* Footer Section  */}
      <div className="footer-container">
        {/* top */}
        <div className="footer-container--top">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/highnoongaming/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/highnoongaming?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/highnoongaming/photos/?ref=page_internal"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/uRSVcupH8v"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-discord"></i>
              </a>
            </li>
            <li>
              <a href="www" target="_blank" rel="noreferrer">
                <i className="fab fa-twitch"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCzkXPzoWsqIaL6hWrqE9DJQ"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* bottom */}
        <div className="footer-container--bottom">
          <div className="sponsors-container">
            <ul>
              <li>Sponsor</li>
              <li>Sponsor</li>
              <li>Sponsor</li>
            </ul>
          </div>
          <p className="copyright">@ Copyright @ 2021 Highnoon Gaming</p>
        </div>
      </div>
    </>
  );
}

export default Landing;
