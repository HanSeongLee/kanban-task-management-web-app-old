import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import ChevronDownIcon from '/public/icons/icon-chevron-down.svg';
import cn from 'classnames';

const BoardBar: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div className={cn(styles.boardBar, className)}
             {...props}
        >
            Platform Launch <ChevronDownIcon />
        </div>
    );
};

export default BoardBar;
