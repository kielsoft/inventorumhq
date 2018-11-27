import React from 'react';
import { shallow } from 'enzyme';
import UserList from "../../app/components/List";

jest.mock("../../app/context/states/Users");

import { usersState } from "../../app/testHelper";

describe('UserList component ', () => {
    it('renders users list properly', () => {
        let searchText = '';
        const component = shallow(<UserList items={usersState.getFilteredList(usersState.allUsers, searchText)} type="UserList" />)
        let html = component.html();
        expect(html).toMatchSnapshot();
    })

    it("able to reach for 'Geo' and return 2 item", () => {
        let searchText = 'Geo';
        
        const component = shallow(<UserList items={usersState.getFilteredList(usersState.allUsers, searchText)} type="UserList" />)
        expect(component).toMatchSnapshot();
    })

    it("search is not case sensitive", () => {
        let searchText = 'Geo';
        
        const component = shallow(<UserList items={usersState.getFilteredList(usersState.allUsers, searchText)} type="UserList" />)
        expect(component).toMatchSnapshot();
    })

    it("con", () => {
        let searchText = 'Kiel';
        
        const component = shallow(<UserList items={usersState.getFilteredList(usersState.allUsers, searchText)} type="UserList" />)
        expect(component.html()).toEqual(expect.stringContaining('No record found'));
    })
});


