import React from 'react';
import ReactDOM from 'react-dom';
import LayoutMenu from "./app/layouts/LayoutMenu";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import PageNotFound from './app/pages/PageNotFound';
import Main from './app/pages/Main';
import Comments from './app/pages/Comments';
import Blog from './app/pages/Blog';
import BlogPost1 from './app/pages/BlogPost1';
import BlogPost2 from './app/pages/BlogPost2';
import BlogPost3 from './app/pages/BlogPost3';
//import LayoutBlog from './app/layouts/LayoutBlog';

const app = document.getElementById('app');

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={LayoutMenu}>
        <IndexRoute component={Main} />
        <Route path="comments" component={Comments} />
        <Route path="blog" component={Blog} />
        <Route path="*" component={PageNotFound} />
        <Route path = "/blog/" component={Blog}>
            <Route path="blogpost1" component={BlogPost1} />
            <Route path="blog/blogpost2" component={BlogPost2} />
            <Route path="blog/blogpost3" component={BlogPost3} />
        </Route> 
    </Route>
    
    
    
       
        
    
</Router>, app);