import React, { ReactElement } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';

import useTrans from '../../../../../hooks/trans.hook';
import types from '../../../../../redux/types';
import routes from '../../../../../utils/routes';
import { Theme } from '../../../../../utils/theming/theme';
import newOfferTemplate from '../new-offer.style';

const useStyles = createUseStyles((theme: Theme) => newOfferTemplate(theme).end);

const StepFive = (): ReactElement => {
    const css = useStyles();
    const trans = useTrans();
    const dispatch = useDispatch();
    const history = useRouter();
    const offerId = String(history.query.offerId || '');

    const handleSubmit = (): void => {
        dispatch({
            type: types.CHANGE_OFFER_STATUS_START,
            offerId,
            status: 'REVIEW',
            callback: () => history.push(routes.offers.new('success', offerId), undefined, { shallow: true }),
        });
    };

    return (
        <div className={css.success}>
            <svg viewBox="0 0 76 76">
                <circle cx={38} cy={38} r={36} />
                <path
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth={5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M17.7,40.9l10.9,10.9l28.7-28.7"
                />
            </svg>

            <h2 className={css.title}>{trans('offer_successfully_generated')}</h2>

            <p className={css.text}>{trans('you_can_put_it_in_drafts')}</p>

            <div className={css.flex}>
                <Link href={routes.my_offers('draft')}>
                    <a className={css.btn}>{trans('send_to_drafts')}</a>
                </Link>
                <button type="button" className={clsx(css.btn, css.primary)} onClick={handleSubmit}>
                    {trans('publish')}
                </button>
            </div>

            <div className={css.box}>
                <ins
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-2424155820333209"
                    data-ad-slot="2195671586"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                />
            </div>
        </div>
    );
};

export default StepFive;
