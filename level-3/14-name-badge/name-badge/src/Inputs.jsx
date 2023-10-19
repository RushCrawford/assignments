function Inputs(props) {
    const {handleChange, formData} = props
    return (
        <div>
            <input
                type="firstName"
                placeholder="First Name"
                className="form--input"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
            />
            <input
                type="lastName"
                placeholder="Last Name"
                className="form--input"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                className="form--input"
                name="email"
                onChange={handleChange}
                value={formData.email}
            />
            <input
                type="birthPlace"
                placeholder="Place of Birth"
                className="form--input"
                name="birthPlace"
                onChange={handleChange}
                value={formData.birthPlace}
            />
            <input
                type="phoneNumber"
                placeholder="Phone"
                className="form--input"
                name="phoneNumber"
                onChange={handleChange}
                value={formData.phoneNumber}
            />
            <input
                type="favoriteFood"
                placeholder="Favorite Food"
                className="form--input"
                name="favoriteFood"
                onChange={handleChange}
                value={formData.favoriteFood}
            />
            <textarea
                placeholder="Tell us about yourslef"
                className="form--input"
                name="about"
                onChange={handleChange}
                value={formData.about}
            />
        </div>
    )
}

export default Inputs