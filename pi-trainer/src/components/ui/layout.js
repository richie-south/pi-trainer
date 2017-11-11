import * as React from 'react'
import styled from 'styled-components/native'

export const Column = styled.View`
  display: flex;
  flex-direction: ${({reverse}) => reverse ? 'column-reverse' : 'column'};
  align-items: ${({horizontal}) => horizontal || 'stretch'};
  align-self: ${({self}) => self || 'auto'};
  justify-content: ${({vertical}) => vertical || 'flex-start'};
`

export const Row = styled.View`
  display: flex;
  flex-direction: ${({reverse}) => reverse ? 'row-reverse' : 'row'};
  align-items: ${({vertical}) => vertical || 'stretch'};
  align-self: ${({self}) => self || 'auto'};
  justify-content: ${({horizontal}) => horizontal || 'flex-start'};
`

export const PaddedBox = styled.View`
  ${({horizontal = 0}) => `padding-horizontal: ${horizontal}px;`}
  ${({vertical = 0}) => `paddingVertical: ${vertical}px;`}
  ${({top = 0}) => top ? `padding-top: ${top}px;` : undefined}
  ${({left = 0}) => left ? `padding-left: ${left}px;` : undefined}
  ${({right = 0}) => right ? `padding-right: ${right}px;` : undefined}
  ${({bottom = 0}) => bottom ? `padding-bottom: ${bottom}px;` : undefined};
`
