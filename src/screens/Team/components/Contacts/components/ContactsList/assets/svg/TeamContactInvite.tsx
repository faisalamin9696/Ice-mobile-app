// SPDX-License-Identifier: ice License 1.0

import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

export const TeamContactInvite = (props: SvgProps) => (
  <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
    <G clipPath="url(#a)" fill={props.fill}>
      <Path d="M4.736 0c-.186.039-.376.066-.558.118C2.856.493 1.943 1.746 2.003 3.09c.065 1.428 1.053 2.59 2.43 2.857a3 3 0 0 0 3.542-2.568A2.996 2.996 0 0 0 5.342.021.787.787 0 0 1 5.252 0h-.516ZM12 5.39c-.109-.3-.329-.409-.638-.394-.28.012-.562.002-.862.002v-.972c-.002-.301-.214-.525-.497-.527-.28-.002-.5.221-.503.522-.005.32-.001.64-.001.977h-.132c-.285 0-.57-.003-.855.001a.502.502 0 0 0-.492.363.48.48 0 0 0 .208.55c.095.052.2.08.309.084.315.011.63.004.962.004v.169c0 .265-.002.53 0 .796.003.312.214.535.502.535.288 0 .498-.225.5-.535V6h.234c.215 0 .43-.01.645.002.308.017.518-.103.62-.4V5.39ZM5.01 12h4.415c.381 0 .579-.196.577-.577-.002-.398.017-.799-.02-1.194-.123-1.332-.802-2.296-1.995-2.893A3.322 3.322 0 0 0 6.47 7c-.98.003-1.96-.003-2.94.002C1.797 7.01.392 8.173.063 9.873a4.13 4.13 0 0 0-.058.652c-.01.304-.003.609-.002.913 0 .364.2.562.567.562h4.44Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="matrix(-1 0 0 1 12 0)" d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
