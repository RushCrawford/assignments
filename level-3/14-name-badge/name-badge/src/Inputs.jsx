function Inputs(props) {
    const {handleChange, formData} = props
    return (
        <div>
            <input
                type="firstName"
                placeholder="First Name"
                className="input-1"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
            />
            <input
                type="lastName"
                placeholder="Last Name"
                className="input-2"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                className="input-3"
                name="email"
                onChange={handleChange}
                value={formData.email}
            />
            <input
                type="birthPlace"
                placeholder="Place of Birth"
                className="input-4"
                name="birthPlace"
                onChange={handleChange}
                value={formData.birthPlace}
            />
            <input
                type="phoneNumber"
                placeholder="Phone"
                className="input-5"
                name="phoneNumber"
                onChange={handleChange}
                value={formData.phoneNumber}
            />
            <input
                type="favoriteFood"
                placeholder="Favorite Food"
                className="input-6"
                name="favoriteFood"
                onChange={handleChange}
                value={formData.favoriteFood}
            />
            <textarea
                placeholder="Tell us about yourslef"
                className="input-7"
                name="about"
                onChange={handleChange}
                value={formData.about}
            />
        </div>
    )
}

export default Inputs