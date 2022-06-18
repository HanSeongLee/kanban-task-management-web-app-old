import React, {AnchorHTMLAttributes} from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import cn from 'classnames';

const Logo: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className, ...props }) => {
    return (
        <Link href={'/'}>
            <a className={cn(styles.logo, className)}
               {...props}
            >
                <h1>
                    <picture>
                        <source srcSet={'/logo-mobile.svg'}
                                media={'(max-width: 992px)'}
                        />

                        <img src={'/logo-light.svg'}
                             alt={'kanban'}
                        />
                    </picture>
                </h1>
            </a>
        </Link>
    );
};

export default Logo;

