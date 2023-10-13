import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./InsurancePlan.css";
import image from "../../Assets/policy.jpg";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function InsurancePlan() {
  const [value, setValue] = useState(0);
  const [destination, setDestination] = useState("");
  const [ageValues, setAgeValues] = useState({
    self: "",
    child1: "",
    child2: "",
    child3: "",
    spouse: "",
    father: "",
    mother: ""
  });
  const [groupAgeValues, setGroupAgeValues] = useState({
    member1: "",
    member2: "",
    member3: "",
    member4: "",
    member5: "",
  })
  const [individualAgeValues, setIndividualAgeValues] = useState({
    self: "",
  })
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  console.log(ageValues, "ageValues");

  const imageHeight = "700px";
  const imageWidth = "700px";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const submitHandler = () => {
    const data = {
      destination,
      startDate,
      endDate,
    };

    family.forEach((item) => {
      data[item.name.toLowerCase()] = '';
    });

    data.self = ageValues.self;
    data.spouse = ageValues.spouse;
    data['child 1'] = ageValues.child1;
    data['child 2'] = ageValues.child2;
    data['child 3'] = ageValues.child3;
    data.father = ageValues.father;
    data.mother = ageValues.mother;
    
    // group.member5 = groupAgeValues.member5

    localStorage.setItem('familyData', JSON.stringify(data));
    localStorage.setItem('groupData', JSON.stringify(groupAgeValues));
    localStorage.setItem('individualData', JSON.stringify(individualAgeValues));
  };


  const nameChangeHandler = (e) => {
    setDestination(e.target.value);
  };

  const changeAge = (field, value) => {
    field = field.toLowerCase();
    setAgeValues((prevValues) => ({
      ...prevValues,
      [field]: value
    }));
  };

  const changeGroupAge = (field, value) => {
    field = field.toLowerCase();
    setGroupAgeValues((prevValues) => ({
      ...prevValues,
      [field]: value
    }));
  };

  const changeIndiviualAge = (e) => {
    setIndividualAgeValues(e.target.value)
  };

  const changeStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const changeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const family = [
    {
      id: 1,
      name: "Self"
    },
    {
      id: 2,
      name: "Spouse"
    },
    {
      id: 3,
      name: "child 1"
    },
    {
      id: 4,
      name: "child 2"
    },
    {
      id: 5,
      name: "child 3"
    },
    {
      id: 6,
      name: "father"
    },
    {
      id: 7,
      name: "Mother"
    }
  ];

  const groups = [
    {
      id: 1,
      name: "member 1"
    },
    {
      id: 2,
      name: "member 2"
    },
    {
      id: 3,
      name: "member 3"
    },
    {
      id: 4,
      name: "member 4"
    },
    {
      id: 5,
      name: "member 5"
    }
  ];

  const date = [
    {
      id: 1,
      name: "Trip Start Date"
    },
    {
      id: 1,
      name: "Trip End Date"
    }
  ];

  const renderFamily = () => {
    return (
      <div>
        <div>
          <h3>Destination</h3>
          <input
            type="text"
            placeholder="Enter your Destination"
            onChange={nameChangeHandler}
            className="inputStyle"
          />
          <p>Destination: {destination} </p>
        </div>
        <div>
          <h3>AGE OF TRAVELLER(S)</h3>
          <div className="entries">
            <div className="displyEntries">
              <div className="entries">
                {family.map((item) => (
                  <div key={item?.id} className="entriItems">
                    <label>{item?.name}</label>
                    <input
                      type="number"
                      className="inputEntries"
                      placeholder="Age"
                      onChange={(e) => changeAge(item?.name, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="displyEntries">
            <div className="dateEntriItems">
              <label>Start Date</label>
              <input
                type="date"
                onChange={changeStartDate}
                value={startDate}
                className="dateItems"
              />
            </div>
            <div className="dateEntriItems">
              <label>End Date</label>
              <input
                type="date"
                onChange={changeEndDate}
                value={endDate}
                className="dateItems"
              />
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          className="buttonContainer"
          onClick={submitHandler}
        >
          SUBMIT
        </Button>
      </div>
    );
  };

  const renderGroups = () => {
    return (
      <div>
        <div>
          <h3>Destination</h3>
          <input
            type="text"
            placeholder="Enter your Destination"
            onChange={nameChangeHandler}
            className="inputStyle"
          />
          <p>destination : {destination} </p>
        </div>
        <div>
          <h3>AGE OF TRAVELLER(S)</h3>
          <div className="entries">
            {groups?.map((item) => (
              <div key={item?.id} className="entriItems">
                <label>{item?.name}</label>
                <input
                  type="number"
                  placeholder="Age"
                  className="inputEntries"
                  onChange={(e) => changeGroupAge(item?.name, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="displyEntries">
            {date.map((item) => (
              <div key={item?.id} className="dateEntriItems">
                <label>{item?.name}</label>
                <input type="date" className="dateItems" />
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="contained"
          className="buttonContainer"
          onClick={submitHandler}
        >
          SUBMIT
        </Button>
      </div>
    );
  };

  const renderIndividual = () => {
    return (
      <div>
        <div>
          <h3>Destination</h3>
          <input
            type="text"
            placeholder="Enter your Destination"
            onChange={nameChangeHandler}
            className="inputStyle"
          />
          <p>destination : {destination} </p>
        </div>
        <div>
          <h3>AGE OF TRAVELLER(S)</h3>
          <div className="entries">
            <div className="individualEntriItems">
              <label>Self</label>
              <input
                type="number"
                placeholder="Age"
                className="individualInputEntries"
                onChange={(e) => changeIndiviualAge(e)}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="displyEntries">
            {date.map((item) => (
              <div key={item?.id} className="dateEntriItems">
                <label>{item?.name}</label>
                <input type="date" className="dateItems" />
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="contained"
          className="buttonContainer"
          onClick={submitHandler}
        >
          SUBMIT
        </Button>
      </div>
    );
  };

  return (
    <>
      <img
        src={image}
        alt="colleagues"
        style={{ height: `${imageHeight}`, width: `${imageWidth}` }}
      />
      <Box sx={{ width: "auto" }} className="container">
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="tabsConatiner"
        >
          <Tabs
            className="tabs"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Family" {...a11yProps(0)} />
            <Tab label="Group/Friends" {...a11yProps(1)} />
            <Tab label="Individual" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {renderFamily()}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {renderGroups()}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {renderIndividual()}
        </CustomTabPanel>
      </Box>
    </>
  );
}
