import React, {ButtonHTMLAttributes} from 'react';
import styles from './style.module.scss';
import button from '../Button';
import cn from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    on: boolean;
};

const ToggleButton: React.FC<IProps> = ({ on, ...props }) => {
    return (
        <button className={cn(styles.toggleButton, {
            [styles.on]: on,
        })}
                type={'button'}
                {...props}
        ></button>
    );
};

export default ToggleButton;
