import React from 'react';
import {
    bool,
    func,
    oneOfType,
    string,
    node,
    object,
    shape,
    elementType,
} from 'prop-types';
import Button from './BaseButton';
import Symbol from '@sb1/ffe-symbols-react';

const SecondaryButton = props => {
    const { leftIcon, rightIcon, ...rest } = props;
    return (
        <Button
            buttonType="secondary"
            leftIcon={leftIcon && <Symbol icon={leftIcon} size="sm" />}
            rightIcon={rightIcon && <Symbol icon={rightIcon} size="sm" />}
            {...rest}
        />
    );
};

SecondaryButton.propTypes = {
    /** Aria label for loading indicator */
    ariaLoadingMessage: string,
    /** The button label */
    children: node,
    /** Extra class names */
    className: string,
    /** Disable a button in certain situations */
    disabled: bool,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string, elementType]),
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
    /**  Shows a loader if true */
    isLoading: bool,
    /** Name of icon shown to the left of the label */
    leftIcon: string,
    /** Name of icon shown to the right of the label */
    rightIcon: string,
};

export default SecondaryButton;
