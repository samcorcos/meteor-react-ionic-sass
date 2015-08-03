Home = React.createClass({
  render() {
    return (
      <div>
        <div className="list">
          <label className="item item-input">
            <input type="text" placeholder="First Name" />
          </label>
          <label className="item item-input">
            <input type="text" placeholder="Last Name" />
          </label>
          <div className="padding">
            <button className="button button-block button-positive">
              Sign In
            </button>
          </div>
        </div>

        <ul className="list">
          <li className="item item-toggle">
             HTML5
             <label className="toggle toggle-assertive">
               <input type="checkbox" />
               <div className="track">
                 <div className="handle"></div>
               </div>
             </label>
          </li>
          <li className="item item-checkbox">
             <label className="checkbox">
               <input type="checkbox" />
             </label>
             Flux Capacitor
          </li>
        </ul>

        <div className="bar bar-footer bar-light">
          <div className="title">Footer</div>
        </div>
      </div>
    )
  }
});
