// @flow
import { ExpectReturnValue } from "./flow-typed";
import { ReactTestInstance } from "react-test-renderer";

export function toBeDisabled(
  node: ReactTestInstance
): { message: string, pass: boolean } {
  const isDisabled = node.props.disabled === true;

  return {
    pass: isDisabled,
    message: () => `Expected node ${isDisabled ? "not " : ""}to be disabled`
  };
}
