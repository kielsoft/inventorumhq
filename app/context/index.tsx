import React from "react";
import Users from './states/Users';
import { IDispatch, IContextStateConstructable } from "./types";

export const AppContext = React.createContext({});

export class AppMainContextProvider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentPageTitle: 'Welcome',
            setPageTitle: this.setPageTitle.bind(this),
            ...this.connect([Users])
        }
    }

    setPageTitle(title:string){
        this.setState({currentPageTitle: title});
    }

    connect (statesClassList:IContextStateConstructable[]) {
        const data:any = {};
        statesClassList.map((StateClass:IContextStateConstructable) => {
            const stateInstance = new StateClass();
            data[StateClass.rootName] = stateInstance.getInitialState(this.dispatch.bind(this))
        })

        return data;
    }

    async dispatch(actionData: IDispatch){
        const data = {}
        data[actionData.rootStateName] = Object.assign({}, this.state[actionData.rootStateName], actionData.payload)
        await this.setState(data);
    }

    render() {
        const { state, props: { children } } = this;
        return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
    }
}

export const AppMainContextConsumer = AppContext.Consumer;