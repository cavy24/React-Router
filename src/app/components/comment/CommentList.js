import React from "react";
import Comment from './Comment';
import axios from 'axios';

export default class CommentList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            comments: []
        };

      
        //Загрузка комментариев
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
               this.setState({
                comments: response.data
               });
            });
    };

    render() {
        if(!this.state.comments.length){
            return null;
        }

        let userNames = ['Peter', 'Dominic', 'Alex', 'Sara', 'Jhon','Elisabet', 'Ben', 'George', 'Kate', 'Met'];

        let comments = this.state.comments.map((comment, index) => {
            
            this.state.comments[index]["userId"] = userNames[this.state.comments[index]["userId"]-1]
          
            return <Comment key={index} {...comment} />;
        });

        
        

        return <div>
            <h1>Комментарии</h1>
            {comments}
        </div>;
    }
   
}