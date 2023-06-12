import { FormBox, FormFields, FormPrivacy, FormTitle } from 'styles/styled';
import { ErrorField } from './ErrorField';
import PhoneInput from 'react-phone-number-input';
import { useEffect, useRef, useState } from 'react';
import { localeUA } from 'utils/ua.json';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';
import { Loader } from './Loader';
import { toast } from 'react-toastify';

export const HeroForm = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current, { x: -400 }, { x: 0, opacity: 1, duration: 1.5 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [validation, setValidation] = useState({
    isValidName: null,
    isValidPhone: null,
    isValidEmail: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const { name, phone, email } = formData;
  const { isValidName, isValidPhone, isValidEmail } = validation;

  const onChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setFormData(prev => ({ ...prev, [name]: value }));

    switch (name) {
      case 'name':
        if (!value)
          return setValidation(prev => ({ ...prev, isValidName: null }));

        value.length >= 3 && value.length <= 30
          ? setValidation(prev => ({ ...prev, isValidName: true }))
          : setValidation(prev => ({ ...prev, isValidName: false }));

        break;
      case 'email':
        if (!value)
          return setValidation(prev => ({ ...prev, isValidEmail: null }));

        const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        regexp.test(value)
          ? setValidation(prev => ({ ...prev, isValidEmail: true }))
          : setValidation(prev => ({ ...prev, isValidEmail: false }));

        break;
      default:
        throw new Error(
          'Invalid validation. Perhaps you have new fields in your form'
        );
    }
  };

  const onChangePhone = phone => {
    if (!phone) return setValidation(prev => ({ ...prev, isValidPhone: null }));

    phone && phone.length === 13
      ? setValidation(prev => ({ ...prev, isValidPhone: true }))
      : setValidation(prev => ({ ...prev, isValidPhone: false }));
    setFormData(prev => ({ ...prev, phone }));
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(isValidName, isValidPhone, isValidEmail);
    const isValidForm = isValidName && isValidPhone && isValidEmail;

    if (!isValidForm) return toast.error('Заполните все необходимые поля!');

    setIsLoading(true);

    emailjs
      .send(
        'service_rgm99vw',
        'template_4p4h5mq',
        {
          fromName: 'Test Email',
          to: 'designer.web.studio.rgb@gmail.com',
          name,
          email,
          phone,
        },
        'P-hDWjvQKM1uBTXqM'
      )
      .then(() => {
        toast.success('Письмо успешно отправлено!');
      })
      .catch(err => {
        toast.error('Письмо не отправлено!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <FormBox
      ref={ref}
      onSubmit={onSubmit}
      // Оставил тут, по тому что были сомнения в ТЗ
      //   action="mailto:sl7one@gmail.com"
      //   method="post"
      //   encType="text/plain"
    >
      <FormTitle>
        Запишитесь <span>бесплатно</span> <br /> и получите подарок
      </FormTitle>
      <FormFields>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Ваше имя и фамилия"
        />
        <ErrorField
          isValid={isValidName}
          message="Количество символов от 3 до 30"
        />

        <PhoneInput
          type="text"
          name="phone"
          value={phone}
          onChange={onChangePhone}
          placeholder="Ваш номер телефона"
          labels={localeUA}
          international
          countryCallingCodeEditable={false}
          defaultCountry="UA"
        />
        <ErrorField isValid={isValidPhone} message="Только цифры без +380" />

        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Ваш email"
        />
        <ErrorField isValid={isValidEmail} message="example@example.com" />

        {isLoading ? (
          <Loader />
        ) : (
          <button type="submit">Записаться бесплатно</button>
        )}
      </FormFields>
      <FormPrivacy>
        Нажимая на кнопку я согашаюсь <span>с политикой конфидециальности</span>
      </FormPrivacy>
    </FormBox>
  );
};
