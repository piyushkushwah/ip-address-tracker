import React, { useState, useEffect } from 'react';
import './info.css';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Info(props) {

    let initialState = {
        info: [
            {
                name: 'Ip Address',
                val: '0.0.0.0'
            },
            {
                name: 'Location',
                val: 'Not Avail'
            },
            {
                name: 'Timezone',
                val: 'UTC-00:00'
            },
            {
                name: 'ISP',
                val: 'Not Avail'
            }
        ]
    }
    const [state, setstate] = useState(initialState)

    useEffect(() => {

        if (props.ipData !== null) {

            const { ipData } = props;

            state.info[0].val = ipData.ip;
            state.info[1].val = ipData.location.region
                + ', ' + ipData.location.country
                + ' ' + ipData.location.postalCode;

            state.info[2].val = 'UTC' + ipData.location.timezone;
            state.info[3].val = ipData.isp;

            setstate({ info: [...state.info] });
        }

    }, [props.ipData])

    return (
        <div className="info">
            {
                state.info.map((e, index) => {
                    return (

                        <React.Fragment key={index}>

                            <div
                                style={{
                                    border: index === 0 ? 'none' : '',
                                }} key={index} className="info-child" >

                                <h2>{e.name.toUpperCase()}</h2>

                                {
                                    props.ipData === null &&
                                        props.searchHit ?

                                        <ClipLoader color={'#00A878'}
                                            loading={true} size={30} />
                                        :

                                        <h1>{e.val}</h1>
                                }

                            </div>

                        </React.Fragment>
                    )
                })
            }
        </div >
    )
}
