import React from "react";
import { TransitionNullable } from "react-nullable-transition";

import styles from "./OpacityTransition.module.css";

const timeout = Number(styles.transitionTimeout);
const classNames = {
  appearDone: "done-appear",
  enterDone: "done-enter",
  exitDone: "done-exit",
  appear: styles.enter,
  appearActive: styles.enterActive,
  enter: styles.enter,
  enterActive: styles.enterActive,
  exit: styles.exit,
  exitActive: styles.exitActive,
};

export const OpacityTransition: React.FC = ({ children }) => {
  return (
    <TransitionNullable timeout={timeout} classNames={classNames}>
      {children}
    </TransitionNullable>
  );
};
