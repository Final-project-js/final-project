import React from "react";
import "./Footer.less";
import "./FooterRes.less";
// icons
import { Tag } from "antd";
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
// import { Button } from 'antd';

// photos
import google from "../../assets/img-footer/google.png";
import apple from "../../assets/img-footer/apple.png";

export const Footer = () => {
  return (
    <footer className="footer-section-container">
      <div className="footer-card ">
        <div className="f-text">
          <p className="footer-text1 ">
            A baby is the light of a mother's eyes and we at Mumzworld
            understand that every mum wants the best for her <br />
            precious angel. In a remarkable breakthrough in online baby
            shopping, we presentbefore you the most extensive range of baby{" "}
            <br />
            and kids products that you could find in one place. Our team is
            dedicated to present you with fashionable, stylish yet highly <br />
            comfortable products for little kids, babies as well as expectant
            moms. <br />
            Buy baby clothes which are high in fashion and comfort. Explore our
            range of baby gear, travel gear, nursery equipment, <br />
            baby accessories, bathing solutions and much more. Add timely
            delivery and complete online transactions <br />
            security to our high quality products and you will never want to
            sample another store again.
          </p>
        </div>
        {/* footer-content */}
        <div className="footer-nav">
          {/* 1 */}
          <div className="footer-02">
            <h2 className="footer-03">Shopping Categories</h2>
            <ul className="footer-04">
              <li>Diapers</li>
              <li>Clothes</li>
              <li>Toys</li>
            </ul>
          </div>
          {/* 2 */}
          <div className="footer-022">
            <h2 className="footer-023">Get to know us</h2>
            <ul className="footer-024">
              <li>About us</li>
              <li>Contact us</li>
              <li></li>
            </ul>
          </div>
          {/* 3 */}
          <div className="footer-003">
            <h2 className="footer-004">More ways to shop</h2>
            <span className="footer-005">
              <img className="footer-05" src={google} alt="" />
              <img className="footer-06" src={apple} alt="" />
            </span>
          </div>
          {/* 4 */}
          <div className="footer-0001">
            <h3 className="footer-07">Social media</h3>
            <div className="footer-08">
              <Tag
                className="footer-09"
                icon={<FacebookOutlined />}
                color="#3b5999"
              >
                Facebook
              </Tag>
              <Tag
                className="footer-011"
                icon={<TwitterOutlined />}
                color="#55acee"
              >
                Twitter
              </Tag>
              <Tag
                className="footer-010"
                icon={<InstagramOutlined />}
                color="#cd201f"
              >
                Instagram
              </Tag>

              <Tag
                className="footer-012"
                icon={<GoogleOutlined />}
                color="#55acee"
              >
                Google
              </Tag>
            </div>
          </div>
        </div>
        {/* copyright  */}
        <div className="footer-copyright">
          © 2021 Snookums - Online Baby Shop . All Rights Reserved.
        </div>
      </div>

      {/* Responsive */}

      <div className="mb-card ">
        <div className="f-text-mb">
          <p className="footer-text1-mb ">
            A baby is the light of a mother's eyes and we at Snookums understand
            that every mum wants the best for her <br />
            precious angel. In a remarkable breakthrough in online baby
            shopping, we presentbefore you the most extensive range of baby{" "}
            <br />
            and kids products that you could find in one place. Our team is
            dedicated to present you with fashionable, stylish yet highly <br />
            comfortable products for little kids, babies as well as expectant
            moms. <br />
            Buy baby clothes which are high in fashion and comfort. Explore our
            range of baby gear, travel gear, nursery equipment, <br />
            baby accessories, bathing solutions and much more. Add timely
            delivery and complete online transactions <br />
            security to our high quality products and you will never want to
            sample another store again.
          </p>
        </div>
        {/* footer-content */}
        <div className="footer-mb">
          {/* 1 */}
          {/* <div className="footer-mb2">
            <h4 className="footer-mb3">Shopping Categories</h4>
            <ul className="footer-mb4">
              <li>Diapers</li>
              <li>Clothes</li>
              <li>Toys</li>
            </ul>
          </div> */}
          {/* 2 */}
          {/* <div className="footer-mb22">
            <h4 className="footer-mb23">Get to know us</h4>
            <ul className="footer-mb24">
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div> */}
          {/* 4 */}
          <div className="footer-0001mb">
            <h4 className="footer-07mb">Get to know us</h4>
            <div className="footer-08mb">
              <Tag
                className="footer-09mb"
                icon={<FacebookOutlined />}
                color="#3b5999"
              >
                Facebook
              </Tag>
              <Tag
                className="footer-011mb"
                icon={<TwitterOutlined />}
                color="#55acee"
              >
                Twitter
              </Tag>
              <Tag
                className="footer-010mb"
                icon={<InstagramOutlined />}
                color="#cd201f"
              >
                Instagram
              </Tag>

              <Tag
                className="footer-012mb"
                icon={<GoogleOutlined />}
                color="#55acee"
              >
                Google
              </Tag>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="footer-003mb">
          <h4 className="footer-004mb">More ways to shop</h4>
          <span className="footer-005mb">
            <img className="footer-05mb" src={google} alt="" />
            <img className="footer-06mb" src={apple} alt="" />
          </span>
        </div>

        {/* copyright  */}
        <h6 className="footer-copyrightmb" style={{ marginBottom: "10px" }}>
          © 2021 Snookums - Online Baby Shop . All Rights Reserved.
        </h6>
      </div>
    </footer>
  );
};
