import * as PropTypes from 'prop-types';
import styled from 'styled-components';

interface FlexProps {
  flexAuto?: boolean;
  flexColumn?: boolean;
  wrap?: boolean;
  align?: 'stretch' | 'center' | 'baseline' | 'flex-start' | 'flex-end';
  alignContent?:
    | 'stretch'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'flex-start'
    | 'flex-end';
  justify?:
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'flex-start'
    | 'flex-end';
  width?: string;
}

function buildStyle(props: FlexProps) {
  const output: any = {};

  if (props.align) {
    output['align-items'] = props.align;
  }
  if (props.alignContent) {
    output['align-content'] = props.alignContent;
  }
  if (props.justify) {
    output['justify-content'] = props.justify;
  }
  if (props.flexAuto) {
    output.flex = '1 1 auto';
  }
  if (props.flexColumn) {
    output['flex-direction'] = 'column';
  }
  if (props.wrap) {
    output['flex-wrap'] = 'wrap';
  }
  if (props.width) {
    output.width = props.width;
  }

  return output;
}

export const Flex = styled.div<FlexProps>(props => ({
  display: 'flex',
  ...buildStyle(props)
}));

export const Box = styled.div<FlexProps>(props => buildStyle(props));

(Flex as any).propTypes = (Box as any).propTypes = {
  flexAuto: PropTypes.bool,
  flexColumn: PropTypes.bool,
  wrap: PropTypes.bool,
  width: PropTypes.string,
  align: PropTypes.oneOf([
    'stretch',
    'center',
    'baseline',
    'flex-start',
    'flex-end'
  ]),
  alignContent: PropTypes.oneOf([
    'stretch',
    'center',
    'space-around',
    'space-between',
    'flex-start',
    'flex-end'
  ]),
  justify: PropTypes.oneOf([
    'center',
    'space-around',
    'space-between',
    'flex-start',
    'flex-end'
  ])
};
