import React, { Component } from "react";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        username: "",
        email: "",
        password: "",
        address: "",
      },
      errors: {},
    };
  }

  isValidEmail(email) {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    const { formData } = this.state;
    formData[name] = value;
    this.setState({ formData });
  };
  userAddresses = (e) => {
    const { name, address } = e.target;
    const { formData } = this.state;
    formData[name] = address;
    this.setState({ formData });
  };
  userCity = (e) => {
    const { name, city } = e.target;
    const { formData } = this.state;
    formData[name] = city;
    this.setState({ formData });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const { formData } = this.state;
    const errors = {};

    if (!formData.username) {
      errors.username = "Поле не должно быть пустым";
    }

    if (!formData.email) {
      errors.email = "Email обязателен";
    } else if (!this.isValidEmail(formData.email)) {
      errors.email = "Неверный формат email";
    }

    if (!formData.password) {
      errors.password = "Пароль обязателен";
    } else if (formData.password.length < 6) {
      errors.password = "Пароль должен содержать как минимум 6 символов";
    }

    if (!formData.address) {
      errors.address = "Поле не должно быть пустым";
    }

    if (!formData.city) {
        errors.city = "Поле не должно быть пустым";
    }
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {

    }
  };

  render() {
    const { formData, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login Form</h1>
        <div>
          <label htmlFor="username">First name</label><br />
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={this.handleInputChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label><br />
          <input type="text" />
        </div>
        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={this.handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Пароль:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={this.handleInputChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="">Address</label><br />
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={this.userAddresses}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <div>
        <label htmlFor="">City</label><br />
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={this.userCity}
          />
          {errors.city && <p className="error">{errors.city}</p>}

        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
