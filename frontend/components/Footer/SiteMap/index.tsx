import Link from 'next/link';
import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { Theme } from '../../../config/theme';

const LINKS: { text: string; href: string }[] = [
  {
    text: 'Помощь и Обратная связь',
    href: '/help',
  },
  {
    text: 'Реклама на сайте',
    href: '/ad',
  },
  {
    text: 'Условия использования',
    href: '/rules',
  },
  {
    text: 'Политика конфиденциальности',
    href: '/polici',
  },
  {
    text: 'FAQ',
    href: '/faq',
  },
  {
    text: 'Правила безопасности',
    href: '/fff',
  },
  {
    text: 'Карта сайта',
    href: '/map',
  },
];

const useStyles = createUseStyles((theme: Theme) => ({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '60%',

    '@media (max-width: 640px)': {
      width: '100%',
      marginBottom: theme.rem(5),
    },
  },
  item: {
    display: 'block',
    width: '48%',

    '@media (max-width: 640px)': {
      width: '100%',
    },
  },
  link: {
    display: 'block',
    margin: theme.rem(2, 0),
    fontSize: theme.rem(1.2),
    fontWeight: theme.text.weight[3],
    color: theme.palette.black[0],
    lineHeight: 1,
    '&:hover': {
      textDecoration: 'underline',
    },

    '@media (max-width: 640px)': {
      margin: theme.rem(1, 0),
    },
  },
}));

const SiteMap = (): ReactElement => {
  const css = useStyles();
  return (
    <ul className={css.list}>
      {LINKS.map(({ text, href }) => (
        <li key={href} className={css.item}>
          <Link href={href}>
            <a className={css.link}>{text}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SiteMap;
