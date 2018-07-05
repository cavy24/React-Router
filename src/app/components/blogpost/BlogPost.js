import React from 'react';

//import BlogItem from './BlogItem';

export default class BlogPost extends React.Component // -> 
{

    render () {
   
    return <div>
        <div className = "col-sm-12 blog-main">
        {this.props.children}
        </div>
    </div>
};
};