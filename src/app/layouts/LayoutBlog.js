import React from 'react';
import BlogPost from '../components/blogpost/BlogPost';
import BlogItem from '../components/blogpost/BlogItem';
import BlogButton from '../components/blogpost/BlogButton';
import BlogPostButton from '../components/blogpost/BlogPostButton';


export default class LayoutBlog extends React.Component
{
    render()
    {
        let titleBlogItem1 = 'Sample blog post';
        let descriptionBlogItem1 = <div><p>December 23, 2013 by <a>Mark</a></p></div>;
        let textBlogItem1 = <div><p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p></div>;

        let titleBlogItem2 = 'Another blog post';
        let descriptionBlogItem2 = <div><p>December 14, 2013 by <a>Chris</a></p></div>;
        let textBlogItem2 = <div><p>Cum sociis natoque penatibus et magnis dis parturient montes , nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><blockquote><p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p></blockquote></div>;

        let titleBlogItem3 = 'New feature';
        let descriptionBlogItem3 = <div><p>January 1, 2014 by <a>Jacob</a></p></div>;
        let textBlogItem3 = <div><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p><ul><li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li><li>Donec id elit non mi porta gravida at eget metus.</li><li>Nulla vitae elit libero, a pharetra augue.</li></ul></div>;
      
        return <div>
            <BlogPost>
                <BlogItem titleBlogItem = {titleBlogItem1} descriptionBlogItem = {descriptionBlogItem1} textBlogItem = {textBlogItem1}>
                    <BlogButton hrefBlogButton = 'blog/blogpost1'>Подробнее</BlogButton>
                    
                </BlogItem>
                <BlogItem titleBlogItem = {titleBlogItem2} descriptionBlogItem = {descriptionBlogItem2} textBlogItem = {textBlogItem2}>
                    <BlogButton hrefBlogButton = '/blog/blogpost2'>Подробнее</BlogButton>
                    
                </BlogItem>
                <BlogItem titleBlogItem = {titleBlogItem3} descriptionBlogItem = {descriptionBlogItem3} textBlogItem = {textBlogItem3}>
                    <BlogButton hrefBlogButton = '/blog/blogpost3'>Подробнее</BlogButton>
                    
                </BlogItem>
                <ul className = "pager">
                <BlogPostButton hrefBlogPostButtons = '/comments'>Предыдущая</BlogPostButton>
                <BlogPostButton hrefBlogPostButtons = '/notfound'>Следующая</BlogPostButton> 
                </ul>
            </BlogPost>
            
        </div>
   }
}