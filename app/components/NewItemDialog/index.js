import React, { Component } from "react";
import Dialog from "react-native-dialog";

export default class NewItemDialog extends Component {
  static defaultProps = {
    selectedHour: { id: 0, title: "" },
    onNewItem: () => {},
  };

  state = {
    isDialogOpen: false,
    text: "",
  };

  toggleDialog = () => {
    this.setState({ isDialogOpen: !this.state.isDialogOpen, text: "" });
  };

  addItem = () => {
    if (this.state.text) {
      this.props.onNewItem(this.state.text);
      this.toggleDialog();
    }
  };

  render() {
    return (
      <Dialog.Container visible={this.state.isDialogOpen}>
        <Dialog.Title>{`New Task - ${this.props.selectedHour.title}`}</Dialog.Title>
        <Dialog.Input
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <Dialog.Button label="Cancel" onPress={this.toggleDialog} />
        <Dialog.Button label="Add" onPress={this.addItem} />
      </Dialog.Container>
    );
  }
}
