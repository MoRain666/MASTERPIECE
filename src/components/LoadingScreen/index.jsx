import React from 'react';
import PropTypes from "prop-types";

import './styles.css';

class LoadingScreen extends React.Component {

    state = {
        loading: true
    };

    static defaultProps = {
        timeDuration: 2000,
    };

    static propTypes = {
        className: PropTypes.string,
        timeDuration: PropTypes.number,
    };



    componentDidMount() {
        this.loadingTimeOutId = setTimeout(
            () => {
                this.setState({loading: false})
            },
            this.props.timeDuration
        );
    }

    componentWillMount() {
        clearTimeout(this.loadingTimeOutId);
    }

    render() {
        const {loading} = this.state;

        if (!loading) {
            return this.props.children;
        }
        const classNames = ['loader'];
        if (this.props.className !== undefined) {
            classNames.push(this.props.className)
        }
        return (
            <div
                className={classNames.join(' ')}
           >
                <div className="loader-spinner" />
            </div>

        );
    }
}

export default LoadingScreen;