import * as React from 'react';
import {
    compose,
    withStateHandlers,
    withHandlers,
    StateHandler,
    StateHandlerMap,
    lifecycle,
} from 'recompose';

type Outter = {
};

type Body = {
    [key: string]: string;
};

type State = {
    data: Body;
};

interface StateUpdaters extends StateHandlerMap<State> {
    recieveData: StateHandler<State>;
}

type Handlers = {
    fetchData: () => Promise<void>;
};

type Props = Outter & State & StateUpdaters & Handlers;

const component: React.SFC<Props> = (props: Props) => {
    const entries = Object.entries(props.data);
    return (
        <dl>
        {
            entries.map((e, i) => ([
                <dt key={i}>{e[0]}</dt>,
                <dd key={i + entries.length}>{e[1]}</dd>,
            ]))
        }
        </dl>
    );
};

export default compose<Props, Outter>(
    withStateHandlers<State, StateUpdaters, Outter>(
        { data: {} },
        {
            recieveData: (_: State) => (body: Body) => ({ data: body }),
        },
    ),
    withHandlers<Props, Handlers>({
        fetchData: props => async () => {
            try {
                const resp = await fetch('https://api.github.com');
                const body = await resp.json();
                props.recieveData(body);
            } catch (e) {
                console.log(e.message);
            }
        },
    }),
    lifecycle<Props, {}>({
        componentDidMount() {
            this.props.fetchData();
        },
    }),
)(component);
