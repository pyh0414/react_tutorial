import React, { createContext, Component } from 'react';

const Context = createContext();

const { Provider, Consumer: AnotherComsumer } = Context;

class Provider extends Component {

    state = {
        number: 1,
    }

    actions = {
        increment: () => {
            this.setState(
                ({ number }) =>
                    ({ number: number + 1 })
            )
        }
    }

    render() {
        const { state, actions } = this;
        const value = { state, actions }

        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

function useAnother(WrappedComponent) {
    return function useAnother(props){
        return(
            <AnotherComsumer>
                {
                    ({state, actions}) => (
                        <WrappedComponent>
                            number={state.number}
                            increment={actions.increment}
                        </WrappedComponent>
                    )
                }
            </AnotherComsumer>
        )
    }
}

export {
    AnotherProvider,
    AnotherConsumer,
    useAnother
}