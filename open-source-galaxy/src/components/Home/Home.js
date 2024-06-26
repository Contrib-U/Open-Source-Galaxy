import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ElementEven from "../ElementEven";
import ElementOdd from "../ElementOdd";

// import "../../assets";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function importAll(r) {
    let images = {};
    // eslint-disable-next-line
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets", false, /\.(png|jpe?g)$/)
  );

  return (
    <>home</>
    // <div className="m-5 ">
    //   <Box sx={{ width: "100%" }}>
    //     <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
    //       <Tabs
    //         centered
    //         value={value}
    //         onChange={handleChange}
    //         aria-label="basic tabs example"
    //       >
    //         <Tab label="OPEN PROJECTS" {...a11yProps(0)} />
    //         <Tab label="UPCOMING PROJECTS" {...a11yProps(1)} />
    //         <Tab label="CLOSED PROJECTS" {...a11yProps(2)} />
    //       </Tabs>
    //     </Box>
    //     <CustomTabPanel value={value} index={0}>
    //       <div className="container">
    //         <ElementOdd
    //           name="Google Summer Of Code"
    //           src={images["element_1.jpg"]}
    //           link="https://summerofcode.withgoogle.com/"
    //         />
    //         <ElementEven
    //           name="MLH Fellowship"
    //           src={images["element-2.png"]}
    //           link="https://shorturl.at/cRVY7"
    //         />
    //         <ElementOdd
    //           name="Google Summer Of Docs"
    //           src={images["element-3.png"]}
    //           link="https://developers.google.com/season-of-docs"
    //         />

    //         <ElementEven
    //           name="Linux Kernal Mentorship"
    //           src={images["element-7.png"]}
    //           link="https://wiki.linuxfoundation.org/lkmp"
    //         />
    //         <ElementOdd
    //           name="Code Heat"
    //           src={images["element-8.png"]}
    //           link="https://codeheat.org/"
    //         />
    //         <ElementEven
    //           name="Hacktober Fest"
    //           src={images["element-9.jpg"]}
    //           link="https://hacktoberfest.com/"
    //         />

    //         <ElementOdd
    //           name="GirlScript SOC"
    //           src={images["element-4.jpg"]}
    //           link="https://gssoc.girlscript.tech/"
    //         />
    //         <ElementEven
    //           name="Outreachy"
    //           src={images["element-5.png"]}
    //           link="https://www.outreachy.org/"
    //         />
    //         <ElementOdd
    //           name="Summer of BitCoin"
    //           src={images["element-6.png"]}
    //           link="https://www.summerofbitcoin.org/"
    //         />

    //         <ElementOdd
    //           name="Hyperledger Mentorship Program"
    //           src={images["element-10.png"]}
    //           link="https://wiki.hyperledger.org/display/INTERN"
    //         />
    //         <ElementEven
    //           name="Reinforcement Learning Open Source Fest"
    //           src={images["element-11.jpg"]}
    //           link="https://www.microsoft.com/en-us/research/academic-program/rl-open-source-fest/"
    //         />
    //         <ElementOdd
    //           name="FOSSASIA Internship Program"
    //           src={images["element-12.png"]}
    //           link="https://fossasiataipei.github.io/fossasia-cht/apply/"
    //         />

    //         <ElementOdd
    //           name="Summer of Nix"
    //           src={images["element-13.png"]}
    //           link="https://github.com/ngi-nix/summer-of-nix"
    //         />
    //         <ElementEven
    //           name="24 Pull Requests"
    //           src={images["element-14.png"]}
    //           link="https://24pullrequests.com/"
    //         />
    //         <ElementOdd
    //           name="GitHub Octernship Program"
    //           src={images["element-15.png"]}
    //           link="https://github.com/education/Octernships"
    //         />
    //       </div>
    //     </CustomTabPanel>
    //     <CustomTabPanel value={value} index={1}>
    //       <p style={{ color: "black" }}>
    //         There are no upcoming projects at this moment
    //       </p>
    //     </CustomTabPanel>
    //     <CustomTabPanel value={value} index={2}>
    //       <p style={{ color: "black" }}>No closed Projects</p>
    //     </CustomTabPanel>
    //   </Box>
    // </div>
  );
};

export default Home;
