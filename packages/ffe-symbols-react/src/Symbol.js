import React from 'react';
import { string, bool, oneOf } from 'prop-types';
import classNames from 'classnames';

export const Symbol = props => {
    const { className, size, weight, fill, ariaLabel, icon, ...rest } = props;

    return (
        <span
            className={classNames(
                'ffe-symbol',
                fill ? `ffe-symbol--filled-${weight}` : `ffe-symbol--${weight}`,
                size && `ffe-symbol--${size}`,
                className,
            )}
            role="graphics-symbol img"
            aria-label={ariaLabel ? ariaLabel : null}
            aria-hidden={!ariaLabel}
            {...rest}
        >
            {icon}
        </span>
    );
};

Symbol.defaultProps = {
    fill: false,
    weight: 400,
};

Symbol.propTypes = {
    /**  Fills the icon with color */
    fill: bool,
    /** The name of the icon that should be shown */
    icon: string.isRequired,
    /** Size of the icon, default is the closest defined font-size */
    size: oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
    /** Symbols stroke weight. This can affect overall size of symbol, 400 is default */
    weight: oneOf([300, 400, 500]),
    /** Additional classnames */
    className: string,
    /** Aria label text. If null/undefined, aria-hidden is automatically set to true */
    ariaLabel: string,
};

export default Symbol;
