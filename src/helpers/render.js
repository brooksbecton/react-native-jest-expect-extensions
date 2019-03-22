import { create } from "react-test-renderer";

export function render(node) {
  return create(node).getInstance();
}
