import React, { Component } from 'react';

class Showpost extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
    let dataURL = "http://localhost:10049/wp-json/wp/v2/posts?_embed";;
    fetch(dataURL)
        .then(res => res.json())
        .then(res => {
            this.setState({
                posts: res
            })
        })
    }
    render() {
        let posts = this.state.posts.map((post, index) => {
            return <div key={index}>
                <img
                src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
                alt="post feature"
                />
                <p><strong>Title:</strong><a href={ post.link }> {post.title.rendered} </a> </p>
                <p><strong>Excerpt:</strong> {post.excerpt.rendered}</p>
                <p><strong>Date:</strong> {post.date}</p>
            </div>
        });
        return (
            <div>
                {posts}
            </div>
        )
    }
}
export default Showpost;