import React from 'react';
//import {Link} from 'react-router';

export default class BlogItem extends React.Component // -> 
{

    constructor(props){
        super(props);
            this.state = {
                new_style: true
            };
            this.onChange = this.onChange.bind(this);
        
    };
    render()
    {
        let div_style = this.state.new_style ? {backgroundColor: 'white', color: 'black'} : {backgroundColor: 'black', color: 'white'};
        return <div style = {div_style} onClick = {this.onChange}>
            <div className = "blog-post">
            <h2 className="blog-post-title">{this.props.titleBlogItem}</h2>
            <div className = "blog-post-meta">{this.props.descriptionBlogItem}</div>
            {this.props.textBlogItem}
                <ul className = "pager">
                {this.props.children}
                </ul>  
             </div>
             </div>
    
    }

    onChange() {
        this.setState({
            new_style: !this.state.new_style
        });
     }

}