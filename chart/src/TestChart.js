import React from "react";
import './App.css';
class TestChart extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch("https://api.thingspeak.com/channels/1911662/feeds.json?key=3OWB93ZA5CDH4DCG&results=2")
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item.created_at } >
					User_Name: { item.field1 },
          </ol>
				))
			}
		</div>
	);
}
}

export default TestChart;