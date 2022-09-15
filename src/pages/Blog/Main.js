import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Markdown from "./Markdown";

function Main(props) {
  const [postContent, setPostContent] = useState([]);
  const { posts, title } = props;
  console.log(postContent);

  useEffect(() => {
    const array = []
    posts.forEach((post) => {

      fetch(post)
        .then((res) => res.text())
        .then((res) => {
          array.push(res)
        })
        .catch(err=> console.log(err));
    })
    setPostContent(array)
  }, []);

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {postContent?.map((post) => (
        <Markdown className="markdown" 
        key={post.substring(0, 40)
        }
        >
          {post}
        </Markdown>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
