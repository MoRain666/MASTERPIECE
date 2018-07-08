import React from 'react';
import PropTypes from "prop-types";

import './styles.css';

class ModalWindow extends React.Component {

    static defaultProps = {
        isOpen: false,
    };

    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        className: PropTypes.string,
    };

    render() {
        if (this.props.isOpen) {
            const classNames = ['modal-window'];
            if (this.props.className !== undefined) {
                classNames.push(this.props.className)
            }
            return (
                <div
                    className={classNames.join(' ')}
                >
                    {this.props.children}
                </div>
            );
        }
        return null;
    }
}

export default ModalWindow;