import * as React from 'react';
import {
    withHandlers,
    lifecycle,
    compose,
} from 'recompose';

type Outter = {
    text: string;
};

type Handlers = {
    logging: () => void;
};

type Props = Outter & Handlers;

const component: React.SFC<Props> = (props: Props) => {
    return <div>{props.text}</div>;
};

export default compose<Props, Outter>(
    withHandlers<Outter, Handlers>({
        logging: (props: Outter) => () => {
            console.log(`${props.text} did mounted.`);
        },
    }),
    lifecycle<Props, {}>({
        componentDidMount() {
            console.log('----------call componentDidMount----------');
            this.props.logging();
        },
    }),
)(component);
