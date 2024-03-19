import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Avatar, Button, Menu, Carousel, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Img1 from "./carousel2.png";
import Img2 from "./carousel.webp";
import Img3 from "./logo.jpeg";
import "./App.css";
import Layout, { Header } from "antd/es/layout/layout";

const button = <Button type="primary">Cart</Button>;
const shop = (
  <Button
    type="primary"
    style={{
      height: "4rem",
      width: "30rem",
      color: "black",
      backgroundColor: "#fff",
      fontFamily: "Impact",
      fontSize: "2rem",
      //margin: "3rem 13rem 0rem 31rem",
      // Adding margin-top to drop the button down
    }}
  >
    𝐋𝐞𝐭'𝐬 𝐞𝐱𝐩𝐥𝐨𝐫𝐞 𝐭𝐡𝐞 𝐩𝐫𝐨𝐝𝐮𝐜𝐭𝐬 𝐛𝐞𝐟𝐨𝐫𝐞 𝐝𝐞𝐜𝐢𝐝𝐢𝐧𝐠 𝐰𝐡𝐢𝐜𝐡 𝐨𝐧𝐞 𝐭𝐨 𝐛𝐮𝐲.
  </Button>
);

const carouselshop = (
  <Button
    type="primary"
    style={{
      height: "4rem",
      width: "15rem",
      color: "black",
      backgroundColor: "#fff",
      fontFamily: "sans-serif",
      fontSize: "2rem", // Maintain existing button styles
      marginTop: "25rem", // Adjust margin-top to move the button down
    }}
  >
    𝐒𝐇𝐎𝐏 𝐍𝐎𝐖
  </Button>
);
const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "Home",
  },
  {
    label: "About",
    key: "About",
  },
  {
    label: "Products",
    key: "Products",
  },
  {
    label: "Contact",
    key: "Contact",
  },
  {
    label: <Avatar size={34} icon={<UserOutlined />} />,
    key: "user-avatar",
  },
  {
    label: button,
    key: "cart",
  },
];

const contentStyle: React.CSSProperties = {
  height: "88.4vh",
  color: "#fff",
  lineHeight: "400px",
  textAlign: "center",
  background: "#364d79",
  backgroundSize: "cover",
  backgroundPosition: "center",
  // marginTop: "8px",
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "99%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
};

const App: React.FC = () => {
  const [current, setCurrent] = useState("About");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="demo-logo">
          <Image
            style={{ marginLeft: "1rem", marginTop: -10 }}
            src={Img3}
            alt="Logo"
            width={45}
            height={60}
          />
        </div>
        <div className="menu-container">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="menu"
            style={{ paddingTop: "10px" }}
          />
        </div>
      </Header>
      <Carousel
        style={{ margin: "-12px -8px -8px" }}
        autoplay
        autoplaySpeed={2500}
      >
        <div>
          <h3
            style={{
              ...contentStyle,
              backgroundImage: `url(https://img.pikbest.com/origin/09/00/71/51apIkbEsTZs6.jpg!sw800)`,
            }}
          >
            {carouselshop}
          </h3>
        </div>
        <div>
          <h3 style={{ ...contentStyle, backgroundImage: `url(${Img1})` }}>
            {carouselshop}
          </h3>
        </div>
        <div>
          <h3 style={{ ...contentStyle, backgroundImage: `url(${Img2})` }}>
            <div style={overlayStyle}></div>
            {carouselshop}
          </h3>
        </div>
      </Carousel>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "black",
          marginTop: "-15px",
          marginLeft: "-15px",
          marginRight: "-8px",
        }}
      >
        <h2 style={{ color: "white", fontSize: "5rem" }}>
          𝐋𝐞𝐭'𝐬 𝐞𝐱𝐩𝐥𝐨𝐫𝐞 𝐭𝐡𝐞 <br /> 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬 <br /> 𝐝𝐞𝐜𝐢𝐝𝐞 𝐰𝐡𝐢𝐜𝐡 𝐨𝐧𝐞 𝐭𝐨 𝐛𝐮𝐲.
        </h2>
        <p
          style={{
            width: "70rem",
            marginLeft: "14rem",
            fontSize: "1.5rem",
            color: "white",
          }}
        >
          𝙼𝚊𝚒𝚗𝚝𝚊𝚒𝚗𝚒𝚗𝚐 𝚊 𝚝𝚠𝚘-𝚠𝚑𝚎𝚎𝚕𝚎𝚛 𝚛𝚎𝚚𝚞𝚒𝚛𝚎𝚜 𝚌𝚊𝚛𝚎𝚏𝚞𝚕 𝚊𝚝𝚝𝚎𝚗𝚝𝚒𝚘𝚗 𝚝𝚘 𝚟𝚊𝚛𝚒𝚘𝚞𝚜
          𝚌𝚘𝚖𝚙𝚘𝚗𝚎𝚗𝚝𝚜, 𝚎𝚜𝚙𝚎𝚌𝚒𝚊𝚕𝚕𝚢 𝚟𝚒𝚝𝚊𝚕 𝚘𝚗𝚎𝚜. 𝚁𝚎𝚐𝚞𝚕𝚊𝚛 𝚌𝚑𝚎𝚌𝚔-𝚞𝚙𝚜 𝚊𝚗𝚍 𝚝𝚒𝚖𝚎𝚕𝚢
          𝚛𝚎𝚙𝚕𝚊𝚌𝚎𝚖𝚎𝚗𝚝 𝚘𝚏 𝚍𝚊𝚖𝚊𝚐𝚎𝚍 𝚘𝚛 𝚠𝚘𝚛𝚗 𝚙𝚊𝚛𝚝𝚜 𝚊𝚛𝚎 𝚎𝚜𝚜𝚎𝚗𝚝𝚒𝚊𝚕 𝚏𝚘𝚛 𝚝𝚑𝚎 𝚜𝚖𝚘𝚘𝚝𝚑
          𝚘𝚙𝚎𝚛𝚊𝚝𝚒𝚘𝚗 𝚘𝚏 𝚝𝚑𝚎 𝚟𝚎𝚑𝚒𝚌𝚕𝚎 𝚊𝚗𝚍 𝚢𝚘𝚞𝚛 𝚜𝚊𝚏𝚎𝚝𝚢.
        </p>
      </div>
    </Layout>
  );
};

export default App;
