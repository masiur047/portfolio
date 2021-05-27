import React from 'react'
import { Form } from 'semantic-ui-react'
import { colors } from '../utils/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com';

function ContactScreen() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_vv2nrtt', 'template_arpwp4p', e.target, 'user_fir1KdPOCO87z6UyolDHs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <br />
            <br />
            <br />
            <div className='row' style={{ backgroundColor: colors.one, height: "05px" }}></div>
            <br />
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <br />
                        <br />
                        <br />
                        <div className={'contact-1'}>
                            <h3> <FontAwesomeIcon icon={faMapMarker} />   Location:</h3>
                            <h4>Gobra,Gopalganj, Dhaka- 8100</h4>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={'contact-1'}>
                            <h3> <FontAwesomeIcon icon={faEnvelope} /> Email:</h3>
                            <h4>masiurhasan11765@gmail.com</h4>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={'contact-1'}>
                            <h3> <FontAwesomeIcon icon={faPhone} /> Phone:</h3>
                            <h4>+8801741972732</h4>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                        <br />
                        <br />
                        <div className={'contact-2'}>
                            <Form onSubmit={sendEmail}>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid
                                        label='Name'
                                        size='large'
                                        placeholder='Enter Your Name'
                                        required
                                        name="user_name"
                                       
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid
                                        label='Mail'
                                        placeholder='Enter Your Mail'
                                        required
                                        name="user_email"
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid
                                        label='Subject'
                                        placeholder='Subject'
                                        required
                                        name="subject"
                                    />
                                </Form.Group>
                                <Form.TextArea
                                    label='Message'
                                    placeholder='Tell us more about you...'
                                    required
                                    name="message"
                                />
                                <Form.Button>Submit</Form.Button>
                            </Form>
                        </div>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </>
    )
}


export default ContactScreen
