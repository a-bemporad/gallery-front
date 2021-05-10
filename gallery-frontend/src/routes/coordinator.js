export const goToLogIn = (history) => {
  history.pushState("/login");
};

export const goToSignUp = (history) => {
  history.pushState("/signup");
};

export const goToHome = (history) => {
  history.pushState("/");
};

export const goToImageDetails = (history, id) => {
  history.pushState(`/image/${id}`);
};

export const goToAddImage = (history) => {
  history.pushState("/add-image");
};
