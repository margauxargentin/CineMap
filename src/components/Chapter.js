import React from 'react';
class Chapter extends React.Component {
    constructor(props) {
        super(props);
        this.pos = props.pos;
    }

    render() {
        return <div className="Chapter">
            <p class="chapter-title">{this.props.title}</p>
        </div>
    }
}

export default Chapter;