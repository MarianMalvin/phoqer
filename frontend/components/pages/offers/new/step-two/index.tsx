import { faSave } from '@fortawesome/free-regular-svg-icons/faSave';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons/faTrashAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';

import { numberValidation } from '../../../../../assets/helpers';
import routes from '../../../../../assets/routes';
import useTrans from '../../../../../hooks/trans.hook';
import { INewOffer, IState } from '../../../../../interfaces';
import types from '../../../../../redux/types';
import { Theme } from '../../../../../theming/theme';
import CheckTitle from '../../../../common/checkbox/check-title';
import CheckYesNo from '../../../../common/checkbox/check-yes-no';
import Input from '../../../../common/input';
import Tooltip from '../../../../common/tooltip';
import newOfferTemplate from '../new-offer.style';

const useStyles = createUseStyles((theme: Theme) => newOfferTemplate(theme).step);

interface IError {
    description?: string;
    deposit_val?: string;
    min_rent_period?: string;
    max_rent_period?: string;
}

const StepTwo = (): ReactElement => {
    const css = useStyles();
    const trans = useTrans();
    const history = useRouter();
    const dispatch = useDispatch();

    const [errors, setErrors] = useState<IError>({});
    const init = useSelector<IState, INewOffer>(state => state.offers.new_offer);
    const [value, setValue] = useState<INewOffer>(init);

    // OPTIONAL
    const handleDeposit = (deposit_val: boolean): void => {
        setErrors({});
        setValue({
            ...value,
            deposit_val: null,
            optional: { ...value.optional, deposit_val },
        });
    };
    const handleMin = (min_rent_period: boolean): void => {
        setErrors({});
        setValue({
            ...value,
            min_rent_period: null,
            optional: { ...value.optional, min_rent_period },
        });
    };
    const handleMax = (max_rent_period: boolean): void => {
        setErrors({});
        setValue({
            ...value,
            max_rent_period: null,
            optional: { ...value.optional, max_rent_period },
        });
    };

    // TYPING
    const handleDelivery = (is_deliverable: boolean): void => {
        setValue({ ...value, is_deliverable });
    };
    const validateNumber = (event: ChangeEvent<HTMLInputElement>): void => {
        const name = event.target.name as 'deposit_val' | 'min_rent_period' | 'max_rent_period';
        const num = value[name];
        if (numberValidation(String(num))) return setValue({ ...value, [name]: null });
        setValue({ ...value, [name]: num ? Math.round(+num * 100) / 100 : null });
        setErrors({});
    };
    const handleNumber = (event: ChangeEvent<HTMLInputElement>): void => {
        const num = event.target.value;
        setValue({ ...value, [event.target.name]: num ? num : null });
        setErrors({});
    };
    const handleText = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setErrors({});
        setValue({ ...value, [event.target.name]: event.target.value });
    };
    const handleDocs = (doc_needed: boolean): void => {
        setErrors({});
        setValue({ ...value, doc_needed });
    };

    // SUBMISSION
    const handleBack = () => {
        dispatch({ type: types.NEW_OFFER_FORM, payload: { ...value, isDone: { ...value.isDone, two: false } } });
        history.push(routes.offers.new(1), undefined, { shallow: true });
    };
    const handleClear = (): void => {
        const reset: INewOffer = {
            ...value,
            is_deliverable: false,
            doc_needed: false,
            description: '',
            deposit_val: null,
            min_rent_period: null,
            max_rent_period: null,
            extra_requirements: '',
            optional: {
                deposit_val: false,
                min_rent_period: false,
                max_rent_period: false,
            },
            isDone: {
                one: true,
                two: false,
                three: false,
            },
        };
        setErrors({});
        setValue(reset);
        dispatch({ type: types.NEW_OFFER_FORM, payload: reset });
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        if (!value.description.trim()) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setErrors({ description: 'required_field' });
            dispatch({ type: types.NEW_OFFER_FORM, payload: { ...value, isDone: { ...value.isDone, two: false } } });
            return;
        }

        if (value.optional.deposit_val && !value.deposit_val) {
            setErrors({ deposit_val: 'enter_data_or_disable_field' });
            window.scrollTo({ top: 0, behavior: 'smooth' });
            dispatch({ type: types.NEW_OFFER_FORM, payload: { ...value, isDone: { ...value.isDone, two: false } } });
            return;
        }

        if (value.optional.min_rent_period && !value.min_rent_period) {
            setErrors({ min_rent_period: 'enter_data_or_disable_field' });
            window.scrollTo({ top: 200, behavior: 'smooth' });
            dispatch({ type: types.NEW_OFFER_FORM, payload: { ...value, isDone: { ...value.isDone, two: false } } });
            return;
        }

        if (value.optional.max_rent_period && !value.max_rent_period) {
            setErrors({ max_rent_period: 'enter_data_or_disable_field' });
            dispatch({ type: types.NEW_OFFER_FORM, payload: { ...value, isDone: { ...value.isDone, two: false } } });
            return;
        }

        dispatch({ type: types.NEW_OFFER_FORM, payload: { ...value, isDone: { ...value.isDone, two: true } } });
        history.push(routes.offers.new(3), undefined, { shallow: true });
    };

    const handleSave = (): void => {
        dispatch({
            type: types.NEW_OFFER_FORM,
            payload: value,
        });
        dispatch({
            type: types.POST_OFFER_START,
            payload: null,
            callback: (offerId: string) => history.push(routes.offers.new('draft', offerId), undefined, { shallow: true }),
        });
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <CheckYesNo value={value.doc_needed} onChange={handleDocs}>
                {trans('indicate_whether_you_need_provide_documents')}
            </CheckYesNo>
            <CheckYesNo value={value.is_deliverable} onChange={handleDelivery}>
                {trans('indicate_possibility_of_delivery')}
            </CheckYesNo>
            <div className={css.inner}>
                <h4 className={css.title}>
                    {trans('product_description')} <span className={css.red}>*</span>
                </h4>
                <TextareaAutosize
                    cacheMeasurements
                    value={value.description}
                    onChange={handleText}
                    wrap="soft"
                    className={clsx(css.textarea, errors.description && css.errors)}
                    name="description"
                    placeholder={trans('description')}
                />
                {errors.description && <small className={css.errorsText}>{trans(errors.description)}</small>}
            </div>

            <div className={css.flex}>
                <div className={css.inner}>
                    <CheckTitle value={value.optional.min_rent_period} onChange={handleMin}>
                        <>
                            {trans('minimum_rental_period')} ({trans(value.rental_period?.slug.toLowerCase() || 'day')})
                        </>
                    </CheckTitle>
                    <div className={clsx(css.inputWrp, value.optional.min_rent_period || css.inactive)}>
                        <Input
                            value={value.min_rent_period || ''}
                            onChange={handleNumber}
                            onBlur={validateNumber}
                            name="min_rent_period"
                            placeholder={trans('enter_the_number')}
                            readOnly={!value.optional.min_rent_period}
                            errors={errors.min_rent_period}
                        />
                    </div>
                    {errors.min_rent_period && <small className={css.errorsText}>{errors.min_rent_period}</small>}
                </div>
                <div className={css.inner}>
                    <CheckTitle value={value.optional.max_rent_period} onChange={handleMax}>
                        <>
                            {trans('maximum_rental_period')} ({trans(value.rental_period?.slug.toLowerCase() || 'day')})
                        </>
                    </CheckTitle>
                    <div className={clsx(css.inputWrp, value.optional.max_rent_period || css.inactive)}>
                        <Input
                            value={value.max_rent_period || ''}
                            onChange={handleNumber}
                            onBlur={validateNumber}
                            name="max_rent_period"
                            placeholder={trans('enter_the_number')}
                            readOnly={!value.optional.max_rent_period}
                            errors={errors.max_rent_period}
                        />
                    </div>
                </div>
            </div>

            <div className={css.inner}>
                <CheckTitle value={value.optional.deposit_val} onChange={handleDeposit}>
                    <>
                        {trans('deposit')} ({trans(value.currency?.slug.toLowerCase() || 'uah')})
                    </>
                </CheckTitle>
                <div className={clsx(css.inputWrp, value.optional.deposit_val || css.inactive)}>
                    <Input
                        value={value.deposit_val || ''}
                        onChange={handleNumber}
                        onBlur={validateNumber}
                        name="deposit_val"
                        placeholder={trans('enter_the_number')}
                        readOnly={!value.optional.deposit_val}
                        errors={errors.deposit_val}
                    />
                </div>
            </div>

            <div className={css.inner}>
                <h4 className={css.title}>{trans('additional_requirements')}</h4>
                <Tooltip content="you_can_indicate_here_extra_requirements">
                    <TextareaAutosize
                        value={value.extra_requirements}
                        onChange={handleText}
                        wrap="soft"
                        className={css.textarea}
                        name="extra_requirements"
                        placeholder={trans('additionally')}
                    />
                </Tooltip>
            </div>

            <p>{trans('you_can_interrupt_filling_out_the_form')}</p>

            <div className={css.saveWrp}>
                <Tooltip content="all_your_changes_will_be_saved">
                    <button type="button" className={css.save} onClick={handleSave}>
                        <FontAwesomeIcon icon={faSave} />
                        <span>{trans('save_and_abort_filling')}</span>
                    </button>
                </Tooltip>
                <button type="button" className={css.btn} onClick={handleClear}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    <span>{trans('clear')}</span>
                </button>
            </div>

            <div className={css.btnWrp}>
                <button type="button" className={css.btn} onClick={handleBack}>
                    {trans('back')}
                </button>
                <button type="submit" className={css.next}>
                    {trans('next')}
                </button>
            </div>
        </form>
    );
};

export default StepTwo;
