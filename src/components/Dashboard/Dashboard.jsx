import React from 'react'
import Button from '@mui/material/Button';
import image from '../../Assets/lmvinsurance.jpg'
import Appbar from '../Appbar/Appbar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate()
    const imageHeight = '500px';
    const imageWidth = '500px';



    const handleLogin = () => {
        navigate(`/insuranceplan`);
      };

  return (
    <div className="dashboardContainer">
        <Appbar />
        <div className='dashboardTools'>
            <div className="descriptionContainer">
                <p className="description">
                    LMV Insurance Brokers Private Limited was incorporated in the state of Telangana as Pvt. Ltd Company. LMV Insurance act as a Direct Insurance Broker by IRDA under Insurance Brokers Regulations, 2002, granted with license in April 2008.
                </p>
                <p className="description">
                    Insurance as defined is a financial risk management tool in which the insured transfers a risk of potential financial loss to the insurance company that mitigates it in exchange for monetary compensation known as the premium. It is an important aspect of each individual's life to continue with financial well-being of family in case of any eventuality. Though we all are familiar with the term "insurance", there exists a huge gap while analysing the need for insurance.
                </p>
                <p className="description">
                    LMV Insurance Brokers Private limited ensure to meet this gap between what customer needs and what customer gets and provides 360 degree transparent vision to our customers. We are committed to provide timely, honest, reliable and satisfying services to customer needs.
                </p>
                <div className="description">
                    <h1>
                        Let's Make Best Insurance Plan for you
                    </h1>
                    <Button variant="contained" onClick={handleLogin} endIcon={<ArrowForwardIcon />}>PROCEED</Button>
                </div>
            </div>
            <img
                src={image}
                alt="colleagues"
                style={{ height: `${imageHeight}`, width: `${imageWidth}` }}
            />
        </div>
    </div>
  )
}

export default Dashboard