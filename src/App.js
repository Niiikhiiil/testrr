import React, { Component } from 'react';

// 2c88268d5e07403aa1031c7e7bccf150
export default class App extends Component {
	state={news:[],country:"us",category:"general",loading:false}

	handleClick = (e) => {
		e.preventDefault();
		this.setState({loading:true});
		fetch(
			`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=2c88268d5e07403aa1031c7e7bccf150`,
		)
			.then((res) => res.json())
			.then((json) => {
				const news=json.articles;
				this.setState({
					news,loading:false
				});
			});
		
	};

	render() {
		const { news, country, category,loading } = this.state;
		
		return (
			
			<div>
				<h1>Fetching data</h1>
				<h3>Filter</h3>
				<select
					name="country"
					onClick={(e) => this.setState({ country: e.target.value })}
				>
					<option>Filter by Country</option>
					<option value="us">US</option>
					<option value="au">AU</option>
					<option value="ua">UA</option>
				</select>
				<select
					name="category"
					onClick={(e) => this.setState({ category: e.target.value })}
				>
					<option>Filter by Category</option>
					<option value="business">Businnes</option>
					<option value="general">General</option>
					<option value="entertainment">Entertainment</option>
				</select>
				<button onClick={(e) => this.handleClick(e)}>filter</button>

				{loading && <p>Loading....</p>}
				{news.map((item) => {
					return (
						<>
							
							<div key={item.content}>
								<li><b>Title</b>:{item.title}</li>
								<li><b>Description</b>:{item.description}</li>
								<li><b>Content</b>:{item.content}</li>
								<p>---------------------done----done----------------</p>
							</div>
						</>
					);
				})}
			</div>
		);
		
		
	}
}
