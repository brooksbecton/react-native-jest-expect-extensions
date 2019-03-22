// @flow
import { AbstractView } from "react";
import { ReactTestInstance } from "react-test-renderer";

export function toBeDisabled(
  node: ReactTestInstance
): { message: string, pass: boolean } {
  const isDisabled = Object.keys(node.props).includes("disabled");
  return {
    pass: isDisabled,
    message: () => `Expected node ${isDisabled ? "not " : ""}to be disabled`
  };
}
