const responseWithData = (res, data) =>
  res.status(200).send({
    statusCode: 200,
    data: data,
  });
const error = (res) =>
  responseWithData(res, 500, {
    message: "Oops! Something wrong in Server!",
  });

const badRequest = (res, message) =>
  responseWithData(res, 400, {
    message,
  });

const unauthorized = (res) =>
  responseWithData(res, 401, {
    message: "Unauthorized",
  });

const notfound = (res) =>
  responseWithData(res, 404, {
    message: "Resource not found ",
  });

module.exports = {
  responseWithData,
  error,
  badRequest,
  unauthorized,
  notfound,
};
