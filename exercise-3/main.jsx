// Main.jsx file

// Data to pass into our parent component
var employeeData = [
    {name:"Joan", title:"developer", salary:100000},
    {name:"Enrique", title:"manager", salary:200000},
    {name:"Shana", title:"developer", salary:105000},
    {name:"Shana", title:"manager", salary:105000},
];

// Create an EmployeeRow element to render a row of information for an employee
var EmployeeRow = React.createClass({
    // Define rendering function
    render: function() {

    }
});

// Create an EmployeeTable element in which to render your EmployeeRows
var EmployeeTable = React.createClass({
    render:function() {
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Salary</th>
                        </tr>


                        {// Enter employee rows here!!!!
                          this.props.employeeData.map(function())
                        }


                    </tbody>
                </table>
            </div>
        );
    }
});

// Render your component in the `main` section
ReactDom.render(<EmployeeTable employeeData={employeeData})
