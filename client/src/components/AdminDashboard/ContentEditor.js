import React, { useState, useEffect } from 'react'
import gsap from 'gsap'

import useStateValue from '../../lib/hooks/useStateValue'

const ContentEditor = (props) => {
    const [{ cms }] = useStateValue()

    const [formInput, setFormInput] = useState(cms)
    const [formIsEdited, setFormIsEdited] = useState(false)

    useEffect(() => {
        setFormInput(cms)
    }, [cms])

    const handleChange = (e) => {
        setFormIsEdited(true)
        const outerState = e.target.classList[1]
        const innerState = e.target.classList[2]
        const value = e.target.value
        setFormInput({
            ...formInput,
            [outerState]: {
                ...formInput[outerState],
                [innerState]: {
                    ...formInput[outerState][innerState],
                    content: value
                }
            }
        })
    }

    return (
        <div className="container-cms-editor">
            <h2>Content Editor</h2>
            <form className="cms-editor">
                {Object.values(formInput).map((outerElem, outerIndex) => {
                    return <div className="form-section" key={outerIndex}>
                        <h3>
                            {Object.keys(formInput)[outerIndex]} Page</h3>
                        {Object.values(outerElem).map((elem, index) => {
                            return <React.Fragment key={elem.title} >
                                <label
                                    className="label"
                                    htmlFor={elem.title}
                                >
                                    {elem.title}
                                </label>
                                <textarea
                                    className={`form-input ${Object.keys(cms)[outerIndex]} ${Object.keys(outerElem)[index]}`}
                                    name={elem.title}
                                    onChange={handleChange}
                                    value={elem.content}
                                    aria-label="Input your content change."
                                    aria-required="true"
                                />
                            </React.Fragment>
                        })}
                    </div>
                })}
            </form>
            {formIsEdited && <SaveAlert setFormIsEdited={setFormIsEdited} formInput={formInput} />}
        </div>
    )
}

export default ContentEditor

const SaveAlert = ({ setFormIsEdited, formInput }) => {

    const [{ cmsId }] = useStateValue()

    const [errors, setErrors] = useState(false)

    useEffect(() => {
        gsap.from(".save-alert", {
            autoAlpha: 0,
            y: 50
        })
    }, [])

    const handleSave = () => {
        fetch(`/api/cms/edit/${cmsId}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwt'),
            },
            body: JSON.stringify({ formInput: formInput })
        })
            .then(res => res.json())
            .then(res => {
                if (res.statusCode === 500) {
                    setErrors(res.errors)
                }
                else {
                    gsap.to(".save-alert", {
                        autoAlpha: 0,
                        y: 50
                    })
                        .then(res => setFormIsEdited(false))
                }
            })

    }


    return (
        <div className="container-save-alert">
            <div className="save-alert">
                <p className="alert-text">{errors ? errors : "You have unsaved changes!"}</p>
                <button className="save-button" onClick={handleSave}>Save Changes</button>
            </div>
        </div>
    )

}