import React from 'react'
import "./Record.css";
import { gateway } from '../../config';
import { Button } from '@nextui-org/react';
const Record = ({ record }) => {
    return (
        <>
            <div className="container record">
                <div className="row">
                    <div className="col-md-7">
                        <div className="details-record">
                            <ul>
                                <li className="row">
                                    <span className="col-md-5">Hospital Id :</span>
                                    <p>
                                        {record.hospitalId}
                                    </p>
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Condition :</span>
                                    <p>
                                        {record.condition}
                                    </p>
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Description :</span>
                                    <p>
                                        {record.description}
                                    </p>
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Allergies:</span>
                                    <p>
                                        {record.allergy}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 rec">
                        <a href={`${gateway}${record.docs}`}>
                            <Button>Download Record</Button>
                        </a>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Record
