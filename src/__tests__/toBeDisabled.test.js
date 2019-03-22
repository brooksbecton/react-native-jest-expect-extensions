import React from "react";
import { Button, TextInput } from "react-native";
import TestRenderer from "react-test-renderer";
import { toBeDisabled } from "./../toBeDisabled";
expect.extend({
  toBeDisabled
});

describe(".toBeDisabled", () => {
  describe("Button", () => {
    it("returns true if Button is disabled explicitly", () => {
      const node = TestRenderer.create(
        <Button disabled={true} title="Click Me" onPress={() => {}} />
      ).getInstance();
      expect(node).toBeDisabled();
    });
    it("returns true if Button is disabled implicitly", () => {
      const node = TestRenderer.create(
        <Button disabled title="Click Me" onPress={() => {}} />
      ).getInstance();
      expect(node).toBeDisabled();
    });
    it("returns false for Button doesn't have disabled prop", () => {
      const node = TestRenderer.create(
        <Button title="Click Me" onPress={() => {}} />
      ).getInstance();

      expect(node).not.toBeDisabled();
    });
    it("returns false if Button is disabled explicitly", () => {
      const node = TestRenderer.create(
        <Button disabled={false} title="Click Me" onPress={() => {}} />
      ).getInstance();

      expect(node).not.toBeDisabled();
    });
  });
  describe("TextInput", () => {
    it("returns true if TextInput is disabled", () => {
      const node = TestRenderer.create(<TextInput disabled />).getInstance();
      expect(node).toBeDisabled();
    });
    it("returns false for un-disabled TextInput", () => {
      const node = TestRenderer.create(<TextInput />).getInstance();

      expect(node).not.toBeDisabled();
    });
  });

  //TODO:  Switch, Slider, TouchableWithoutFeedback, CheckBox
});
