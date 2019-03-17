import React, { Component } from 'react';

import classnames from 'classnames'
import LoadingSpinnerCss from './LoadingSpinner.css'
import './LoadingSpinner.css'

let loadingSpinnerCss = classnames.bind(LoadingSpinnerCss);

class LoadingSpinner extends Component {

    render() {

        let loadingMaskStyle = loadingSpinnerCss({
            displayNone: !this.props.show,
            loadingMask: true
        });

        let loadingPanelStyle = loadingSpinnerCss({
            'panel-spinner': true,
            'fade-in': true,
            'one': true,
            'bounce': true
        });

        let loadingSpinnerStyle = loadingSpinnerCss({
            'panelLoad': true
        });

        return (
            <div className={loadingMaskStyle}>
                <div className={loadingPanelStyle}>
                    <div className={loadingSpinnerStyle}>
                        <div className="spinner">
                            <div className="rect1"></div>
                            <div className="rect2"></div>
                            <div className="rect3"></div>
                            <div className="rect4"></div>
                            <div className="rect5"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoadingSpinner;