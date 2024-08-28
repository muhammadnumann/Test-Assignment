/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Checkbox from './checkbox';
import Button from './button';
import { useFormik } from 'formik';
import { ErrorMessageToast, SuccessMessageToast } from '../CustomToast';
import Divider from '../utility/divider';

function PageForm() {

  const [pages, setPages] = useState([1, 2, 3, 4, 5]);

  const toggleAll = () => {
    if (formik.values.length === pages.length) {
      formik.setValues([]);
      console.log('All items selected:', formik.values);

    } else {
      formik.setValues(pages);
      console.log('All items deselected:', formik.values);
    }
  };

  const formik = useFormik({
    initialValues: [1],
    validateOnBlur: true,
    validateOnChange: false,
    validateOnMount: false,
    enableReinitialize: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        if (values.length > 0) {
          SuccessMessageToast('Submitted pages: ' + values?.join(', '))
          console.log('Submitted pages: ' + values?.join(', '));
        } else {
          ErrorMessageToast('Submission error: Select page')
        }
      } catch (error) {
        ErrorMessageToast('Submission error:', error)
        console.error('Submission error:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });


  return (

    <form action="" onSubmit={formik.handleSubmit}>
      <div className="flex justify-center items-center">
        <div className="main-container rounded-md">
          <Checkbox label="All Pages" onChange={toggleAll} isChecked={formik.values.length === pages.length} />

          <Divider />
          {pages.map((val) => {
            return (
              <Checkbox
                key={val}
                label={`Page ${val}`}
                id={val}
                isChecked={formik.values.includes(val)}
                // disabled={false}
                onChange={() => {
                  if (formik?.values.includes(val)) {
                    formik?.setValues(formik?.values.filter(number => number !== val));
                  } else {
                    formik?.setValues([...formik?.values, val]);
                  }
                }}
              />
            )
          })}
          <Divider />
          <Button />
        </div>
      </div>
    </form>

  )
}

export default PageForm