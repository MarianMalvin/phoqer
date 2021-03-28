import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { Theme } from '../../../../../../../assets/theme';

const useStyles = createUseStyles((theme: Theme) => ({
    root: {
        flexGrow: 2,
        height: '100%',
        borderRadius: theme.radius,
        overflow: 'auto',
    },
    inner: {
        padding: theme.rem(4, 1, 1),

        ...theme.media(768).max({
            padding: theme.rem(2, 1.5, 1.5),
        }),
    },
}));
const ChatFlow = (): ReactElement => {
    const css = useStyles();

    return (
        <div className={css.root}>
            <div className={css.inner}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum
                illum in iste itaque, natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum
                in iste itaque, natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in
                iste itaque, natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste
                itaque, natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Consectetur culpa cupiditate dicta enim eos fugiat harum illum in iste itaque,
                natus, neque praesentium, provident ratione tenetur veniam vero? Aspernatur, totam!
            </div>
        </div>
    );
};

export default ChatFlow;
