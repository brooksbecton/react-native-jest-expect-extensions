import React from "react";
import { Button, TextInput } from "react-native";
import { render } from "./../helpers";
import { toBeDisabled } from "./../toBeDisabled";

describe(".toBeDisabled", () => {
  describe("Button", () => {
    it("returns true if Button is disabled explicitly", () => {
      const node = render(
        <Button disabled={true} title="Click Me" onPress={() => {}} />
      );
      expect(node).toBeDisabled();
    });
    it("returns true if Button is disabled implicitly", () => {
      const node = render(
        <Button disabled title="Click Me" onPress={() => {}} />
      );
      expect(node).toBeDisabled();
    });
    it("returns false for Button doesn't have disabled prop", () => {
      const node = render(<Button title="Click Me" onPress={() => {}} />);

      expect(node).not.toBeDisabled();
    });
    it("returns false if Button is disabled explicitly", () => {
      const node = render(
        <Button disabled={false} title="Click Me" onPress={() => {}} />
      );

      expect(node).not.toBeDisabled();
    });
  });
  describe("TextInput", () => {
    it("returns true if TextInput is disabled", () => {
      const node = render(<TextInput disabled />);
      expect(node).toBeDisabled();
    });
    it("returns false for un-disabled TextInput", () => {
      const node = render(<TextInput />);

      expect(node).not.toBeDisabled();
    });
  });

  //TODO:  Switch, Slider, TouchableWithoutFeedback, CheckBox
});
