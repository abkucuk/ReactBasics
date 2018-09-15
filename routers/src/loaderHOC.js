import React, {Component} from 'react';

const LoaderHOC = (WrappedComponent) => {
	return class LoaderHOC extends Component{
		render(){
			return this.props.posts.length === 0 ? <div>Loading...</div> : <WrappedComponent {...this.props} />
		}
	}
};

export default LoaderHOC;

// HighOrderComponent neden kullanılıyor. atıyorum bir sürü yerde veri çekiliyor ve siz her compnentte loading kontrolü mü yapacaksınız
// hayır. HOC ile bunu tek bi noktadan kontrol edebiliyoruz.
// fakat şunu unutma kullanacağın yerdeki export yerine loaderHOC(componentAdi) değiştirmeyi unutma