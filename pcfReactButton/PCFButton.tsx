import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';

export interface IPCFButtonProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  //buttonValue: string;
  buttonLabel: string;
  buttonLink: string;
}
     // {props.buttonValue}
export const ButtonAnchor: React.FunctionComponent<IPCFButtonProps> = props => {
  return (
    <PrimaryButton href={props.buttonLink} target="_blank">
      {props.buttonLabel}
    </PrimaryButton>
  );
};