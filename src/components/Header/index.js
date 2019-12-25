import React from 'react'
import { Row,Col } from "antd"
import './index.less'
import Util from '../../utils/utils'
import {jsonp} from '../../axios'
import { connect } from 'react-redux'
let timer
class Header extends React.Component{
    state={}
    componentDidMount(){
        this.setState({
            userName:'河畔一角'
        })
        timer = setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
    }
     

    componentWillUnmount(){
        clearInterval(timer)
    }
    
    render() {
        const { menuName, menuType } = this.props;
        return (
            <div className="header">
                <Row className="header-top">
                    {
                        menuType ? 
                            <Col span="6" className="logo">
                                {/* <img src="/assets/logo-ant.svg" alt=""/> */}
                                <span>IMooc 通用管理系统</span>
                            </Col> : ''
                    }
                    <Col span={menuType?18:24}>
                        <span>欢迎，{this.state.userName}</span>
                        <button className="link-button">退出</button>
                    </Col>
                </Row>
                {
                    menuType ? '' :
                        <Row className="breadcrumb">
                            <Col span={4} className="breadcrumb-title">
                                {menuName || '首页'}
                            </Col>
                            <Col span={20} className="weather">
                                <span className="date">{this.state.sysTime}</span>
                            </Col>
                        </Row>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        menuName: state.home.menuName
    }
};

export default connect(mapStateToProps)(Header)