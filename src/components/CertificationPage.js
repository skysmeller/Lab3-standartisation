import React from "react";


const certificate = (name) => {
    return (target, name, descriptor) => {
        const original = descriptor.value;
        descriptor.value = () => {
            console.log(`Цей студент отримав сертифікат ${name}`);
            return original.apply(this, arguments);
        };
        return descriptor;
    }
}
class CertificationPage extends React.Component {
    @certificate('AWS Certified Solutions Architect - Associate')
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h1>Інформація про мене</h1>
                <p>Прізвище, імʼя: {this.props.name}</p>
                <p>Напрямок: {this.props.direction}</p>
                <p>Персональна сертифікація: {this.props.certification}</p>
                <p>Аргументація: {this.props.argument}</p>
            </div>
        );
    }
}

export default  CertificationPage;