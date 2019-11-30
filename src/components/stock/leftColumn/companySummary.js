import React from "react";
import { connect } from "react-redux";

class CompanySummary extends React.Component {
  render() {
    let { key_stats, profile } = this.props;

    return (
      <div className="whitebg padded has-text-left">
        <p className="bold is-size-5">Company Summary</p>
        <br />
        <p className="is-size-6">{profile.description}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  key_stats: state.stock.key_stats,
  profile: state.stock.profile
});

export default connect(mapStateToProps, {})(CompanySummary);
