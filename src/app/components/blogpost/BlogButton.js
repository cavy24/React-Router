import React from 'react';
import {Link} from 'react-router';

export default class BlogButton extends React.Component // -> 
{
    render()
    {
        return <li><Link to={this.props.hrefBlogButton}>{this.props.children}</Link></li>;
    }
}
