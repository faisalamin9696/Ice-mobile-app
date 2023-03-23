// SPDX-License-Identifier: ice License 1.0

import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';
import {rem} from 'rn-units';

export const PrivacyIcon = (props: SvgProps) => (
  <Svg
    width={rem(22)}
    height={rem(14)}
    fill="none"
    viewBox="0 0 22 14"
    {...props}>
    <G clipPath="url(#a)" fill="#1B47C3">
      <Path d="M0 6.873c.106-.177.193-.368.32-.527 1.55-1.94 3.347-3.603 5.508-4.847C7.251.68 8.77.13 10.421.02c1.513-.1 2.96.196 4.35.79 1.988.85 3.69 2.119 5.203 3.643.628.633 1.202 1.322 1.783 2 .33.386.318.703.003 1.1-1.563 1.977-3.377 3.674-5.57 4.937-1.722.992-3.56 1.591-5.576 1.502-1.385-.061-2.691-.434-3.93-1.042C4.08 11.672 1.998 9.774.215 7.522.124 7.406.071 7.262 0 7.13v-.257Zm1.64.113c.08.096.135.17.2.236.668.685 1.308 1.402 2.015 2.046 1.364 1.242 2.88 2.254 4.645 2.853 1.057.36 2.14.512 3.254.39 1.427-.157 2.723-.686 3.943-1.416 1.586-.95 2.942-2.172 4.172-3.54.161-.18.315-.366.487-.567-.422-.456-.818-.908-1.24-1.334-1.416-1.437-2.984-2.669-4.85-3.478-.93-.403-1.899-.668-2.92-.716-1.561-.073-2.997.362-4.364 1.068-1.528.789-2.85 1.854-4.053 3.07-.44.446-.855.919-1.29 1.388Z" />
      <Path d="M15.344 7.02c-.018 2.408-1.983 4.35-4.375 4.323-2.408-.027-4.334-1.973-4.317-4.36.018-2.408 1.982-4.348 4.375-4.322 2.406.027 4.334 1.974 4.317 4.36Zm-1.45-.01a2.895 2.895 0 0 0-2.883-2.904C9.42 4.09 8.095 5.408 8.099 7.005a2.893 2.893 0 0 0 2.895 2.893 2.9 2.9 0 0 0 2.9-2.888Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
