import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Button from '../Button';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    onDelete: () => void;
    onCancel: () => void;
};

const DeleteBoardBox: React.FC<IProps> = ({ onDelete, onCancel, className, ...props }) => {
    return (
        <div className={cn(styles.deleteBoardBox, className)}
             {...props}
        >
            <h2 className={styles.title}>
                Delete this task?
            </h2>
            <p className={styles.description}>
                Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed.
            </p>

            <div className={styles.buttonContainer}>
                <Button onClick={onDelete}
                        variant={'danger'}
                >
                    Delete
                </Button>
                <Button onClick={onCancel}>
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default DeleteBoardBox;
