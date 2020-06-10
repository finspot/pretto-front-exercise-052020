// ------------------------------------
// Banner Component
//-------------------------------------

import React from "react"

// In the case of connection with the back
// import axios from axios

import * as S from "./banner-style.css"

class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isLoading: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.onClickHandler();

        // Use with AXIOS :
        // axios({
        //     method: "POST",
        //     url: "http://localhost:4301/send",
        //     data: this.state
        // }).then((response) => {
        //     if (response.data.status === 'success') {
        //         alert("Email Sent.");
        //         this.resetForm()
        //     } else if (response.data.status === 'fail') {
        //         alert("Email failed to send.")
        //     }
        // })
    }

    // To resert the form after sending with Axios
    resetForm() {
        this.setState({ email: '', isLoading: false })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onClickHandler = () => {
        this.setState({ isLoading: true });
    }

    render() {
        return (

            <div className={S.banner}>

                <div className={S.leftBlock}>

                    <h1 className={S.heading}>De la recherche du bien au crédit</h1>

                    <p className={S.paragraph}>Soyez prêt pour votre premier achat immobilier. Tous nos conseils sont réunis dans un ebook gratuit !</p>

                    <form
                        className={S.formBlock} id="email-submit"
                        onSubmit={this.handleSubmit.bind(this)} method="POST">

                        <div className={S.formContainer}>

                            <input
                                type="email"
                                className={S.emailField} id="email"
                                value={this.state.email} onChange={this.onEmailChange.bind(this)}
                                maxlength="256" placeholder="elon@spacex.com"
                                required="Required" />


                            <button
                                className={S.submitButton}>
                                {this.state.isLoading ?
                                    <img alt='spiner' className={S.spinner} src="https://i.ibb.co/JCSd2ZK/91-1.gif" />
                                    :
                                    "Envoyer"
                                }
                            </button>

                        </div>

                    </form>

                </div>

                <div className={S.rightBlock}>

                    <img
                        className={S.coverBook} alt='pretto-cover'
                        src="https://res.cloudinary.com/pretto-fr/image/upload/c_scale,w_480,q_auto/v1553003467/website/guide/ebook_cover.webp" />

                </div>

                {/* The corner images */}
                <img
                    className={S.cornerTopLeft} alt='corner-top-left'
                    src="https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552571419/ebook/decorations/corner-top-left.svg" />

                <img
                    className={S.cornerBottomRight} alt='corner-bottom-right'
                    src="https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552571427/ebook/decorations/corner-bottom-right.svg" />


                {/* The zig zag images */}
                <img
                    className={S.zigZag1}
                    alt='zig zag 1'
                    src="https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552571447/ebook/decorations/zigzag3.svg" />

                <img className={S.zigZag2}
                    alt='zig zag 2'
                    src="https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552571447/ebook/decorations/zigzag3.svg" />

                <img
                    className={S.zigZag3}
                    alt='zig zag 3'
                    src="https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552571447/ebook/decorations/zigzag2.svg" />

                <img
                    className={S.zigZag4}
                    alt='zig zag 4'
                    src="https://res.cloudinary.com/pretto-fr/image/upload/q_auto/v1552571447/ebook/decorations/zigzag1.svg" />

            </div>

        );
    }

}

export default Banner