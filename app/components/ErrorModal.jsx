const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

const ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () { /* used to open the modal after DOM renders */
    const {title, message} = this.props;
    
    const modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button" data-close="">
            OK
          </button>
        </p>
      </div>
    );
    
    // use jQuery to inject HTML directly into React DOM (gets React to play with Foundation)
    const $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    /*
    * Usually, we'd have the HTML for the dialog here, but since Foundation manipulates the
    * DOM (by inserting the modal), React doesn't know how to handle it, so we have to use
    * componentDidMount along with jQuery and ReactDOMServer to inject it directly into the
    * React DOM.
    * */
    
    return (
      <div>
      
      </div>
    )
  }
});

module.exports = ErrorModal;