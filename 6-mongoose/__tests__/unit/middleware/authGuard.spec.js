const authGuard = require('../../../src/middleware/authGuard');
const { validateToken } = require('../../../src/utils/jwt');
jest.mock('../../../src/utils/jwt');
// validateToken = jest.fn()

describe('auth guard middleware', () => {
  it('should return 401 if authorization header is missing', () => {
    const req = {
      header: jest.fn(),
    };
    const res = {
      sendStatus: jest.fn(),
    };
    const next = jest.fn();
    authGuard(req, res, next);
    // expect(res.sendStatus).called? calledWith(401)?
    expect(res.sendStatus).toHaveBeenCalledWith(401);
  });

  it('should call next when token is valid', () => {
    const token = 'token';
    const req = {
      header: jest.fn().mockReturnValue(`Bearer ${token}`),
      // Bearer jwt-token
    };
    const res = {};
    const next = jest.fn();
    validateToken.mockImplementation((token) => ({
      token,
    }));
    authGuard(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
