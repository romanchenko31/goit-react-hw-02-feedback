import React, { Children, Component } from 'react';
import Section from './Section/Section.jsx';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  goodClick = () => {
    this.setState(prevState => ({
      good:prevState.good+=1
    }));
  }
 
  neutralClick=()=>{
    this.setState(prevState => ({
      neutral:prevState.neutral+=1
    }));
  }

  badClick=()=>{
    this.setState(prevState => ({
      bad:prevState.bad+=1
    }));
  }

  countTotalFeedback = () => (
    this.total = this.state.bad + this.state.good + this.state.neutral
  );

  countPositiveFeedbackPercentage = () => (
    this.percentagePositive = this.state.good / this.countTotalFeedback() * 100
  );

  render() {
    const percent = this.countPositiveFeedbackPercentage();
    const goodClick = this.goodClick;
    const neutralClick = this.neutralClick;
    const badClick = this.badClick;
    
    return ( 
      <Section options={{ goodClick,neutralClick,badClick }} good={ this.state.good } neutral={ this.state.neutral } bad={ this.state.bad } total={ this.countTotalFeedback() } positivePercentage={ percent }>
        {Children}
      </Section>
    );
  }
}

