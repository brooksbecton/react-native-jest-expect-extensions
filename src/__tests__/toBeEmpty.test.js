import React from "react";
import { Text, View } from "react-native";
import { render } from "./../helpers";

describe(".toBeEmpty", () => {
  it("returns true if node is empty", () => {
    const node = render(<View />);

    expect(node).toBeEmpty();
  });
  it("returns true if is non-empty node ", () => {
    const node = render(
      <View>
        <Text>d</Text>
      </View>
    );

    expect(node).not.toBeEmpty();
  });
});
