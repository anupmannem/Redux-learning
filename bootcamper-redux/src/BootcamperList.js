import React from "react";

const studentDetails = [
	{
		id: 1,
		name: 'ujj',
		age: 29,
		expertise: "Node"
	},
	{
		id: 2,
		name: 'darshan',
		age: 25,
		expertise: "Mongodb"
	},
	{
		id: 3,
		name: 'nikhil',
		age: 28,
		expertise: "React"
	},
]

const Bootcampers = (props) => {	
	const studentList = props.students.map((stud, index) => {
		return <div key={index}>
			<h3>{stud.name}</h3>
			<span>{stud.age}</span>
			<br />
			<span>{stud.expertise}</span>
			<hr />
		</div>
	})
	return <div>{studentList}</div>
}

class BootcamperList extends React.Component {

	render() {
		return (
			<div>
				<Bootcampers students={studentDetails} />				
			</div>
		)
	}
}

export default BootcamperList;