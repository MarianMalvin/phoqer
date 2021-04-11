import { useRouter } from 'next/router';
import React, { FormEvent, ReactElement, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';

import { INewOffer, IOfferCard, IState } from '../../../../../interfaces';
import initState from '../../../../../redux/state';
import types from '../../../../../redux/types';
import Button from '../../../../common/button';
import Progress from '../../../../common/loaders/progress';
import notifications from '../../../../common/notifications';
import editOfferTemplate from './edit-content-form.style';
import validate from './edit-content-form.validations';
import StepOne from './step-one';
import StepTwo from './step-two';

const useStyles = createUseStyles(editOfferTemplate);

const newOfferAdapter = (value: IOfferCard | null): INewOffer =>
    value
        ? {
              ...initState.offers.new_offer,
              title: value.title || '',
              price: value.price || 0,
              category: value.category ? value.category : null,
              sub_category: value.sub_category ? value.sub_category : null,
              is_deliverable: value.is_deliverable,
              doc_needed: value.doc_needed,
              description: value.description,
              deposit_val: value.deposit_val || null,
              min_rent_period: value.min_rent_period || 0,
              max_rent_period: value.max_rent_period || 0,
              extra_requirements: value.extra_requirements || '',
              optional: {
                  deposit_val: !!value.deposit_val,
                  min_rent_period: !!value.min_rent_period,
                  max_rent_period: !!value.max_rent_period,
              },
          }
        : initState.offers.new_offer;

export interface IError {
    title?: string;
    price?: string;
    category?: string;
    description?: string;
    deposit_val?: string;
    min_rent_period?: string;
    max_rent_period?: string;
    extra_requirements?: string;
}

const EditContentForm = (): ReactElement => {
    const css = useStyles();
    const { query } = useRouter();
    const dispatch = useDispatch();

    const loading = useSelector<IState, boolean>(state => state.offers.new_offer.loading);
    const init = useSelector<IState, IOfferCard | null>(state => state.offers.single);
    const [value, setValue] = useState<INewOffer>(newOfferAdapter(init));
    const [errors, setErrors] = useState<IError>({});

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        if (validate({ value, setErrors })) {
            dispatch({
                type: types.PATCH_OFFER_STATUS_START,
                payload: value,
                offerId: String(query.offerId || ''),
                callback() {
                    notifications(
                        'success',
                        'Ваши изменения успешно сохранены! Чтобы опубликовать обьявления нажмите на кнопку "Опубликувать"',
                    );
                },
            });
        }
    };

    const handleSave = (): void => {
        if (validate({ value, setErrors })) {
            dispatch({
                type: types.PATCH_OFFER_START,
                payload: value,
                offerId: String(query.offerId || ''),
                callback() {
                    notifications(
                        'success',
                        'Ваши изменения успешно сохранены! Чтобы опубликовать обьявления нажмите на кнопку "Опубликувать"',
                    );
                },
            });
        }
    };

    return (
        <form action="#" method="post" onSubmit={handleSubmit}>
            <StepOne value={value} setValue={setValue} errors={errors} setErrors={setErrors} />
            <StepTwo value={value} setValue={setValue} errors={errors} setErrors={setErrors} />
            <Progress loading={loading} />
            <p className={css.mark}>
                <span className={css.red}>*</span> Обязательные поля
            </p>

            <div className={css.group}>
                <Button loading={loading} className={css.save} type="button" onClick={handleSave}>
                    Сохранить изменения
                </Button>
                <Button loading={loading} className={css.submit} type="submit">
                    Опубликувать
                </Button>
            </div>
        </form>
    );
};

export default EditContentForm;