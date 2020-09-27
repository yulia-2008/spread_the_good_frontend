import React, { Component } from 'react';


class Comment extends Component {

    state={
         comments: this.props.post.comments,
      
        comment: ""
    }

    // comments = () => {     
    //    return this.state.comments.map((comm) => <p key={comm.id}> {comm.text}</p> )             
    // }

// name = commId => { 
//     const token = localStorage.getItem("token") 
//    return  fetch(`http://localhost:4000/api/v1/comments/${commId}`, {
//         method: "GET", 
//         headers: {Authorization: `Bearer ${token}`},
//          })
//     .then(response => {return response.json()} )
//     // .then(resp => {return console.log(resp.user.username)})
//      .then (resp =>  {let user = resp.user.username; return user} )
   
  
// }
// {this.name(comm.id).id} 


    comments = () => {  
        
        
            return this.state.comments.map((comm) => <p key={comm.id}>   {comm.text}</p> ) 
    }
    // {this.name(comm.id)}:

    changeHandler = event => {this.setState({ comment: event.target.value})
    }

    commentSubmitHandler = event => {event.preventDefault()

            let options = { method: 'POST',
                            headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            Authorization: `Bearer ${this.props.currentUser.jwt}`
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
                .then(resp => this.setState({ comments: [...this.state.comments, resp],
                                              comment: "",
                                           })
                 )
                //  resp.doesnt have a user who wrote a comment
                event.target.reset()  
                this.props.addCommentSubmitHandler()   
    }

   
       
    render() { 
            //   console.log("comm", this.props)
        return (
            <div id = "comments">
           
            {this.comments()}
           

                 <form onSubmit = {event => this.commentSubmitHandler(event)}>
                    <textarea  type="text"  name="comment" rows="3"
                               placeholder = "Enter your text"
                               onChange={this.changeHandler}>                           
                    </textarea><br/>                    
                    <input  type="submit" value="Submit"></input>           
               </form>  
              
                 
            </div>


        );
    
    }
   
           
//    componentDidMount() { 
//        fetch(`http://localhost:4000/api/v1/posts/${this.props.post.id}`)
//        .then(response => response.json())
//        .then (resp =>  {this.setState({comments: resp.comments}) 
//        })
//     } 
}

 export default Comment;
