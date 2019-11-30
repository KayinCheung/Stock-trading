import React from "react";
import { connect } from "react-redux";

class KeyStats extends React.Component {
  render() {
    let { key_stats, profile } = this.props;

    return (
      <div className="whitebg padded has-text-left">
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  key_stats: state.stock.key_stats,
  profile: state.stock.profile
});

export default connect(mapStateToProps, {})(KeyStats);
