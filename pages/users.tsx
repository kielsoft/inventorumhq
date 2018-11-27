import React from 'react'

import ContentWrapper from '../app/components/ContentWrapper'
import List from '../app/components/List'
import SearchBox from '../app/components/Search'
import { AppMainContextConsumer, AppContext } from '../app/context';
import { IUserState, IUserData } from '../app/context/states/Users';

interface Props {
    context: {
        usersState: IUserState
    }
}

interface State {
    searchText: string
}

export default class Users extends React.Component<Props, State> {
    static contextType = AppContext;

    constructor(prop) {
        super(prop)

        this.state = {
            searchText: ''
        }

        this.doSearch.bind(this)
    }

    componentWillMount() {
        const usersState = this.getUsersState();
        usersState.fetch();
    }

    componentDidMount(){
        this.context.setPageTitle("Users");
    }

    doSearch(e: Event) {
        this.setState({ searchText: String((e.target as any).value).trim() });
    }

    private getUsersState(): IUserState {
        return this.context.usersState
    }

    render() {
        return <AppMainContextConsumer>
        {(state:any)=>{
            const usersState:IUserState = state.usersState;
            return (<React.Fragment>
                <ContentWrapper className="row">
                    <div className="col m10 s8 no-padding">
                        <SearchBox onChangeHandler={this.doSearch.bind(this)} placeholder='Search user' />
                    </div>
                    <div className="col m2 s4 ">
                        <button className="block-button">Add</button>
                    </div>
                </ContentWrapper>
                <ContentWrapper className="white content-wrapper">
                    <List type="UserList" items={usersState.getFilteredList(usersState.allUsers, this.state.searchText)} />
                </ContentWrapper>
            </React.Fragment>)

        }}
    </AppMainContextConsumer>
        
    }
}