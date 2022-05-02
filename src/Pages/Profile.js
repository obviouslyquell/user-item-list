import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup'

function Profile() {
    const [readOnly, setReadOnly] = React.useState(true)
    const location = useLocation();
    const [obj, setObj] = React.useState(location.state);
    const onEditClick = () =>{
        setReadOnly(!readOnly);
    }
    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const websiteRegExp = /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;
    const signUpSchema = Yup.object().shape({
        name:Yup.string().min(2, 'Too short!').max(50, 'Too long!').required('Required'),
        userName:Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
        email: Yup.string().email().required(),
        street: Yup.string().max(50, "Too long!").required(),
        city: Yup.string().max(50, "Too long!").required(),
        zipCode: Yup.string().max(50, "Too long!").required(),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        website: Yup.string().matches(websiteRegExp, 'Website is not valid!')
    })
  return (
    <div className='content'> 
    <Link to='/' className='link back-link btn'>Назад</Link>
    <div className='header'>
        <h3>Профиль пользователя</h3>
        <button className='edit-btn btn' onClick={()=>onEditClick()}>Редактировать</button>
    </div>
    
    <Formik
        initialValues={{
            name: obj.name,
            userName: obj.username,
            email: obj.email,
            street: obj.address.street,
            city: obj.address.city,
            zipCode: obj.address.zipcode,
            phone: obj.phone,
            website: obj.website
        }}
        validationSchema={signUpSchema}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            console.log(JSON.stringify(values, null, 2));
          }}
        >
            {({errors,touched})=>{
                return(
                <Form className='profile-form'>
                    <label htmlFor='name'>Name: </label>
                    <Field name='name' disabled={readOnly} className={touched.name && errors.name && 'error-input'}/>
                    {touched.name && errors.name && <p>{errors.name}</p>}
                    <label htmlFor='username'>User Name: </label>
                    <Field name='userName' disabled={readOnly} className={touched.userName && errors.userName && 'error-input'}/>
                    {touched.userName && errors.userName && <p>{errors.userName}</p>}
                    <label htmlFor='email'>E-mail: </label>
                    <Field name='email' disabled={readOnly} className={touched.email && errors.email && 'error-input'}/>
                    {touched.email && errors.email && <p>Invalid E-mail</p>}
                    <label htmlFor='street'>Street: </label>
                    <Field name='street' disabled={readOnly} className={touched.street && errors.street && 'error-input'}/>
                    {touched.street && errors.street && <p>{errors.street}</p>}
                    <label htmlFor='city'>City: </label>
                    <Field name='city' disabled={readOnly} className={touched.city && errors.city && 'error-input'}/>
                    {touched.city && errors.city && <p>{errors.city}</p>}
                    <label htmlFor='zipcode'>Zip-code: </label>
                    <Field name='zipCode' disabled={readOnly} className={touched.zipCode && errors.zipCode && 'error-input'}/>
                    {touched.zipCode && errors.zipCode && <p>{errors.zipCode}</p>}
                    <label htmlFor='phone'>Phone: </label>
                    <Field name='phone' disabled={readOnly} className={touched.phone && errors.phone && 'error-input'}/>
                    {touched.phone && errors.phone && <p>{errors.phone}</p>}
                    <label htmlFor='website' >Website: </label>
                    <Field name='website' disabled={readOnly} className={touched.website && errors.website && 'error-input'}/>
                    {touched.website && errors.website && <p>{errors.website}</p>}
                    <label htmlFor='comment'>Comment: </label>
                    <Field as="textarea" name="comment" disabled={readOnly}/>
                    <button type='submit' className='submit-btn btn' disabled={readOnly}>Submit</button>
                </Form>
                )
             }}
        </Formik>
    </div>
  )
}

export default Profile