import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, KeyboardEvent, ReactElement, useState } from 'react';
import { createUseStyles } from 'react-jss';
import TextareaAutosize from 'react-textarea-autosize';

import template from '../../../../../../../assets/template';
import { Theme } from '../../../../../../../assets/theme';
import Button from '../../../../../../common/button';

const useStyles = createUseStyles((theme: Theme) => ({
    flex: {
        display: 'flex',
        alignItems: 'flex-start',
        flexGrow: 1,
        width: '100%',
        padding: theme.rem(1),

        ...theme.media(1060).max({
            position: 'fixed',
            bottom: theme.rem(5.5),
            left: '0',
            width: '100%',
            background: theme.palette.white,
        }),
    },
    textarea: {
        ...template(theme).input,
        minHeight: theme.rem(4),
        maxHeight: '70vh',
        boxShadow: 'unset',

        ...theme.media(768).max({
            padding: theme.rem(0.5, 1),
        }),
    },
    submit: {
        height: theme.rem(4),
        margin: theme.rem(0, 0, 0, 1),
        padding: theme.rem(0.5, 4),
        background: theme.palette.gray[1],
        color: theme.palette.black[0],
        borderRadius: theme.radius,
        fontSize: theme.rem(2),

        ...theme.media(1060).max({
            padding: theme.rem(0.5, 2),
        }),
    },
}));

const ChatForm = (): ReactElement => {
    const css = useStyles();
    const [value, setValue] = useState<string>();
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setValue(event.target.value);
    };
    const handleKeyPress = async (event: KeyboardEvent<HTMLTextAreaElement>): Promise<void> => {
        if (event.key === 'Enter' && !event.shiftKey) {
            console.log('send');
        }
    };

    return (
        <div className={css.flex}>
            <TextareaAutosize
                value={value}
                className={css.textarea}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                name="comment"
                wrap="soft"
                placeholder="Написать сообщение ..."
                title='Для переноса строки нажмите "Enter + Shift". Чтобы отправить сообщение нажмите "Enter"'
            />

            <Button className={css.submit} type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
        </div>
    );
};

export default ChatForm;
