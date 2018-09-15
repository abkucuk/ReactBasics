import React from 'react';

class NewsForm extends React.Component {
    addButton = () => {
        this.props.addNews();
        console.log('burası NewsFormJS deki addButon func içi ve bu oradaki this => ', this);
    }
    render() {
        console.log('bu da NewsForm.JS te ki herhangi bir yerde ki this _> ', this);

        return (
            <div>
                <button onClick={this.addButton}>Add</button>
            </div>
        )
    }
}

export default NewsForm;