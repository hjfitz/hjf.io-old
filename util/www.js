function normalizePort(val) {
  const normalizeVal = parseInt(val, 10);
  if (isNaN(normalizeVal)) {
    // named pipe
    return val;
  }
  if (normalizeVal >= 0) {
    // port number
    return normalizeVal;
  }
  return false;
}

module.exports =
{
  normalizePort,
};
