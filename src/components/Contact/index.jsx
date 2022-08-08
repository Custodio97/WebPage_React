import React from 'react'
import { Section, Form, InputBox, Input,Button } from './style'
import { BsMailbox } from 'react-icons/bs'
import email from '../../img/email.svg'
const Contact = () => {
    return (
        <Section id="contact">
            <Form>
                <h1>Newsletter</h1>
                <h4>Subscribe Our Newsletter</h4>
                <InputBox>
                    <BsMailbox/>
                  <Input type="email" placeholder='Email' />
                </InputBox>
                <Button>Enviar</Button>
            </Form>
            <img src={email} alt="" />
        </Section>
    )
}

export default Contact