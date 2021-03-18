import React from 'react';
import leaf from '../images/leaf.png';
import leaf_right from '../images/leaf_right.png';

export class Policy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             showPolicy: false,
             contentDisplay: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    
    
    handleClick() {
        this.setState(({ showPolicy : !(this.state.showPolicy) }));
      this.handleChange();
    }
        
    handleChange() {
        if (this.state.showPolicy) {
            this.setState({contentDisplay: this.props.chidren });
           } 
    }


    render() {
        return (
            <div className="policy-item" key={this.props.index}>
                <h4 className="policy-title" key={this.props.index} id={`policy-${this.props.index}`} onClick={this.handleClick}><span><img src={leaf} alt="Leaf" className="leaf"/></span><span className="policy-title-item">{this.props.title}</span><span><img src={leaf_right} alt="Leaf" className="leaf"/></span></h4>
                <div className="policy-content-container" key={`content-${this.props.index}`} id={`content-${this.props.index}`}>
                    <p key={`p1-${this.props.index}`} className="policy-content">{this.state.showPolicy ? this.props.content : ""}</p>
                    <p key={`p2-${this.props.index}`} className="policy-content-middle">{this.state.showPolicy ? this.props.contentMiddle : ""}</p>
                    <p key={`p3-${this.props.index}`} className="policy-content-end">{this.state.showPolicy ? this.props.contentEnd : ""}</p>
                </div>
            </div>
        )
    }
}

export default Policy;
