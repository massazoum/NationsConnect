import React, { useEffect, useState } from 'react';
import '../styles/HomePage.css';
import { useDispatch, useSelector } from 'react-redux';
import setting from '../images/setting.png';
import mic from '../images/mic.png';
import arrow from '../images/arrow.png';
import africa from '../images/africa.png';
import right from '../images/right.png';
import { RegionAfricaAPI, openDetail, findDetail } from '../reducers/CountriesReducer';

function Home() {
  const RT = useSelector((state) => state.region.Africaregion);
  const isOpen = useSelector((state) => state.region.isOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RegionAfricaAPI());
  }, [dispatch]);

  const handleOpenDetail = (event) => {
    const buttonId = event.currentTarget.id;
    const element = RT.find((item) => item.name.common === buttonId);
    dispatch(openDetail());
    dispatch(findDetail(element));
  };

  const [searchValue, setSearchValue] = useState('');

  const filteredCountries = RT.filter((country) => country.name.common.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div>
      {!isOpen && (
        <div className="mainHome">
          <div className="searchBar">
            <div>
              <img src={arrow} width="20px" height="20px" alt="" />
            </div>

            <div>
              Welcom to you
            </div>

            <div className="iconSearch">
              <div>
                <img src={mic} width="20px" height="20px" alt="" />
              </div>
              <div>
                <img src={setting} width="20px" height="20px" alt="" />
              </div>
            </div>
          </div>

          <div className="mainItem">
            <div className="AfricaImg">
              <img src={africa} width="100px" height="150px" alt="" />
            </div>
            <div className="AfricaText">
              <h1>Africa</h1>
            </div>
          </div>
          <div className="africa_countries">
            <div className="africa_countriesText">List of africa countries  </div>
            <div>
              Search
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Name country"
              />
            </div>
          </div>
          <div className="items">
            {filteredCountries.map((country) => (
              <div className="item" key={country.name.common}>
                <div className="itemArrow">
                  <button type="button" id={country.name.common} className="itemArrowBtn" onClick={handleOpenDetail}>
                    <img src={right} width="20px" height="20px" alt="" />
                  </button>
                </div>
                <div className="itemImg">
                  <img src={country.flags.png} width="80px" height="80px" alt="" />
                </div>
                <div className="textItem">{country.name.common}</div>
                <div className="textItem">
                  Pop :
                  {country.population}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
