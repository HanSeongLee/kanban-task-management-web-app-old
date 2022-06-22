import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Button from '../Button';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    onAddNewColumn: () => void;
};

const EmptyBoard: React.FC<IProps> = ({ onAddNewColumn, className, ...props }) => {
    return (
        <div className={cn(styles.emptyBoard, className)}
             {...props}
        >
            This board is empty. Create a new column to get started.

            <Button onClick={onAddNewColumn}>
                + Add New Column
            </Button>
        </div>
    );
};

export default EmptyBoard;
