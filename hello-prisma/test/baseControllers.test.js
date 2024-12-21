const BaseControllers = require('./controllers/baseControllers');

const mockBody = (body = {}) => ({body}) // ini untuk kirim request body

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
}