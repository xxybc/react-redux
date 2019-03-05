import React,{Component} from 'react';
export default class extends Component{
    render(){
        const {active,children,onClick} = this.props;
        if (active) {
            return <span>{children}</span>
        }
        return (
            <a href="https:www.baidu.com" onClick={e => {
                e.preventDefault();
                onClick()
            }}>
                {children}
            </a>
        )

    }
}