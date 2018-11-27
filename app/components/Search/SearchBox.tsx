import React from 'react'
import './SearchBox_style.scss'
interface Props {
    onChangeHandler: (event: any) => void,
    placeholder: string
}

export default class SearchBox extends React.Component<Props> {
    public searchBox;

    render() {
        return <div className="input-field search-box-wrapper">
            <i className="material-icons prefix">search</i>
            <input ref={(searchBox) => this.searchBox = searchBox} onChange={this.props.onChangeHandler}  type="text" placeholder={this.props.placeholder} className="validate browser-default" />
        </div>
    }
}