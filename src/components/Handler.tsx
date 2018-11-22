import * as React from 'react';
import { withHandlers } from  'recompose';

type Outter = {
    text: string;
};

type Handlers = {
    onClick: () => void;
};

type Props = Outter & Handlers;

const component: React.SFC<Props> = (props: Props) => {
    return <div onClick={props.onClick}>{props.text}</div>;
};

export default withHandlers<Outter, Handlers>({
    onClick: (props: Outter) => () => {
        console.log(`${props.text} is clicked.`);
    },
})(component);
