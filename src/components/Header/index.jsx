import React, { useState } from "react";
import img from "./images/delivery.svg";
import { CheckCircleOutlined, GlobalOutlined } from "@ant-design/icons";
import { Select, Tooltip, Modal, Button } from "antd";
import "./Header.less";
// import SignInSide from "./Registr";
import { Link } from 'react-router-dom';
import  Buttons  from "@material-ui/core/Button";
import { DialogActions, DialogContentText,TextField,Dialog,DialogTitle,DialogContent } from "@material-ui/core";




const Option = Select.Option;

export const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

 const [open,setOpen] = React.useState(false);

 const handleClickOpen = () => {
   setOpen(true);
 }

 const handleClose = () => {
  setOpen(false);
}
  return (
    <header className="header">
      <div className="first">
        <Tooltip title="For above 999 som in Kyrgyzstan">
          <div className="delivery">
            <img
              src={img}
              alt="delivery icon"
              style={{
                width: "45px",
                height: "40px",
                marginLeft: "50px",
                marginRight: "5px",
                marginTop: "20px",
              }}
            />
            <h3 style={{ marginTop: "35px" }}>Free delivery</h3>
          </div>
        </Tooltip>
        <Tooltip title="The Best prices in the town">
          <div className="price">
            <CheckCircleOutlined
              style={{
                marginLeft: "10px",
                marginRight: "5px",
                fontSize: "150%",
              }}
            />
            <h3>Best Prices Everyday</h3>
          </div>
        </Tooltip>
      </div>

      <div className="second">
        <div className="lang">
          <GlobalOutlined style={{ fontSize: "150%" }} />
          <h3>EN</h3>
        </div>
        <div className="currency">
          <Select
            defaultValue="Country"
            style={{ width: 150, marginLeft: "10px" }}
            bordered={false}
          >
            <Option value="KG">KG</Option>
            <Option value="USA">USA</Option>
          </Select>
          <Select
            defaultValue="Currency"
            style={{ width: 150 }}
            bordered={false}
          >
            <Option value="Som">Som</Option>
            <Option value="Dollar">Dollar</Option>
          </Select>
        </div>
        <div className="register">
            <Buttons color="inherit"  type='text' variant="outlined" onClick={handleClickOpen}>Registration</Buttons>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id = "form-dialog-title">Registration Form</DialogTitle>
              <DialogContent>
                <DialogContentText>Log in to see ProductS</DialogContentText>
                <TextField 
                 autoFocus
                 margin="dense"
                 id="name"
                 label="Fullname"
                 type="name"
                 fullWidth/>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email adress"
                    type="email"
                    fullWidth/>

                     <TextField
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth/>
              </DialogContent>
              <DialogActions>
                <Buttons onClick={handleClose} color="primary">Cancel</Buttons>
                <Buttons onClick={handleClose} color="primary">Registration</Buttons>
              </DialogActions>
            </Dialog>

        </div>
      </div>
    </header>
  );
};
