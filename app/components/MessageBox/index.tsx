import "./style.scss";

const MessageBoxTypes = {
    DEFAULT: 'DEFAULT',
    SUCCESS: 'SUCCESS',
    NOTICE: "NOTICE",
    WARNING: "WARNING",
    ERROR: "ERROR",
}
 

const MessageBox = ({type , children}:{type: 'DEFAULT' | 'SUCCESS' | 'NOTICE' | 'WARNING' | 'ERROR', children:any}) => {
    let classname = 'message-box z-depth-1 center-align block ';
    switch (type){
        case MessageBoxTypes.SUCCESS: 
            classname += 'green black-text';
            break;
        case MessageBoxTypes.NOTICE: 
            classname += 'yellow black-text';
            break;
        case MessageBoxTypes.WARNING: 
            classname += 'orange black-text';
            break;
        case MessageBoxTypes.ERROR: 
            classname += 'red white-text';
            break;
        default: 
            classname += 'grey lighten-3 black-text z-depth-0';
            break;
    }

    return <div className={classname}>
        {children}
    </div>
}

export default MessageBox;