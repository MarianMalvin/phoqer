import React from 'react';

import { Button, ResetIcon, useTableContext, OrderStatus, ID } from 'phoqer';
import { useOrdersContext } from 'phoqer-shared';
import { useTranslation } from 'react-i18next';

import { useUpdateOrder } from 'src/hook/update-order.hook';

import css from './bulk-resend.module.scss';

export const BulkResend = (): JSX.Element => {
    const { t } = useTranslation();
    const { loading, orders } = useOrdersContext();
    const { selected, unselectAll } = useTableContext();

    const ids = selected.reduce<ID[]>((acc, index) => {
        if (orders.data[index]?.status === OrderStatus.REJECTED) {
            acc.push(orders.data[index].id);
        }
        return acc;
    }, []);

    const updateOrder = useUpdateOrder();
    const handleReject = (): void => {
        updateOrder(ids, OrderStatus.PENDING).then(unselectAll);
    };

    return (
        <Button disabled={loading || !ids.length} className={css.mr2} onClick={handleReject}>
            {t('Resend rejected offers')}
            <ResetIcon />
        </Button>
    );
};
