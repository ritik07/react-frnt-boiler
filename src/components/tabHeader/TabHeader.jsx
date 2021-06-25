import React from 'react'
import { Row, Col } from 'reactstrap'
import { Layout, Affix, Input } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, CaretRightOutlined, AlignLeftOutlined, SearchOutlined, MobileOutlined } from "@ant-design/icons";

function TabHeader({ collapsed, toggle }) {
  return (
    <div className="cs-only-for-mobile cs-p-15 cs-dis-flex cs-justify-sb">
      <div>
        {React.createElement(
          collapsed ? AlignLeftOutlined : AlignLeftOutlined,
          { className: "trigger", onClick: toggle }
        )}
      </div>
      <div>
        <h3 className="cs-bm-0">Logo</h3>
      </div>

      <div className="d">
        <Input className="cs-br-18" size="large" placeholder="Search" allowClear={true} prefix={<SearchOutlined />} />
      </div>

      <div className="cs-bg-green cs-p-10 cs-br-5 cs-pointer cs-rm-10">
        <div className="cs-clr-fff cs-fw-600 cs-font-10 cs-lp-10 cs-rp-10 cs-dis-flex cs-hrz-center">
          Get Second Consultation
            </div>
      </div>

      <div className="cs-bg-orange cs-p-10 cs-br-5 cs-pointer cs-dis-flex cs-vt-center cs-hrz-center">
        <div className="cs-rm-5 cs-dis-flex cs-vt-center">
          <MobileOutlined className="cs-clr-fff" style={{ fontSize: 10 }} />
        </div>
        <div className="cs-clr-fff cs-fw-600 cs-font-10">
          Customer Care
            </div>
      </div>

      <div className="cs-btn-login cs-pointer">
        <div>
          Login
            </div>
      </div>
      <div className="cs-btn-signup cs-pointer">
        <div>
          Sign up
								</div>
      </div>
    </div>
  )
}

export default TabHeader
// return (
//   <div className="cs-only-for-mobile mobile-header cs-dis-flex cs-vt-center">
//     <Row noGutters={true} className="cs-vt-center">
//       <Col md={4}>
//         <Row noGutters={true} className="cs-vt-center">
//           <Col md={3}>
//             <div>
//               {React.createElement(
//                 collapsed ? AlignLeftOutlined : AlignLeftOutlined,
//                 { className: "trigger", onClick: toggle }
//               )}
//             </div>
//           </Col>
//           <Col md={8} className="cs-vt-center cs-dis-flex">
//             <h3 className="cs-txt-fff cs-bm-0">Logo</h3>
//           </Col>
//         </Row>
//       </Col>
//       <Col md={7}>
//         <div className="d">
//           <Input className="cs-br-18" size="large" placeholder="Search" allowClear={true} prefix={<SearchOutlined />} />
//         </div>
//       </Col>
//     </Row>
//     <Row noGutters={true} className="cs-vt-center">
//       <Col lg={12} md={12}>
//         <div className="cs-bg-green cs-p-10 cs-br-5 cs-pointer cs-rm-10">
//           <div className="cs-clr-fff cs-fw-600 cs-font-10 cs-lp-10 cs-rp-10 cs-dis-flex cs-hrz-center">
//             Get Second Consultation
//             </div>
//         </div>
//       </Col>
//     </Row>
//     <Row noGutters={true} className="cs-vt-center">
//       <Col lg={12} md={12}>
//         <div className="cs-bg-orange cs-p-10 cs-br-5 cs-pointer cs-dis-flex cs-vt-center cs-hrz-center">
//           <div className="cs-rm-5 cs-dis-flex cs-vt-center">
//             <MobileOutlined className="cs-clr-fff" style={{ fontSize: 10 }} />
//           </div>
//           <div className="cs-clr-fff cs-fw-600 cs-font-10">
//             Customer Care
//             </div>
//         </div>
//       </Col>
//     </Row>

//     <Row>
//       <Col lg={12} md={12}>
//         <div className="cs-btn-login cs-pointer">
//           <div>
//             Login
//             </div>
//         </div>
//       </Col>
//     </Row>
//   </div>
// );