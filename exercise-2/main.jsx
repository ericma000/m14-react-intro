// Main.jsx file

// Create a simple component
var MyComponent = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello, my name is {this.props.name} </p>
        <p>I am interested in {this.props.interest}</p>
      </div>
    )
  }
})

ReactDom.render(<MyComponent name="Bob" interest="Build" />),
  document.querySelector('main')
);
    // In your render function...

            // Return div with two paragraphs

// Render your component in the `main` section
