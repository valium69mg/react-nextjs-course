import React from "react";
import CircleStep from './CircleStep';
import Button from './Button';
import Message from './Message';
import { useState, useEffect } from "react";
import ToggleButton from "./ToggleButton";



export default function Steps() {
    const [step, setStep] = useState(0);
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setStep(1);
    }, []);

    const onNextClick = () => {
        if (step === 3) {
            setStep(1);
            return;
        }
        setStep(step + 1);
    }

    const onPreviousClick = () => {
        if (step === 1) {
            setStep(3);
            return;
        }
        setStep(step - 1);
    }

    const onToggle = () => {
        if (open) {
            setOpen(false);
            return;
        }
        setOpen(true);
    }

    return (
        <div className={`App`}>
            <div className='icon-container'>
                <ToggleButton open={open} onClick={onToggle}/>
            </div>
            <div className={`steps-component ${open ? '' : 'non-visible' }`}>
                <CircleStep step={1} active={step === 1} />
                <CircleStep step={2} active={step === 2}/>
                <CircleStep step={3} active={step === 3} />
                
                <Message step={step}/>

                <Button
                className={'button-left button'}
                text='Previous'
                onClick={onPreviousClick}
                />

                <Button
                className={'button-right button'}
                text='Next'
                onClick={onNextClick}
                />
            </div>
        </div>
    )
}
