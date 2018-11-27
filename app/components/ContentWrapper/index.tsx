import React from 'react';
import "./style.scss";

const ContentWrapper = (props) => {

    return <div className={props.className}>
        {props.children}
    </div>
};

export default ContentWrapper;
