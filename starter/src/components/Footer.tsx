import React from 'react';

type Props = {
    className?: string,
}

function Footer({ className, ...others }: Props) {
    return (
        <div
            className={className}
            {...others}
        >
            Footer
        </div>
    )
}

export default Footer;
