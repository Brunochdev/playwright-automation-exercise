export function generateUser() {
  const timestamp = Date.now();

  return {
    name: 'Bruno Test',
    email: `bruno${timestamp}@test.com`,
    password: '123456'
  };
}