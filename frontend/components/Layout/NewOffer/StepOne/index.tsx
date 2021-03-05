import { faSave } from '@fortawesome/free-regular-svg-icons/faSave';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons/faTrashAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import * as helpers from '../../../../assets/helpers';
import { moneyFormat, numberValidation } from '../../../../assets/helpers';
import routes from '../../../../assets/routes';
import { ICategories, IDropValue, INewOffer, IState } from '../../../../interfaces';
import types from '../../../../redux/types';
import CheckYesNo from '../../../Common/CheckYesNo';
import DropDown from '../../../Common/DropDown';
import { modal } from '../../../Common/Modal';
import SaveModal from '../SaveModal';
import Region from './Region';
import useStyles from './StepOne.styles';

interface IError {
    title?: string;
    price?: string;
    category?: string;
}

const notDone = (value: INewOffer, dispatch: Dispatch): void => {
    dispatch({ type: types.NEW_OFFER_FORM, payload: { ...value, isDone: { ...value.isDone, one: false } } });
};

const StepThree = (): ReactElement => {
    const css = useStyles();
    const router = useRouter();
    const dispatch = useDispatch();

    const [errors, setErrors] = useState<IError>({});
    const init = useSelector<IState, INewOffer>(state => state.offers.newOffer);
    const [value, setValue] = useState<INewOffer>(init);

    useEffect(() => {
        dispatch({ type: types.GET_CATEGORIES_START });
    }, [dispatch]);

    // event handlers
    const handleDelivery = (is_deliverable: boolean): void => {
        setValue({ ...value, is_deliverable });
    };
    const handleTitle = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue({ ...value, title: event.target.value });
        setErrors({});
    };
    const handlePrice = (event: ChangeEvent<HTMLInputElement>): void => {
        const price = event.target.value.replace(/ /gi, '').trim();
        if (numberValidation(price)) return;
        setValue({ ...value, price: price === '' ? null : +price });
        setErrors({});
    };
    const handleCategory = (category: IDropValue | null): void => {
        setValue({ ...value, category });
        setErrors({});
    };

    // on complete
    const data = useSelector<IState, ICategories[]>(state => state.categories);
    const categories = helpers.formatCatList(data);

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        if (!value.title.trim()) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setErrors({ title: 'Это обязательное поле' });
            notDone(value, dispatch);
            return;
        }

        if (!value.category) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setErrors({ category: 'Это обязательное поле' });
            notDone(value, dispatch);
            return;
        }

        if (!value.price && value.price !== 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setErrors({ price: 'Это обязательное поле' });
            notDone(value, dispatch);
            return;
        }

        dispatch({
            type: types.NEW_OFFER_FORM,
            payload: {
                ...value,
                isDone: { ...value.isDone, one: true },
            },
        });
        router.push(routes.new_offer(2));
    };

    const handleClear = (): void => {
        const reset: INewOffer = {
            ...value,
            title: '',
            is_deliverable: false,
            price: null,
            category: null,
            isDone: {
                one: false,
                two: false,
                three: false,
            },
        };
        setValue(reset);
        dispatch({ type: types.NEW_OFFER_FORM, payload: reset });
    };

    const handleSave = (): void => {
        modal.open(<SaveModal />);
        dispatch({
            type: types.NEW_OFFER_FORM,
            payload: value,
        });
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.inner}>
                <h4 className={css.title}>
                    Придумайте название объявления <span className={css.red}>*</span>
                </h4>
                <input
                    value={value.title}
                    onChange={handleTitle}
                    className={clsx(css.input, errors.title && css.errors)}
                    name="name"
                    type="text"
                    placeholder="Название"
                />
                {errors.title && <small className={css.errorsText}>{errors.title}</small>}
            </div>

            <Region />

            <CheckYesNo value={value.is_deliverable} onChange={handleDelivery}>
                Укажите возможность доставки вашего товара в другой город
            </CheckYesNo>

            <div className={css.flex}>
                {!!categories?.length && (
                    <div className={css.inner}>
                        <h4 className={css.title}>
                            Выберите категорию товара <span className={css.red}>*</span>
                        </h4>
                        <div className={clsx(errors.category && css.errors)}>
                            <DropDown
                                data={categories}
                                defaultValue={value.category}
                                placeholder="Выберите категорию"
                                onChange={handleCategory}
                                withSub
                                white
                            />
                        </div>
                        {errors.category && <small className={css.errorsText}>{errors.category}</small>}
                    </div>
                )}

                <div className={css.inner}>
                    <h4 className={css.title}>
                        Цена (грн/день) <span className={css.red}>*</span>
                    </h4>
                    <input
                        value={moneyFormat(value.price || 0)}
                        onChange={handlePrice}
                        className={clsx(css.input, errors.price && css.errors)}
                        type="text"
                        placeholder="Цена"
                    />
                    {errors.price && <small className={css.errorsText}>{errors.price}</small>}
                </div>
            </div>

            <p>
                Вы можете прервать заполнение формы и продолжить в любое удобное время. Вся информация останется на своих местах
            </p>

            <div className={css.saveWrp}>
                <button type="button" className={css.save} onClick={handleSave}>
                    <FontAwesomeIcon icon={faSave} />
                    <span>Сохранить и прервать заполение</span>
                </button>
                <button type="button" className={css.btn} onClick={handleClear}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    <span>Очистить</span>
                </button>
            </div>

            <div className={css.btnWrp}>
                <button type="submit" className={css.next}>
                    Далее
                </button>
            </div>
        </form>
    );
};

export default StepThree;
