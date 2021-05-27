import React from "react";
import "antd/dist/antd.css";
import {
    Badge ,
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
      <Col xs={23} sm={20} md={16} xl={12}>
        <center>
          <Typography.Title style={{ marginTop: "80px", marginBottom: "40px" }}>
            Rinkeby Faucet
          </Typography.Title>
          <img
          style={{ marginBottom: 40 }}
            width={60}
            src={
              "https://ethereum.org/static/c48a5f760c34dfadcf05a208dab137cc/31987/eth-diamond-rainbow.png"
            }
          />
        </center>
        <Row gutter={8}>
          
          <Col className="gutter-row" span={12}>
            <Card size="small" style={{ marginBottom: 8 }}>
              <Col>
                <Typography.Title level={5}>
                  Transaction Value
                </Typography.Title>
                <Typography.Text>0.01 Eth</Typography.Text>
              </Col>
            </Card>
          </Col>
          <Col className="gutter-row" span={12}>
            <Card size="small" style={{ marginBottom: 8 }}>
              <Col>
                <Typography.Text>
                  Faucet Balance
                </Typography.Text>
                <Typography.Title level={1}>0.01 Eth</Typography.Title>
              </Col>
            </Card>
          </Col>
        </Row>
        <div
          style={{
            marginTop: "40px",
            marginBottom: "10px",
          }}
        >
          <Input placeholder="Address" size="large" />

          <div style={{ marginBottom: "40px" }}>
            <Input
              style={{
                marginTop: "16px",
                marginBottom: "16px",
              }}
              size="large"
              addonAfter="Eth"
              placeholder="Amount (Max 0.1 Eth)"
            />
            <Button loading type="primary">
              Primary Button
            </Button>
          </div>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            <Divider orientation="left" plain>Transaction History (15)</Divider>
            <Card size="small" style={{ marginBottom: 8 }}>
              <Col>
                <Typography.Title level={5}>
                  0x7c69c2E1d619C356125cAc15fc7302C8E864f2A7
                </Typography.Title>
                <Typography.Text>0.01 Eth</Typography.Text>
              </Col>
            </Card>
            <Card size="small">
              <Typography.Title level={5}>
                0x231b23vhg2f131g2asd
              </Typography.Title>
              <Typography.Text>0.01 Eth</Typography.Text>
            </Card>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
// 0x91da2Fb60CE727C084c10874ef89fbD902883Ce0
