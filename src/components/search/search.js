import axios from 'axios';
import React, { useState } from 'react';
import './search.css';
import arrow from '../../assets/icon-arrow.svg';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Search(props) {

    let initialState = {
        ipData: null,
        inputVal: '',
        loader: false
    }

    const [state, setstate] = useState(initialState);

    let baseUrl = 'https://geo.ipify.org/api/v1?apiKey=at_SvrYjcufIpHcSaS00pJz29FpSnYSe&ipAddress=';

    let fetchData = () => {

        let val = state.inputVal;

        axios.get(baseUrl + val).then(res => {

            setstate({
                ipData: res.data,
                loader: false
            });
            props.action(res.data, false);

        }).catch(err => {

            setstate({ loader: false });
            props.action(null, false);

        })

    }

    let inputValFunc = (e) => {
        setstate({ inputVal: e.target.value });
    }

    return (
        <div className="search">

            <h1>IP Address Tracker</h1>

            <div className="text-input"
                style={{
                    pointerEvents: state.loader ?
                        'none' : 'unset'
                }}>

                <input onChange={inputValFunc}
                    type="text" value={state.inputVal}
                    placeholder="Search..." />

                <div
                    className="fetch-button"
                    onClick={() => {
                        if (!state.inputVal) {
                            return alert('Please Enter IP Address')
                        }
                        setstate({ loader: true });
                        props.action(null, true);
                        fetchData();
                    }}>

                    {
                        state.loader ?
                            <ClipLoader color={'#00A878'}
                                loading={true} size={10} />
                            : <img src={arrow} alt="arrow" />
                    }

                </div>

            </div>

        </div>
    )
}
