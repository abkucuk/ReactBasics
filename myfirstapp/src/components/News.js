import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import NewsForm from './NewsForm';

class News extends React.Component{
    
    
	static propTypes = {
		news: PropTypes.array.isRequired,
		name: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string
		]).isRequired,
	};

	static defaultProps = {
		name: "Ahmet"
	};

    bufunc(){
        console.log('bu news componentindeki bufunc adlı bir fonksiyon ve ben buradan this.props.addnews e ulaşcam',this.props.addNews);
    }
	render(){
		const elements = this.props.news.map(news =>
			<NewsItem
				key={news.id}
				newsData={news}/>
		);
        console.log('news componentinde this-> propstan bu gelio',this.props.addNews);
		return(
			<div>
				{ elements }
				<NewsForm addNews={this.props.addNews}/>
                <button onClick={this.bufunc}> bufunc çalış </button>
			</div>
		)
	}
}

export default News;