import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Template1 from '../BusinessCardTemplates/Template1/Template1';
import Template2 from "../BusinessCardTemplates/Template2/Template2";
import Template3 from "../BusinessCardTemplates/Template3/Template3";
import Template4 from '../BusinessCardTemplates/Template4/Template4';
import { baseUrl } from '../../utils';
const CustomTemplate = () => {
    const { cardId } = useParams();
    const [template, setTemplate] = useState({
        id: 0,
        "title": "",
        "subtitle": "",
        "userID": 0,
        "email": "",
        "phoneNumber": "",
        "location": "",
        "selectedTemplate": 0
    })


    useEffect(() => {
        fetch(`${baseUrl}/cards/${cardId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
        }).then((res) => res.json())
            .then((data) => {
                if (data.id) {
                    setTemplate(data)
                } else {
                    alert('error')
                }
            })
    }, [cardId])

    const renderSwitch = (template) => {
        switch (template.selectedTemplate) {
            case 1:
                return <Template1 template={template} />;
            case 2:
                return <Template2 template={template} />;
            case 3:
                return <Template3 template={template} />;
            case 4:
                return <Template4 template={template} />;
            default:
                return (<>
                    <h1>Loading</h1>
                </>);
        }
    }

    return (
        <>
            {renderSwitch(template)}
        </>
    )


}

export default CustomTemplate