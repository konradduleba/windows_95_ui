import { Position } from "./context.types";

export type TestProps = {
  containerId: string;
};

export type MovingAbilityProps = TestProps & {
  position: {
    x?: Position["x"];
    y: Position["y"];
  };
};
