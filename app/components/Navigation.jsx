var React = require('react');
var {Link, IndexLink} = require('react-router');


var Navigation = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer
            </li>
            <li className>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li className="link">
              <Link to="/" activeClassName="active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu-text">
            Created By <a href="https://github.com/FurtiveNeptune" target="_blank">Sean O'Dell</a>
          </ul>
        </div>
      </div>
    );
};

module.exports = Navigation;
