import React from "react";
import "antd/dist/antd.css";
import {
  Badge,
  Typography,
  Divider,
  Col,
  Row,
  Button,
  Input,
  Image,
  Space,
  Card,
} from "antd";
import { Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
import { blue } from "@ant-design/colors";

const Home = () => {
  return (
    <Row justify="center">
      <Col xs={24} sm={20} md={16} xl={14}>
        <center>
          <p className="header">RINKEBY FAUCET</p>
          <img
            style={{
              width: 300,
              height: 300,
              borderRadius: 400 / 2,
              marginBottom: "50px",
            }}
            src={
              "https://lh3.googleusercontent.com/18cT4F-_CoYWxI34ADTB97duI2-KYQSde5EPyIgjXsYQbrDjFaIFgG0W4OxOw7kylJvr_b1j6X1oagVWvi_fgJw=s0"
            }
          />
        </center>
        <Row gutter={8} justify="center">
          <Col className="gutter-row" xs={18} sm={12} md={12} xl={8}>
            <Card
              size="small"
              className="transparentBackground"
              style={{
                marginBottom: 8,
              }}
            >
              <Typography.Text style={{ color: "whitesmoke" }}>
                Funded
              </Typography.Text>
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  margin: "0px",
                  color: "white",
                }}
              >
                <center>1.81 Eth</center>
              </p>
            </Card>
          </Col>
          <Col className="gutter-row" xs={18} sm={12} md={12} xl={8}>
            <Card size="small" className="transparentBackground">
              <Typography.Text style={{ color: "whitesmoke" }}>
                Balance
              </Typography.Text>
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  marginBottom: "0px",
                  color: "white",
                }}
              >
                <center>19.81 Eth</center>
              </p>
            </Card>
          </Col>
        </Row>
        <div
          style={{
            marginTop: "50px",
            marginBottom: "10px",
            borderColor: "purple",
          }}
        >
          <Input placeholder="Address" size="large" className="new" />

          <div style={{ marginBottom: "40px" }}>
            <Input
              style={{
                marginTop: "16px",
                marginBottom: "16px",
                borderColor: "purple",
              }}
              size="large"
              addonAfter="Eth"
              placeholder="Amount (Max 0.1 Eth)"
            />
            <Button loading className="buttonStyle">
              Send
            </Button>
          </div>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            <Divider orientation="left" plain>
              Transaction History (15)
            </Divider>
            <Card
              className="transparentBackground"
              size="small"
              style={{
                marginBottom: "8px",
              }}
            >
              <Col>
                <Typography.Title
                  level={5}
                  style={{
                    color: "white",
                  }}
                >
                  0x7c69c2E1d619C356125cAc15fc7302C8E864f2A7
                </Typography.Title>
                <Typography.Text
                  style={{
                    color: "white",
                  }}
                >
                  0.01 Eth . 12th May 2021
                </Typography.Text>
              </Col>
            </Card>
            <Card size="small" className="transparentBackground">
              <Typography.Title
                level={5}
                style={{
                  color: "white",
                }}
              >
                0x231b23vhg2f131g2asd
              </Typography.Title>
              <Typography.Text
                style={{
                  color: "white",
                }}
              >
                0.01 Eth . 12th May 2021
              </Typography.Text>
            </Card>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
// 0x91da2Fb60CE727C084c10874ef89fbD902883Ce0
