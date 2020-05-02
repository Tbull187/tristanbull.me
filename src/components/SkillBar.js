import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './SkillBar.css';

export class SkillBar extends Component {
  state = { seen: false };

  onChange(isVisible) {
    if (isVisible) {
      this.setState({seen: true})
    }
  }

  render() {
    const {skill, percent} = this.props;
    return (
      <VisibilitySensor onChange={(e) => this.onChange(e)}>
        <div className="skill-bar-container">
          <div id={this.state.seen ? `skill-bar-${percent}` : ''}>
            <span className="skill-area">{skill}</span>
            <span className="percent-text">{percent}%</span>
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}