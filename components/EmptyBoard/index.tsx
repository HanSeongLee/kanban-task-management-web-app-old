import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Button from '../Button';
import cn from 'classnames';

const EmptyBoard: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div className={cn(styles.emptyBoard, className)}
             {...props}
        >
            This board is empty. Create a new column to get started.

            <Button>
                + Add New Column
            </Button>
        </div>
    );
};

export default EmptyBoard;
