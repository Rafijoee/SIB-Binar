const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    {
      setTimeout(() => {
        if (delay > 2000) {
          reject("Connection timeout");
        } else {
          resolve(`Success! ${url} diunduh dalam ${delay}ms`);
        }
      }, delay);
    }
  });
};

requestPromise("www.google.com")