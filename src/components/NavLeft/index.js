import React, { Component } from 'react'
import { Menu } from "antd";
import { NavLink } from "react-router-dom"
import menuList from '../../config/menuData'
import { connect } from 'react-redux'
import {action} from './store/'
import {navData} from "../../mock/navleft"
const { SubMenu, Item } = Menu
const {switchMenu} = action
class NavLeft extends Component {

    state = {
        currentKey: ''
    }

    renderMenu = (data) => {

        return data.map(item => {
            if (item.children) {
                return <SubMenu
                    key={item.key}
                    title={item.title}
                >
                    {this.renderMenu(item.children)}
                </SubMenu>
            }     
            return <Item key={item.key} title={item.title}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Item>
        })
    }


    componentDidMount() {
        console.log(navData)
        const menuTreeNode = this.renderMenu(menuList)
        this.setState({
            menuTreeNode
        })
    }

    handleClick = ({item,key}) => {
        if(key === this.state.currentKey){
            return false
        }
        const {dispatch} = this.props
        dispatch(switchMenu(item.props.title))
        this.setState({
            currentKey: key
        });
    }

    render() {
        return (
            <div>
                <NavLink to="/home" onClick={this.homeHandleClick}>
                    <div className="logo">
                        <h1>Imooc MS</h1>
                    </div>
                </NavLink>
                <Menu
                    theme="dark"
                    onClick={this.handleClick}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}



export default connect()(NavLeft)
