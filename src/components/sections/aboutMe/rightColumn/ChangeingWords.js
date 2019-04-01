import React from "react";
import SingleSection from "../../../utility/Sections/SingleSection";
import SecondaryTitle from "../../../utility/Titles/SecondaryTitle";
export default class ChangingWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "Christopher Fox",
      arrOfWords: [
        "Christopher Fox",
        "Writer",
        "Designer",
        "Poet",
        "Student of Life",
        "Developer"
      ],
      timer: ""
    };
    this.cycleWords = this.cycleWords.bind(this);
  }
  componentDidMount() {
    //set cycle
    let timer = setInterval(() => {
      this.cycleWords();
    }, 3000);

    this.setState({ timer: timer });
  }

  componentWillUnmount() {
    //unmount cycle
    clearInterval(this.state.timer);
  }

  cycleWords() {
    let ran = Math.floor(Math.random() * 6);
    this.setState({ word: this.state.arrOfWords[ran] });
  }
  render() {
    return (
      <SingleSection>
        <SecondaryTitle center={true}>{this.state.word}</SecondaryTitle>
      </SingleSection>
    );
  }
}
