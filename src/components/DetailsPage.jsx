import React from 'react';
import '../styles/DetailsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import setting from '../images/setting.png';
import mic from '../images/mic.png';
import arrow from '../images/arrow.png';
import right from '../images/right.png';
import { closeDetail } from '../reducers/CountriesReducer';

function Details() {
  const isOpen = useSelector((state) => state.region.isOpen);
  const targetdetails = useSelector((state) => state.region.targetdetails);

  const dispatch = useDispatch();

  const handleCloseDetail = () => {
    dispatch(closeDetail(''));
  };

  return (
    <div>
      {isOpen && (
        <div className="mainDetails">
          <div className="searchBardetails">
            <div>
              <button className="itemArrowBtn" type="button" onClick={handleCloseDetail}>
                <img src={arrow} width="20px" height="20px" alt="" />
              </button>
            </div>
            <div>{targetdetails.name.common}</div>
            <div className="iconSearchdetails">
              <div>
                <img src={mic} width="20px" height="20px" alt="" />
              </div>
              <div>
                <img src={setting} width="20px" height="20px" alt="" />
              </div>
            </div>
          </div>
          <div className="mainItemdetails">
            <div className="AfricaImgdetails">
              <img src={targetdetails.flags.png} style={{ marginTop: '20px' }} width="100px" height="150px" alt="" />
            </div>
            <div className="AfricaTextdetails">
              <div>{targetdetails.name.official}</div>
              {' '}
              <div>{targetdetails.population}</div>
            </div>
          </div>
          <div className="Information">Information</div>
          <div className="itemsdetails">
            <div className="capital itemdetail">
              <div className="txt">Capital</div>
              {' '}
              <div className=" itemdetail1">
                <div>
                  {targetdetails.capital}
                  {' '}
                </div>
                {' '}
                <div><img src={right} width="20px" height="20px" alt="" /></div>
              </div>
            </div>
            <div className="subregion itemdetail">
              <div className="txt">Subregion</div>
              <div className=" itemdetail1">
                {' '}
                <div>
                  {targetdetails.subregion}
                  {' '}
                </div>
                {' '}
                <div><img src={right} width="20px" height="20px" alt="" /></div>
              </div>
            </div>
            <div className="status itemdetail">
              {' '}
              <div className="txt">Status</div>
              <div className=" itemdetail1">
                <div>
                  {targetdetails.status}
                  {' '}
                </div>
                {' '}
                <div><img src={right} width="20px" height="20px" alt="" /></div>
              </div>
            </div>
            <div className="timezones itemdetail">
              <div className="txt">Timezones</div>
              <div className=" itemdetail1">
                <div>
                  {targetdetails.timezones}
                  {' '}
                </div>
                {' '}
                <div><img src={right} width="20px" height="20px" alt="" /></div>
              </div>
            </div>
            <div className="startofweek itemdetail">
              <div className="txt">startofweek</div>
              <div className=" itemdetail1">
                <div>
                  {targetdetails.startOfWeek}
                  {' '}
                </div>
                {' '}
                <div><img src={right} width="20px" height="20px" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
