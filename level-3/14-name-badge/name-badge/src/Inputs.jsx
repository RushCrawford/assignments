function Inputs(props) {
    const {handleChange, formData} = props
    return (
        <div className="input-component">
            <input
                type="firstName"
                placeholder="First Name"
                className="input-1"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                minLength={3}
            />
            <input
                type="lastName"
                placeholder="Last Name"
                className="input-2"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                minLength={3}
            />
            <input
                type="email"
                placeholder="Email"
                className="input-3"
                name="email"
                onChange={handleChange}
                value={formData.email}
                minLength={3}
            />
            <input
                type="birthPlace"
                placeholder="Place of Birth"
                className="input-4"
                name="birthPlace"
                onChange={handleChange}
                value={formData.birthPlace}
                minLength={3}
            />
            <input
                type="phoneNumber"
                placeholder="Phone"
                className="input-5"
                name="phoneNumber"
                onChange={handleChange}
                value={formData.phoneNumber}
                minLength={3}
            />
            <input
                type="favoriteFood"
                placeholder="Favorite Food"
                className="input-6"
                name="favoriteFood"
                onChange={handleChange}
                value={formData.favoriteFood}
                minLength={3}
            />
            <textarea
                placeholder="Tell us about yourslef"
                className="input-7"
                name="about"
                onChange={handleChange}
                value={formData.about}
                minLength={3}
            />
        </div>
    )
}

export default Inputs