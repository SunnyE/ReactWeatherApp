var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
      return (
            <div>
                  <h1 className="text-center"> Examples Component </h1>
                  <p> Here are a few example locations to try ouut:   </p>
                  <ol>
                        <li>
                              <Link to="/?location=Millburn"> Millburn, NJ</Link>
                        </li>
                        <li>
                              <Link to="/?location=Flagstaff"> Flagstaff, AZ</Link>
                        </li>
                  </ol>
            </div>
        )
}

module.exports = Examples; 