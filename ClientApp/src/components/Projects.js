import React, { Component } from 'react';

export class Projects extends Component {
    static displayName = Projects.name;

    render() {
        return (
            <div>
                <h1 className="text-center">Projects</h1>
                <div className="list-group">
                    <div className="list-group-item flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">python-ssp</h5>
                            <small><a href="https://github.com/brasky/python-ssp">github</a></small>
                        </div>
                        <p className="mb-1">A python library that extends python-docx to be able to work with FedRAMP security plan templates.</p>
                    </div>
                    <div className="list-group-item flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">OpenSync</h5>
                            <small className="text-muted"><a href="https://github.com/brasky/OpenSync" target="_blank" rel="noopener noreferrer">github</a></small>
                        </div>
                        <div className="d-flex w-100 justify-content-between">
                            <p className="mb-1">OpenSync is a site built using dotnet core 3.1 and SignalR to watch YouTube videos together with friends. Hosted on Azure Linux WebApp and deployed through Github Actions.</p>
                            <small className="text-muted"><a href="https://opensync.live" target="_blank" rel="noopener noreferrer">opensync.live</a></small>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
