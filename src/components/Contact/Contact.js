import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm(initialState);
  };

  const hiddenFlag = '57,57,84,101,104,100,88,101,117,70,50,88,118,82,72,99,53,74,51,89,102,78,72,90,108,86,109,98,102,57,71,97,51,116,51,90,104,120,109,90'

  function decodeCharArray(stringToDecode) {
    let charArrayToDecode = stringToDecode.split(',').reverse()
    let stringArray = []
    charArrayToDecode.forEach(code => {
      stringArray.push(String.fromCharCode(code))
    })
    let encodedString = stringArray.join('')
    let originalString = atob(encodedString)
    return originalString
  }

  flag = decodeCharArray(hiddenFlag)

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>Send Us A Message</h4>
        <p>
          Our Customer Service team are here for all enquiries Monday to Friday,
          9am - 5pm AEDT (Australian Eastern Daylight Savings Time).
        </p>
        <p>We look forward to hearing from you.</p>
      </div>

      <div className={styles.section}>
        <h4>Phone</h4>
        <p>+1 424 280 4971</p>
        <p>Monday to Friday - 9am - 5pm AEDT</p>
      </div>

      <div className={styles.section}>
        <h4>Email</h4>
        <p>
          You can email our Customer Service team at customerservice@example.com
          or via the contact form below:
        </p>
      </div>

      <div className={styles.contactContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.contactForm}>
            <FormInputField
              id={'name'}
              value={contactForm.name}
              handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={'Full Name'}
              required
            />
            <FormInputField
              id={'phone'}
              value={contactForm.phone}
              handleChange={(id, e) => handleChange(id, e)}
              type={'number'}
              labelName={'Phone Number'}
              required
            />
            <FormInputField
              id={'email'}
              value={contactForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Email'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'comment'}
                value={contactForm.comment}
                handleChange={(id, e) => handleChange(id, e)}
                type={'textarea'}
                labelName={'Comments / Questions'}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'buttonSubmit'}
          >
            submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
