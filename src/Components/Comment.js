import React, { Component } from 'react';


class Comment extends Component {

    state={
        comments: this.props.post.comments,     
        comment: ""
    }

    comments = () => {          
         return this.state.comments.map((comm) => 
            <p key={comm.id}> {comm.user.username}: &nbsp; {comm.text}</p> ) 
    }

    changeHandler = event => {this.setState({ comment: event.target.value})
    }

    commentSubmitHandler = event => {event.preventDefault()
        const token = localStorage.getItem("token")
            let options = { method: 'POST',
                            headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            Authorization: `Bearer ${token}`
                            },
                            body: JSON.stringify({
                                   comment: { user_id: this.props.currentUser.user.id,  
                                              post_id: this.props.post.id,
                                              text: this.state.comment                                                                  
                                             }
                            })
                           }
                fetch('http://localhost:4000/api/v1/comments', options)
                .then(response => response.json())
                .then(resp =>{resp.user= this.props.currentUser.user
                              this.setState({ comments: [...this.state.comments, resp]                                              
                                           }) 
                 }) 

                //  resp.doesnt have a user who wrote a comment
                event.target.reset()  
                this.props.addCommentSubmitHandler()   
    }

   
       
    render() { 
                //  console.log("comm", this.state.comments)
        return (
             <div >
                <h4>Messages:</h4>          
                 <h6 id = "comments"> {this.comments()} </h6>   
                 <form onSubmit = {event => this.commentSubmitHandler(event)}>
                    <textarea id="textarea-input" type="text"  name="comment" rows="3"
                               placeholder = "Your message"
                               onChange={this.changeHandler}>                           
                    </textarea><br/> 
                  
                    {this.props.currentUser ?  <input  className='button' type="submit" value="Send"></input>  
                                            : <p>"Pease login to send a message"</p> 
                    }       
               </form>                               
            </div>
        );    
    }
}

 export default Comment;
