import React, { ReactElement } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createUseStyles } from 'react-jss';

import useTrans from '../../../../../hooks/trans.hook';
import routes from '../../../../../utils/routes';
import { Theme } from '../../../../../utils/theming/theme';
import Advertising from '../../../../common/advertising/gift-modal';
import ConfettiWrp from '../../../../common/confetti';
import newOfferTemplate from '../new-offer.style';

const useStyles = createUseStyles((theme: Theme) => newOfferTemplate(theme).end);

const Success = (): ReactElement => {
    const css = useStyles();
    const trans = useTrans();
    const { query } = useRouter();
    const offerId = String(query.offerId || '');

    return (
        <>
            <ConfettiWrp />
            <div>
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

                    <h2 className={css.title}>{trans('your_offer_has_been_sent_for_moderation')}</h2>

                    <p className={css.text}>{trans('we_will_review_your_offer')}</p>

                    <div className={css.flex}>
                        <Link href={routes.my_offers('all')}>
                            <a className={css.btn}>{trans('go_to_personal_account')}</a>
                        </Link>
                        <Link href={routes.offers.single(offerId)}>
                            <a className={clsx(css.btn, css.primary)}>{trans('view_offer')}</a>
                        </Link>
                    </div>
                </div>

                <Advertising />
            </div>
        </>
    );
};

export default Success;
