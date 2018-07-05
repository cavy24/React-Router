import React from 'react';
import {Link} from 'react-router';

export default class BlogPostButton extends React.Component // -> 
{
    render()
    {
        return <li><Link to={this.props.hrefBlogPostButtons}>{this.props.children}</Link></li>;
    }
}
