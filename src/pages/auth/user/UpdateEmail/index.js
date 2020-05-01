import React from "react";
import Breadcrumb from '../../../../components/Breadcrumb';
import { Form, Field, Input, Buttons } from '../../../../components/Form';

const UpdateEmail = () => {
    const title = "Change Your Email";
    const breadcrumbLinks = [
        {
            to: "/",
            text: "Home",
            active: false
        },
        {
            to: "/user/profile",
            text: "User",
            active: false
        },
        {
            to: null,
            text: title,
            active: true
        }
    ];

    return (
        <>
            <Breadcrumb links={breadcrumbLinks} />
            <div className="container-fluid">
                <div className="animated fadeIn">
                    <div className="card">
                        <div className="card-header">
                            {title}
                        </div>
                        <div className="card-body">
                            <Form handleSubmit={() => {

                            }} >
                                <Field label="Email Address">
                                    <Input type="email" name="email-address" />
                                </Field>
                                <Field label="Re-enter Password">
                                    <Input type="password" name="password" />
                                </Field>
                                <Buttons />
                            </Form>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>

    )
}

export default UpdateEmail;