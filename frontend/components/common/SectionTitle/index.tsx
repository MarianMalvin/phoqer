import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { Theme } from '../../../config/theme';
import LinkArrow from '../LinkArrow';

const useStyles = createUseStyles((theme: Theme) => ({
  wrp: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: theme.rem(4),
  },
  title: {
    fontSize: theme.rem(2),
    fontWeight: theme.text.weight[3],
  },
}));

interface Props {
  link?: string;
  href?: string;
  children: string;
}

const SectionTitle = ({ children, link, href }: Props): ReactElement => {
  const css = useStyles();
  return (
    <div className={css.wrp}>
      <h2 className={css.title}>{children}</h2>
      {!!link && !!href && <LinkArrow href={href}>{link}</LinkArrow>}
    </div>
  );
};

export default SectionTitle;
