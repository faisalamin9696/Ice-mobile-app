// SPDX-License-Identifier: ice License 1.0

import {COLORS} from '@constants/colors';
import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const LampActiveIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.25 25.248c-.221 0-.44.041-.634-.06a.84.84 0 0 1-.412-.482c-.155-.513-.447-.993-.847-1.515-.211-.27-.43-.536-.655-.797a46.07 46.07 0 0 1-.728-.867C11.98 20.297 11 18.773 11 16.504 11 11.754 14.842 8 20 8c5.158 0 9 3.753 9 8.505 0 2.268-.979 3.792-1.974 5.023-.209.257-.526.629-.728.866-.236.277-.456.537-.655.797-.4.522-.692 1.003-.847 1.515a.839.839 0 0 1-.409.497c-.197.105-.377.053-.642.064l-7.496-.02Zm.938 5.915c0-.222.088-.435.247-.592a.847.847 0 0 1 .596-.245h3.938c.223 0 .438.088.596.245A.835.835 0 0 1 21.97 32H18.03a.847.847 0 0 1-.596-.245.834.834 0 0 1-.247-.592Zm-.844-4.186a.847.847 0 0 0-.597.245.834.834 0 0 0 0 1.184.847.847 0 0 0 .597.245h7.312a.847.847 0 0 0 .597-.245.834.834 0 0 0 0-1.184.847.847 0 0 0-.597-.245h-7.312Z"
      fill={COLORS.primaryLight}
    />
  </Svg>
);
