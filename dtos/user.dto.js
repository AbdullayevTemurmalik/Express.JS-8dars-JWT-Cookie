module.exports = class UserDto {
  email;
  id;
  isActivared;

  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivared = model.isActivared;
  }
};
