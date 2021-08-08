import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
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

      <Menu.Item key="2">
        <Link to={routes.baby_clothes}>Bodysuits</Link>
      </Menu.Item>

      <Menu.Item key="3">
        <Link to={routes.baby_sleepingwear}>Sleepwear</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={routes.baby_swimwear}>Swimwear</Link>
      </Menu.Item>
      <Menu.Item
        key="1"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "#3fa5ee" }}
      >
        Girls Clothes (3-12)
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={routes.girls_dress}>Dresses</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={routes.girls_top}>Tops</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={routes.girls_acc}>Accessories</Link>
      </Menu.Item>
      <Menu.Item
        key="1"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "#3fa5ee" }}
      >
        Boys clothes (3-12)
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={routes.boys_top}>Tops</Link>{" "}
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={routes.boys_bottom}>Bottoms</Link>{" "}
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={routes.boys_activewear}>Activewear</Link>{" "}
      </Menu.Item>
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
      <Menu.Item key="2">
        <Link to={routes.swim_diaper}> Swim Diapers</Link>{" "}
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={routes.reusable_diaper}>Reusable Diapers</Link>{" "}
      </Menu.Item>
      <Menu.Item
        key="1"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "#3fa5ee" }}
      >
        Creams & Powders
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={routes.baby_powder}>Baby Powder</Link>{" "}
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={routes.baby_cream}>Diaper Rash Creams</Link>{" "}
      </Menu.Item>
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
      <Menu.Item key="2">
        <Link to={routes.fashion_dolls}> Fashion Dolls</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={routes.baby_parms}>Baby Dolls & Prams</Link>{" "}
      </Menu.Item>
      <Menu.Item
        key="4"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "#3fa5ee" }}
      >
        Action Toys
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={routes.action_toy}>Action Figures</Link>{" "}
      </Menu.Item>
      <Menu.Item key="3">Play Sets</Menu.Item>
      <Menu.Item
        key="3"
        style={{ fontFamily: "Poppins", fontWeight: 100, color: "#3fa5ee" }}
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
          href=''
          style={{ color: "#3fa5ee" }}
          onClick={(e) => e.preventDefault()}
        >
          CLOTHES
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
        <Link to={routes.sale_items}> SALE</Link>
      </Button>
    </div>
  );
};
