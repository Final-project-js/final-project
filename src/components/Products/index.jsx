import React from "react";
import pic from "./images/baby.png";
import pic1 from "./images/logo.png";
import pic2 from "./images/logo1.png";
import pic3 from "./images/logo2.jpg";
import img from "./images/diaper.jpg";
import img1 from "./images/fine.jpg";
import img2 from "./images/huggies.jpg";
import img3 from "./images/babyjoy.jpg";
import dolls from "./images/dolls.jpg";
import lol from "./images/lol.png";
import lego from "./images/lego.png";
import viga from "./images/viga.jpg";
import "./Products.less";
import { Menu, Dropdown, Button } from "antd";

const clothes = (
  <Menu style={{ display: "flex", justifyContent: "space-between" }}>
    <Menu>
      <Menu.Item
        key="1"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "#3fa5ee" }}
      >
        Baby clothes (0-2)
      </Menu.Item>
      <Menu.Item key="2">Bodysuits</Menu.Item>
      <Menu.Item key="3">Sleepwear</Menu.Item>
      <Menu.Item key="3">Swimwear</Menu.Item>
      <Menu.Item
        key="1"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "#3fa5ee" }}
      >
        Girls Clothes (3-12)
      </Menu.Item>
      <Menu.Item key="2">Tops</Menu.Item>
      <Menu.Item key="3">Dresses</Menu.Item>
      <Menu.Item key="3">Accessories</Menu.Item>
      <Menu.Item
        key="1"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "#3fa5ee" }}
      >
        Boys clothes (3-12)
      </Menu.Item>
      <Menu.Item key="2">Tops</Menu.Item>
      <Menu.Item key="3">Bottoms</Menu.Item>
      <Menu.Item key="3">Activewear</Menu.Item>
      <br />
      <Menu.Item
        key="1"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "cadetblue" }}
      >
        Popular Brands
      </Menu.Item>
    </Menu>
    <div>
      <div style={{ alignItems: "center" }}>
        <img
          src={pic}
          alt="clothes"
          style={{ marginLeft: 170, marginTop: 20 }}
        />
      </div>

      <div className="logos">
        <img src={pic1} alt="baby shop logo" />
        <img src={pic3} alt="the children place shop logo" />

        <img src={pic2} alt="mother's care shop logo" />
      </div>
    </div>
  </Menu>
);
const diapers = (
  <Menu style={{ display: "flex", justifyContent: "space-between" }}>
    <Menu>
      <Menu.Item
        key="1"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "#3fa5ee" }}
      >
        Disposable Diapers
      </Menu.Item>
      <Menu.Item key="2">Swim Diapers</Menu.Item>
      <Menu.Item key="3">Reusable Diapers</Menu.Item>
      <Menu.Item
        key="1"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "#3fa5ee" }}
      >
        Creams & Powders
      </Menu.Item>
      <Menu.Item key="2">Baby Powder</Menu.Item>
      <Menu.Item key="3">Diaper Rash Creams</Menu.Item>
      <Menu.Item
        key="1"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "cadetblue" }}
      >
        Popular Brands
      </Menu.Item>
    </Menu>
    <div>
      <div>
        <img src={img} alt="pampers" style={{ marginLeft: 60 }} />
      </div>
      <div className="diapers">
        <img src={img1} alt="baby shop logo" />
        <img src={img2} alt="the children place shop logo" />

        <img src={img3} alt="mother's care shop logo" />
      </div>
    </div>
  </Menu>
);
const toys = (
  <Menu style={{ display: "flex", justifyContent: "space-between" }}>
    <Menu>
      <Menu.Item
        key="1"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "#3fa5ee" }}
      >
        Dolls
      </Menu.Item>
      <Menu.Item key="2">Fashion Dolls</Menu.Item>
      <Menu.Item key="3">Baby Dolls & Prams</Menu.Item>
      <Menu.Item
        key="2"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "#3fa5ee" }}
      >
        Action Toys
      </Menu.Item>
      <Menu.Item key="2">Action Figures</Menu.Item>
      <Menu.Item key="3">Play Sets</Menu.Item>
      <Menu.Item
        key="3"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "#3fa5ee" }}
      >
        Plush & Soft Toys
      </Menu.Item>
      <Menu.Item key="2">Puppets</Menu.Item>
      <Menu.Item key="3">Interactive</Menu.Item>
      <Menu.Item
        key="1"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "cadetblue" }}
      >
        Popular Brands
      </Menu.Item>
    </Menu>
    <div>
      <div>
        <img src={dolls} alt="Dolls" style={{ marginTop: 20 }} />
      </div>
      <div className="dolls">
        <img src={lol} alt="baby shop logo" />
        <img src={lego} alt="the children place shop logo" />
        <img src={viga} alt="mother's care shop logo" />
      </div>
    </div>
  </Menu>
);

export const Products = () => {
  return (
    <div className="products">
      <Dropdown overlay={clothes}>
        <a
          className="ant-dropdown-link"
          style={{ color: "#3fa5ee" }}
          onClick={(e) => e.preventDefault()}
        >
          CLOTHS
        </a>
      </Dropdown>
      <Dropdown overlay={diapers}>
        <a
          className="ant-dropdown-link"
          style={{ color: "#3fa5ee" }}
          onClick={(e) => e.preventDefault()}
        >
          DIAPERS
        </a>
      </Dropdown>
      <Dropdown overlay={toys}>
        <a
          className="ant-dropdown-link"
          style={{ color: "#3fa5ee" }}
          onClick={(e) => e.preventDefault()}
        >
          TOYS
        </a>
      </Dropdown>
      <Button
        danger
        type="text"
        style={{ fontFamily: "Poppins", fontSize: " 24px", marginTop: "20px" }}
      >
        SALE
      </Button>
    </div>
  );
};
