import React, { Component } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import Layout from "../layout";
import { Link } from "gatsby";
import "./photography.css";
import Hero from "../components/Hero/Hero";

class Home extends Component {
  render() {
    const { data } = this.props;

    return (
      <Layout>
        <div>
          <Helmet title={`Photography | Matthew Shields | Leeds based Web Developer`} />
          <Hero title="Photography" description="Hobbies are important. I know I'm a developer but I am really enjoying practicing my photography skills as a creative outlet outside of coding. Hope you enjoy!" />
          {data.allMarkdownRemark.edges.length > 0 ? (
            <div>
              {data.allMarkdownRemark.edges.map(post => (
                <div className="gallery-block">
                  {post.node.frontmatter.cover_images && post.node.frontmatter.cover_images.length > 0 ? (
                    <div className="gallery-block__outer">
                      {post.node.frontmatter.cover_images.map(image => (
                        <div>
                          {image.photo &&
                            <Img fluid={image.photo.childImageSharp.fluid} alt="" style={{height: '400px', width: (400 * image.photo.childImageSharp.fluid.aspectRatio)}} imgStyle={{objectFit: 'contain'}}  />
                          }
                        </div>
                      ))}
                    </div>
                  ) : false}
                  <div className="gallery-block__inner">
                    <h2>{post.node.frontmatter.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
                    <Link to={post.node.fields.slug}>
                      View album
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : false }
        </div>
      </Layout>
    );
  }
}

export default Home;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/(photography)/.*\\.md$/"}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            title
            cover_images {
              photo {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`