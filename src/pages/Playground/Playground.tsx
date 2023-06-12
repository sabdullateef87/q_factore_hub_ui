import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../_actions/playground.action";

type Props = {
  posts: [];
  error?: null;
  fetchPosts: Function;
};

const Playground = (props: any) => {
  React.useEffect(() => {
    props.fetchPosts();
  }, []);

  return (
    <div>
      {props.posts.map((post: any, idx: any) => (
        <p key={idx}>{post?.title}</p>
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    posts: state.postStore.posts,
    error: state.postStore.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
