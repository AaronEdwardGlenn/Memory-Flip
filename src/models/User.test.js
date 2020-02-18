const User = require('./User');

describe('User model', () => {
  it('User has a name', () => {
    const user = new User({
      email: 'nick@nick.com'
    });
    const { errors } = user.validateSync();
    expect(errors.name.message).toEqual('Path `name` is required.');
  });

  it('has an email', () => {
    const user = new User({
      name: 'Nick',
    });
    const { errors } = user.validateSync();
    expect(errors.email.message).toEqual('Path `email` is required.');
  });
})
;
