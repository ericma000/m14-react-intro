// Main.jsx file

// Create a simple component
	var MyComponent = React.createClass({
    // In your render function...
        // Set variables `name` and `interest`


        // Return div with two paragraphs
        render:function() {
        	var name = "Bob the Builder";
       		var interest = "Building stuff";
       		return (
       			<div>
       				<p>Hello, my name is {name}</p>
       				<p>I am interested in {interest}</p>
       			</div>
       		)
        }
    })

    ReactDOM.render(<MyComponent/>, document.querySelector('main'));
// Render your component in the `main` section
