import React from "react";
import { Link } from "gatsby";


import { format_date } from "../../_helpers/helpers.js";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        url: postEdge.node.frontmatter.link_url,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: format_date(postEdge.node.fields.date),
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        short_description: postEdge.node.frontmatter.short_description
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    const linkPage = this.props.linkPage;
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <div className="project-list__single" key={post.title}>
            {linkPage ? ( 
              <h3 className="project-list__title">
                <Link className="no-icon" to={post.path}>{post.title}</Link>
              </h3>
            ) : (
              <h3 className="project-list__title">
                <a href={post.url} target="_blank">{post.title}</a>
              </h3>
            )}
            <p>{post.short_description}</p>
            <footer aria-label="Post date" className="project-list__footer">
              <p>{post.date}</p>
              {this.props.displayReadingTime === true &&
                <p>(Reading time: {post.timeToRead} minutes)</p>
              }
            </footer>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
