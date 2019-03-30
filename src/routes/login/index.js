import React from 'react'
import {connect} from 'react-redux'
import action from '../../store/action/index'
import {Form, Icon, Input, Button, Checkbox,} from 'antd'
import './index.less'


class NormalLoginForm extends React.Component {
  componentWillMount() {
    localStorage.clear()
  }
  onKeyup (e) {
  }
  handleSubmit = (e) => {
    e.preventDefault()
    /*this.props.form.validateFields((err, values) => {
      let formValue = this.props.form.getFieldsValue();
      if (!err) {
      }
    })*/
  }
  handleLogin = () => {
    let formValue = this.props.form.getFieldsValue();
    this.props.Login(formValue).then(res  => {
       if (res.payload.success){
         this.props.history.push('/home')
         localStorage.setItem('token', res.payload.data.token)
       }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='login'>
        <div style={{width: '370px', margin: '100px auto'}}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('account', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input onKeydown={this.onKeyup}  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
              )}
            </Form.Item>
            <Form.Item>
              <Button onClick={this.handleLogin} type="primary" style={{width: '100%'}}>登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

export default connect(state=>({...state.login}), action.login)(WrappedNormalLoginForm)
