import React from 'react';
import { shallow } from 'enzyme'
import SearchBox from "../../app/components/Search"

describe('<SearchBox />', () => {

    it('renders properly with placeholder text', () => {
        const component = shallow(<SearchBox placeholder="Enter Text" onChangeHandler={()=>{}} />);
        let html = component.html();
        expect(html).toMatchSnapshot();
    })
});


